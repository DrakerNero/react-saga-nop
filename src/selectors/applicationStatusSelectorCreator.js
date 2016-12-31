import { createSelector } from 'reselect'
import applicationSelectorCreator from './applicationSelectorCreator'

export default (id) => {
  const applicationSelector = applicationSelectorCreator(id)
  return createSelector(
    applicationSelector,
    application => (
      (application)
        ? application.status
        : undefined
    ),
  )
}
