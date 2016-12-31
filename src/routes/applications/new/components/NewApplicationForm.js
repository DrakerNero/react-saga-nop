import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Input from 'components/Input'
import SelectInput from 'components/SelectInput'
import productShape from 'shapes/product'
import {
  PERSONAL_LOAN,
  CITIZEN_ID,
  CITIZEN_ID_PLACE_HOLDER,
  APPLYING_LOAN,
  APPLYING_LOAN_NO_SELECT_TEXT,
  LOAN_AMOUNT,
  HOW_MUCH_YOU_CAN_PAY,
  PROCEED_TO_APPLICATION_FORM,
} from 'texts'
import PersonalLoanPurpose from '../../components/PersonalLoanPurpose'
import NanoFinancePurpose from '../../components/NanoFinancePurpose'
import LoanTerm from '../../components/LoanTerm'

const NewAccountForm = ({
    handleSubmit,
    pristine,
    submitting,
    purpose,
    product,
    products,
    createApplication,
  }) => (
    <form onSubmit={handleSubmit(createApplication)}>
      <Field
        label={CITIZEN_ID}
        name="citizenId"
        type="text"
        placeholder={CITIZEN_ID_PLACE_HOLDER}
        component={Input}
      />

      <Field
        label={APPLYING_LOAN}
        name="productId"
        noSelectText={APPLYING_LOAN_NO_SELECT_TEXT}
        component={SelectInput}
        className="is-fullwidth is-primary"
        options={
          products.map(productItem => ({
            text: productItem.name,
            value: productItem.id,
          }))
        }
      />

      <LoanTerm product={product} />

      {
        /* Select purpose according to loan type */
        !product || product.purposeType === PERSONAL_LOAN
          ? <PersonalLoanPurpose purpose={purpose} />
          : <NanoFinancePurpose purpose={purpose} />
      }

      <Field
        label={LOAN_AMOUNT}
        name="appAmount"
        type="number"
        component={Input}
      />

      <Field
        label={HOW_MUCH_YOU_CAN_PAY}
        name="canPay"
        type="number"
        component={Input}
      />

      <button
        className="button is-primary"
        type="submit"
        disabled={pristine || submitting}
      >
        {PROCEED_TO_APPLICATION_FORM}
      </button>
    </form>
)


NewAccountForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  purpose: PropTypes.string,
  product: PropTypes.shape(productShape),
  products: PropTypes.arrayOf(
    PropTypes.shape(productShape),
  ).isRequired,
  createApplication: PropTypes.func,
}

export default NewAccountForm
