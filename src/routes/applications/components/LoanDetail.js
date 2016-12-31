import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Input from 'components/Input'
import RadioInput from 'components/RadioInput'
import SelectInput from 'components/SelectInput'
import productShape from 'shapes/product'
import {
  PERSONAL_LOAN,
  LOAN_AMOUNT,
  HOW_MUCH_YOU_CAN_PAY,
  DOCUMENT_ADDRESS,
  CURRENT_ADDRESS,
  PERMANENT_ADDRESS,
  OFFICE_ADDRESS,
  STATEMENT_DATE,
  APPLYING_LOAN,
  APPLYING_LOAN_NO_SELECT_TEXT,
  PAYTO,
  KTB,
  BBL,
  SCB,
  KBANK,
  OTHER,
  ACCOUNT_NAME,
  BRANCH_NAME,
  ACCOUNT_NO,
  ACCOUNT_TYPE,
  CURRENT,
  SAVING,
  KNOWN_FROM,
  CHOOSE_MEDIA,
  BROCHURE,
  BILLBOARD,
  WEBSITE,
  RADIO,
  TELEVISION,
  NEWSPAPER,
  INSTALLMENT,
} from 'texts'
import LoanTerm from './LoanTerm'
import PersonalLoanPurpose from './PersonalLoanPurpose'
import NanoFinancePurpose from './NanoFinancePurpose'

const LoanDetail = ({ purpose, purposeType, type, products, knownFrom }) => (
  <div className="column is-8-desktop is-6-widescreen">
    <Field
      label={DOCUMENT_ADDRESS}
      name="documentAddress"
      component={RadioInput}
      options={[
        { text: CURRENT_ADDRESS },
        { text: PERMANENT_ADDRESS },
        { text: OFFICE_ADDRESS },
      ]}
    />
    <Field
      label={APPLYING_LOAN}
      name="productId"
      noSelectText={APPLYING_LOAN_NO_SELECT_TEXT}
      component={SelectInput}
      className="is-fullwidth is-primary"
      options={
        products.map(product => ({
          text: product.name,
          value: product.id,
        }))
      }
    />

    {
      /* Choose loan term if Installment */
      type === INSTALLMENT
        ? <LoanTerm />
        : null
    }

    {
        /* Select purpose according to loan type */
        purposeType === PERSONAL_LOAN
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

    <Field
      label={STATEMENT_DATE}
      name="statementDate"
      component={RadioInput}
      options={[
        { text: '1' },
        { text: '5' },
        { text: '15' },
        { text: '25' },
      ]}
    />

    <Field
      label={PAYTO}
      name="bank"
      component={RadioInput}
      options={[
        { text: KTB },
        { text: BBL },
        { text: SCB },
        { text: KBANK },
        { text: OTHER },
      ]}
    />

    <div className="control is-grouped">
      <Field
        label={ACCOUNT_NAME}
        name="accountName"
        component={Input}
        type="text"
      />
      <Field
        label={BRANCH_NAME}
        name="branchName"
        component={Input}
        type="text"
      />
    </div>

    <Field
      label={ACCOUNT_NO}
      name="accountNo"
      component={Input}
      type="text"
    />

    <Field
      label={ACCOUNT_TYPE}
      name="accountType"
      component={SelectInput}
      options={[
        { text: SAVING },
        { text: CURRENT },
      ]}
    />

    <Field
      label={KNOWN_FROM}
      name="knownFrom"
      noSelectText={CHOOSE_MEDIA}
      component={SelectInput}
      options={[
        { text: BROCHURE },
        { text: BILLBOARD },
        { text: WEBSITE },
        { text: RADIO },
        { text: TELEVISION },
        { text: NEWSPAPER },
        { text: OTHER },
      ]}
    />

    <Field
      name="otherKnownFrom"
      component={Input}
      type="text"
      disabled={
        (knownFrom !== TELEVISION)
        && (knownFrom !== NEWSPAPER)
        && (knownFrom !== OTHER)
      }
    />
  </div>
)

LoanDetail.propTypes = {
  purpose: PropTypes.string,
  purposeType: PropTypes.string,
  type: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape(productShape),
  ),
  knownFrom: PropTypes.string,
}
export default LoanDetail
