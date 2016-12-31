import { compose } from 'redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import productSelectorCreator from 'selectors/productSelectorCreator'
import productsSelector from 'selectors/productsSelector'
import * as actions from 'reduxModules/application'
import NewApplicationForm from '../components/NewApplicationForm'
import schema from '../schemas/newApplicationSchema'

const selector = formValueSelector('newApplication')
const productIdSelector = state => selector(state, 'productId')
const mapStateToProps = (state) => {
  const productSelector = productSelectorCreator(productIdSelector)
  return {
    purpose: selector(state, 'purpose'),
    product: productSelector(state),
    products: productsSelector(state) || [],
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'newApplication',
    validate: schema.validate,
    destroyOnUnmount: true,
  }),
)(NewApplicationForm)
