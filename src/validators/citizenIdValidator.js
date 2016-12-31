const citizenIdValidator = (formValues, fieldValue) => {
  if (fieldValue.length !== 13) {
    return false
  }
  const summation = fieldValue
    .substring(0, 12) // Get first 12 digits
    .split('') // Convert string to array of character
    .map((n, i) => n * (13 - i)) // ['4','1',...,'5'] => [(4*13),(1*12),...,(5 * 0)]
    .reduce((sum, n) => (sum + n), 0) // (4*13) + (1*12) + (0 * 11) + ... + (5 * 0)
  const remainder = summation % 11
  const checkDigit = (11 - remainder) % 10
  return checkDigit === parseInt(fieldValue[12], 10)
}

export default citizenIdValidator
