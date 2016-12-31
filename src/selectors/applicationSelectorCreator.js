import { createSelector } from 'reselect'
import applicationDbSelector from './applicationDbSelector'

const applicationSelectorCreator = id => createSelector(
  applicationDbSelector,
  applicationDb => (
    (applicationDb !== undefined)
      ? applicationDb[id]
      : undefined
  ),
)

export default applicationSelectorCreator
