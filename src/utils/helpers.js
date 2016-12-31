export const defaultTo = (value, defaultValue) => ( // eslint-disable-line
  (value == null || value !== value) ? defaultValue : value // eslint-disable-line no-self-compare
)
