export default state => (
  (state.product && state.product.productDb)
    ? state.product.productDb
    : undefined
)

