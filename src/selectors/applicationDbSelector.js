export default state => (
  (state.application && state.application.applicationDb)
    ? state.application.applicationDb
    : undefined
)
