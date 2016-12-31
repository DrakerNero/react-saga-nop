import { createSelector } from 'reselect'
import productDbSelector from './productDbSelector'

export default createSelector(
  productDbSelector,
  productDb => ((productDb !== undefined)
    ? Object.values(productDb)
    : undefined
  ),
)
