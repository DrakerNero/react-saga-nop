import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, getFormValues, formValueSelector } from 'redux-form'
import withInitialValues from 'hocs/withInitialValues'
import * as actions from 'reduxModules/application'
import { defaultTo } from 'utils/helpers'
import productSelectorCreator from 'selectors/productSelectorCreator'
import productsSelector from 'selectors/productsSelector'
import applicationSelectorCreator from 'selectors/applicationSelectorCreator'
import {
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
} from 'appStatus'
import {
  VERIFY_DATA,
  ANALYSE_LOAN,
  APPROVE_LOAN,
  APPROVE,
} from 'texts'

import ApplicationForm from '../components/ApplicationForm'
import schema from '../schemas/applicationFormSchema'

const selector = formValueSelector('application')
const productIdSelector = state => selector(state, 'productId')

const nextAction = (currentStatus) => {
  const mapper = {
    [FILLFORM]: VERIFY_DATA,
    [WAIT_VERIFY]: ANALYSE_LOAN,
    [WAIT_ANALYST]: APPROVE_LOAN,
    [WAIT_APPROVE]: APPROVE,
  }
  return mapper[currentStatus] || ''
}

const mapStateToProps = (state, ownProps) => {
  const { firstname, lastname } = selector(state, 'firstname', 'lastname')
  const productSelector = productSelectorCreator(productIdSelector)
  const product = productSelector(state) || {}
  const applicationSelector = applicationSelectorCreator(ownProps.id)
  const status = (applicationSelector(state))
      ? applicationSelector(state).status
      : undefined

  return {
    // Pass to redux form to handover to ApplicationForm
    status,
    summary: {
      id: defaultTo(selector(state, 'id'), ''),
      productName: product.name,
      fullname: `${defaultTo(firstname, '')} ${defaultTo(lastname, '')}`,
      appAmount: defaultTo(selector(state, 'appAmount'), '0'),
      loanTerm: defaultTo(selector(state, 'loanTerm'), '-'),
      applicationData: getFormValues('application')(state),
      nextAction: nextAction(status),
    },
    personalInfo: {
      relation: selector(state, 'relation'),
    },
    incomeInfo: {
      employmentType: selector(state, 'employmentType'),
      businessType: selector(state, 'businessType'),
      extraIncomeSource: selector(state, 'extraIncomeSource'),
    },
    loanDetail: {
      purpose: selector(state, 'purpose'),
      purposeType: product.purposeType,
      productType: product.type,
      products: productsSelector(state),
      knownFrom: selector(state, 'knownFrom'),
    },
    // Pass as props.initialValues to reduxForm
    initialValues: applicationSelector(state),
  }
}

export default compose(
  connect(mapStateToProps, actions),
  withInitialValues,
  reduxForm({
    form: 'application',
    validate: schema.validate,
    destroyOnUnmount: true,
  }),
)(ApplicationForm)
