import { createSelector } from 'reselect'
import applicationsSelector from './applicationsSelector'
import productDbSelector from './productDbSelector'

const applicationsWithProductSelector = createSelector(
  applicationsSelector,
  productDbSelector,
  (applications, productDb) => {
    if (applications && productDb) {
      return applications.map((application) => {
        const product = productDb[application.productId]
        if (product === undefined) {
          return application
        }
        return {
          ...application,
          productId: product.id,
          productName: product.name,
          productType: product.type,
          productPurposeType: product.purposeType,
        }
      })
    }
    return undefined
  },
)

export default applicationsWithProductSelector
