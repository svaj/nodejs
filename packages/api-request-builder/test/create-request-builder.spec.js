import { createRequestBuilder, features } from '../src'

// order matters!
const expectedServiceKeys = [
  'cartDiscounts',
  'carts',
  'categories',
  'channels',
  'customerGroups',
  'customers',
  'customersEmailVerification',
  'customersEmailVerificationToken',
  'customersPassword',
  'customersPasswordToken',
  'customersPasswordReset',
  'customObjects',
  'discountCodes',
  'extensions',
  'inventory',
  'login',
  'messages',
  'myCarts',
  'myOrders',
  'orders',
  'orderImport',
  'payments',
  'productDiscounts',
  'productProjections',
  'productProjectionsSearch',
  'productProjectionsSuggest',
  'products',
  'productTypes',
  'project',
  'reviews',
  'shippingMethods',
  'shoppingLists',
  'states',
  'subscriptions',
  'taxCategories',
  'types',
  'zones',
].sort()

describe('createRequestBuilder', () => {
  test('export initialized services when passed only projectKey', () => {
    const requestBuilder = createRequestBuilder({ projectKey: 'foo' })
    expect(Object.keys(requestBuilder).sort()).toEqual(expectedServiceKeys)
  })

  test('export initialized services with custom services', () => {
    const requestBuilder = createRequestBuilder({
      projectKey: 'foo',
      customServices: {
        foo: {
          type: 'foo',
          endpoint: '/foo',
          features: [features.query],
        },
      },
    })
    expect(Object.keys(requestBuilder).sort()).toEqual(
      expectedServiceKeys.concat('foo').sort()
    )
  })
})
