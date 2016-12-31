import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import RadioInput from 'components/RadioInput'
import productShape from 'shapes/product'
import {
  INSTALLMENT,
  LOAN_TERM,
  TWELVE_MONTHS,
  TWENTY_FOUR_MONTHS,
  THIRTY_SIX_MONTHS,
  FOURTY_EIGHT_MONTHS,
  MORE_THAN_SIXTY_MONTHS,
} from 'texts'

const InstallmentLoanTerm = () => (
  <Field
    label={LOAN_TERM}
    name="loanTerm"
    component={RadioInput}
    options={[
    { value: '12', text: TWELVE_MONTHS },
    { value: '24', text: TWENTY_FOUR_MONTHS },
    { value: '36', text: THIRTY_SIX_MONTHS },
    { value: '48', text: FOURTY_EIGHT_MONTHS },
    { value: '60', text: MORE_THAN_SIXTY_MONTHS },
    ]}
  />
)

const LoanTerm = ({ product }) => (
  !product || product.type === INSTALLMENT
    ? <InstallmentLoanTerm />
    : null
)

LoanTerm.propTypes = {
  product: PropTypes.shape(productShape),
}

export default LoanTerm
