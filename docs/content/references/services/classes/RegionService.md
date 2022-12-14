# Class: RegionService

Provides layer to manipulate regions.

## Hierarchy

- `"medusa-interfaces"`

  ↳ **`RegionService`**

## Constructors

### constructor

• **new RegionService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Overrides

BaseService.constructor

#### Defined in

[packages/medusa/src/services/region.js:16](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L16)

## Properties

### Events

▪ `Static` **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CREATED` | `string` |
| `DELETED` | `string` |
| `UPDATED` | `string` |

#### Defined in

[packages/medusa/src/services/region.js:10](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L10)

## Methods

### addCountry

▸ **addCountry**(`regionId`, `code`): `Promise`<`any`\>

Adds a country to the region.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to add a country to |
| `code` | `string` | a 2 digit alphanumeric ISO country code. |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:462](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L462)

___

### addFulfillmentProvider

▸ **addFulfillmentProvider**(`regionId`, `providerId`): `Promise`<`any`\>

Adds a fulfillment provider that is available in the region. Fails if the
provider doesn't exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to add the provider to |
| `providerId` | `string` | the provider to add to the region |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:582](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L582)

___

### addPaymentProvider

▸ **addPaymentProvider**(`regionId`, `providerId`): `Promise`<`any`\>

Adds a payment provider that is available in the region. Fails if the
provider doesn't exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to add the provider to |
| `providerId` | `string` | the provider to add to the region |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:535](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L535)

___

### create

▸ **create**(`regionObject`): `Region`

Creates a region.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionObject` | `Region` | the unvalidated region |

#### Returns

`Region`

the newly created region

#### Defined in

[packages/medusa/src/services/region.js:95](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L95)

___

### delete

▸ **delete**(`regionId`): `Promise`<`any`\>

Deletes a region.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to delete |

#### Returns

`Promise`<`any`\>

the result of the delete operation

#### Defined in

[packages/medusa/src/services/region.js:432](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L432)

___

### list

▸ **list**(`selector?`, `config?`): `Promise`<`any`\>

Lists all regions based on a query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `any` | query object for find |
| `config` | `any` | configuration settings |

#### Returns

`Promise`<`any`\>

result of the find operation

#### Defined in

[packages/medusa/src/services/region.js:420](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L420)

___

### removeCountry

▸ **removeCountry**(`regionId`, `code`): `Promise`<`any`\>

Removes a country from a Region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to remove from |
| `code` | `string` | a 2 digit alphanumeric ISO country code to remove |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:499](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L499)

___

### removeFulfillmentProvider

▸ **removeFulfillmentProvider**(`regionId`, `providerId`): `Promise`<`any`\>

Removes a fulfillment provider from a region. Is idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to remove the provider from |
| `providerId` | `string` | the provider to remove from the region |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:660](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L660)

___

### removePaymentProvider

▸ **removePaymentProvider**(`regionId`, `providerId`): `Promise`<`any`\>

Removes a payment provider from a region. Is idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to remove the provider from |
| `providerId` | `string` | the provider to remove from the region |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:626](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L626)

___

### retrieve

▸ **retrieve**(`regionId`, `config?`): `Region`

Retrieves a region by its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the id of the region to retrieve |
| `config` | `any` | configuration settings |

#### Returns

`Region`

the region

#### Defined in

[packages/medusa/src/services/region.js:396](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L396)

___

### retrieveByCountryCode

▸ **retrieveByCountryCode**(`code`, `config?`): `Promise`<`Region`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `any` |
| `config` | `Object` |

#### Returns

`Promise`<`Region`\>

#### Defined in

[packages/medusa/src/services/region.js:362](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L362)

___

### update

▸ **update**(`regionId`, `update`): `Promise`<`any`\>

Updates a region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regionId` | `string` | the region to update |
| `update` | `any` | the data to update the region with |

#### Returns

`Promise`<`any`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/region.js:153](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L153)

___

### validateCountry\_

▸ **validateCountry_**(`code`, `regionId`): `Promise`<`any`\>

Validates a country code. Will normalize the code before checking for
existence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | a 2 digit alphanumeric ISO country code |
| `regionId` | `string` | the id of the current region to check against |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/medusa/src/services/region.js:323](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L323)

___

### validateCurrency\_

▸ **validateCurrency_**(`currencyCode`): `Promise`<`void`\>

Validates a currency code. Will throw if the currency code doesn't exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyCode` | `string` | an ISO currency code |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/medusa/src/services/region.js:302](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L302)

___

### validateFields\_

▸ **validateFields_**(`region`, `id?`): `any`

Validates fields for creation and updates. If the region already exisits
the id can be passed to check that country updates are allowed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `region` | `any` | `undefined` | the region data to validate |
| `id` | ``null`` \| `string` | `undefined` | optional id of the region to check against |

#### Returns

`any`

the validated region data

#### Defined in

[packages/medusa/src/services/region.js:213](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L213)

___

### validateTaxRate\_

▸ **validateTaxRate_**(`taxRate`): `void`

Validates a tax rate. Will throw if the tax rate is not between 0 and 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taxRate` | `number` | a number representing the tax rate of the region |

#### Returns

`void`

#### Defined in

[packages/medusa/src/services/region.js:289](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L289)

___

### withTransaction

▸ **withTransaction**(`transactionManager`): [`RegionService`](RegionService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager` | `any` |

#### Returns

[`RegionService`](RegionService.md)

#### Defined in

[packages/medusa/src/services/region.js:65](https://github.com/medusajs/medusa/blob/f406c8d4/packages/medusa/src/services/region.js#L65)
