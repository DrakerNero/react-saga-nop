import { createSelector } from 'reselect'
import productDbSelector from './productDbSelector'

export default productIdSelector => (
  createSelector(
    productIdSelector,
    productDbSelector,
    (productId, productDb) => (
      (productDb !== undefined)
        ? productDb[productId]
        : undefined
    ),
  )
)

