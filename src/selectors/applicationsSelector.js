import { createSelector } from 'reselect'
import applicationDbSelector from './applicationDbSelector'

export default createSelector(
  applicationDbSelector,
  applicationDb => ((applicationDb !== undefined)
    ? Object.values(applicationDb)
    : undefined
  ),
)
