const path = require("path")

const setupServer = require("../../../helpers/setup-server")
const { useApi } = require("../../../helpers/use-api")
const { initDb, useDb } = require("../../../helpers/use-db")
const adminSeeder = require("../../helpers/admin-seeder")

const {
  simpleRegionFactory,
  simpleCartFactory,
  simpleGiftCardFactory,
  simpleProductFactory,
} = require("../../factories")

jest.setTimeout(30000)

describe("Order Totals", () => {
  let medusaProcess
  let dbConnection

  const doAfterEach = async () => {
    const db = useDb()
    return await db.teardown()
  }

  beforeAll(async () => {
    const cwd = path.resolve(path.join(__dirname, "..", ".."))
    try {
      dbConnection = await initDb({ cwd })
      medusaProcess = await setupServer({ cwd })
    } catch (error) {
      console.log(error)
    }
  })

  afterAll(async () => {
    const db = useDb()
    await db.shutdown()
    medusaProcess.kill()
  })

  afterEach(async () => {
    return await doAfterEach()
  })

  test("calculates totals correctly for order with non-taxable gift card", async () => {
    await adminSeeder(dbConnection)
    await simpleProductFactory(dbConnection, {
      variants: [
        { id: "variant_1", prices: [{ currency: "usd", amount: 95600 }] },
        { id: "variant_2", prices: [{ currency: "usd", amount: 79600 }] },
      ],
    })

    const region = await simpleRegionFactory(dbConnection, {
      gift_cards_taxable: false,
      tax_rate: 25,
    })

    const cart = await simpleCartFactory(dbConnection, {
      id: "test-cart",
      email: "testnation@medusajs.com",
      region: region.id,
      line_items: [],
    })

    const giftCard = await simpleGiftCardFactory(dbConnection, {
      region_id: region.id,
      value: 160000,
      balance: 160000,
    })

    const api = useApi()

    await api.post("/store/carts/test-cart/line-items", {
      quantity: 1,
      variant_id: "variant_1",
    })
    await api.post("/store/carts/test-cart/line-items", {
      quantity: 1,
      variant_id: "variant_2",
    })
    await api.post("/store/carts/test-cart", {
      gift_cards: [{ code: giftCard.code }],
    })
    await api.post(`/store/carts/${cart.id}/payment-sessions`)
    const response = await api.post(`/store/carts/test-cart/complete`)
    expect(response.status).toEqual(200)
    expect(response.data.type).toEqual("order")
    const orderId = response.data.data.id

    const { data } = await api.get(`/admin/orders/${orderId}`, {
      headers: { Authorization: `Bearer test_token` },
    })

    expect(data.order.gift_card_transactions).toEqual([
      expect.objectContaining({
        amount: 160000,
        is_taxable: false,
        tax_rate: null,
      }),
    ])
    expect(data.order.gift_card_total).toEqual(160000)
    expect(data.order.gift_card_tax_total).toEqual(0)
    expect(data.order.total).toEqual(59000)
  })

  test("calculates totals correctly for order with taxable gift card", async () => {
    await adminSeeder(dbConnection)
    await simpleProductFactory(dbConnection, {
      variants: [
        { id: "variant_1", prices: [{ currency: "usd", amount: 95600 }] },
        { id: "variant_2", prices: [{ currency: "usd", amount: 79600 }] },
      ],
    })

    const region = await simpleRegionFactory(dbConnection, {
      gift_cards_taxable: true,
      tax_rate: 25,
    })

    const cart = await simpleCartFactory(dbConnection, {
      id: "test-cart",
      email: "testnation@medusajs.com",
      region: region.id,
      line_items: [],
    })

    const giftCard = await simpleGiftCardFactory(dbConnection, {
      region_id: region.id,
      value: 160000,
      balance: 160000,
    })

    const api = useApi()

    await api.post("/store/carts/test-cart/line-items", {
      quantity: 1,
      variant_id: "variant_1",
    })
    await api.post("/store/carts/test-cart/line-items", {
      quantity: 1,
      variant_id: "variant_2",
    })
    await api.post("/store/carts/test-cart", {
      gift_cards: [{ code: giftCard.code }],
    })
    await api.post(`/store/carts/${cart.id}/payment-sessions`)
    const response = await api.post(`/store/carts/test-cart/complete`)
    expect(response.status).toEqual(200)
    expect(response.data.type).toEqual("order")
    const orderId = response.data.data.id

    const { data } = await api.get(`/admin/orders/${orderId}`, {
      headers: { Authorization: `Bearer test_token` },
    })

    expect(data.order.gift_card_transactions).toEqual([
      expect.objectContaining({
        amount: 160000,
        is_taxable: true,
        tax_rate: 25,
      }),
    ])
    expect(data.order.gift_card_total).toEqual(160000)
    expect(data.order.gift_card_tax_total).toEqual(40000)
    expect(data.order.tax_total).toEqual(3800)
    expect(data.order.total).toEqual(19000)
  })
})
