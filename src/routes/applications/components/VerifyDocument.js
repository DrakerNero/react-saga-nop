import React from 'react'
import { Field } from 'redux-form'
import {
  DOCUMENT,
  HAVE,
  DONT_HAVE,
  NOT_REQ,
  CORRECT,
  INCORRECT,
  YES,
  NO,
  APPLICATION,
  CITIZEN_CARD,
  PAYSLIP,
  BANK_STATEMENT,
  LETTER_OF_GUARANTEE,
  DOCUMENT_VERIFICATION_RESULT,
  CUSTOMER_SIGNATURE,
  VALID_CITIZEN_CARD,
  VALID_PAYSLIP,
  GUARANTOR_SIGNATURE,
  ADDRESS,
  VERIFY_CUSTOMER_DATA,
  AMOUNT_PRODUCT,
  AGE_INCOME_POSITION,
  COMPANY_NUMBER,
  AGE_INCOME_POSITION_APPROPRIATE,
  VERIFY_WITH_BANK,
  NAME_ACCOUNT_NUMBER,
  VALID_STATEMENT,
  VALID_BALANCE,
  FINANCIAL_HISTORY,
  IS_EXISTING_CUSTOMER,
  HAVE_OTHER_LOAN,
  TOTAL_ACCOUNT,
  CLOSED_ACCOUNT,
  OPEN_ACCOUNT,
  TOTAL_LOAN,
  TOTAL_MIN_PAY,
  HAVE_PAST_DUE_STATUS,
  FINANCIAL_STATUS,
  INCOME_MORE_THAN_REQ,
  BALANCE_MORE_THAN_REQ,
  INCOME_MORE_THAN_DEBT,
} from 'texts'
import HorizontalRadioInput from 'components/HorizontalRadioInput'
import Input from 'components/Input'
import CheckListHeader from './CheckListHeader'
import CheckListRadioInput from './CheckListRadioInput'

const CheckList = () => {
  const docChecklist = [
    { label: APPLICATION, name: 'checkApplication' },
    { label: CITIZEN_CARD, name: 'checkCitizenCard' },
    { label: PAYSLIP, name: 'checkPayslip' },
    { label: BANK_STATEMENT, name: 'checkBankStatement' },
    { label: LETTER_OF_GUARANTEE, name: 'checkLetterOfGuarantee' },
  ]
  const docVerificationResult = [
    { label: CUSTOMER_SIGNATURE, name: 'checkCustomerSignature' },
    { label: VALID_CITIZEN_CARD, name: 'checkValidCitizenCard' },
    { label: VALID_PAYSLIP, name: 'checkValidPayslip' },
    { label: GUARANTOR_SIGNATURE, name: 'checkGuarantorSignature' },
    { label: ADDRESS, name: 'checkAddress' },
  ]
  const verifyCustomerData = [
    { label: AMOUNT_PRODUCT, name: 'checkAmountProduct' },
    { label: AGE_INCOME_POSITION, name: 'checkAgeIncomePosition' },
    { label: COMPANY_NUMBER, name: 'checkContactNumber' },
    { label: AGE_INCOME_POSITION_APPROPRIATE, name: 'checkAgeIncomePositionAppropriate' },
  ]
  const verifyWithBank = [
    { label: NAME_ACCOUNT_NUMBER, name: 'checkNameAccountNumber' },
    { label: VALID_STATEMENT, name: 'checkValidStatment' },
    { label: VALID_BALANCE, name: 'checkValidBalance' },
  ]
  const financialHistory = [
    { label: IS_EXISTING_CUSTOMER, name: 'checkIsExistingCustomer' },
    { label: HAVE_OTHER_LOAN, name: 'checkHaveOtherLoan' },
  ]
  const financialStatus = [
    { label: INCOME_MORE_THAN_REQ, name: 'checkIncomeMoreThanReq' },
    { label: BALANCE_MORE_THAN_REQ, name: 'checkBalanceMoreThanReq' },
    { label: INCOME_MORE_THAN_DEBT, name: 'checkIncomeMoreThanDebt' },
  ]
  return (
    <div>
      <div className="columns is-multiline">
        {/* DOCUMENT */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={DOCUMENT}
              options={[
                HAVE,
                DONT_HAVE,
                NOT_REQ,
              ]}
            />
            {
              docChecklist.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: HAVE },
                    { text: DONT_HAVE },
                    { text: NOT_REQ },
                  ]}
                />
              ))
            }
          </div>
        </div>
        {/* DOCUMENT_VERIFICATION_RESULT */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={DOCUMENT_VERIFICATION_RESULT}
              options={[
                CORRECT,
                INCORRECT,
              ]}
            />
            {
              docVerificationResult.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: CORRECT },
                    { text: INCORRECT },
                  ]}
                />
              ))
            }
          </div>
        </div>
        {/* VERIFY_CUSTOMER_DATA */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={VERIFY_CUSTOMER_DATA}
              options={[
                CORRECT,
                INCORRECT,
              ]}
            />
            {
              verifyCustomerData.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: CORRECT },
                    { text: INCORRECT },
                  ]}
                />
              ))
            }
          </div>
        </div>
        {/* VERIFY_WITH_BANK */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={VERIFY_WITH_BANK}
              options={[
                CORRECT,
                INCORRECT,
              ]}
            />
            {
              verifyWithBank.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: CORRECT },
                    { text: INCORRECT },
                  ]}
                />
              ))
            }
          </div>
        </div>
        {/* FINANCIAL_HISTORY */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={FINANCIAL_HISTORY}
              options={[
                YES,
                NO,
              ]}
            />
            {
              financialHistory.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: YES },
                    { text: NO },
                  ]}
                />
              ))
            }
            <div className="control is-grouped is-light-label">
              <Field
                label={TOTAL_ACCOUNT}
                name="checkTotalAccount"
                type="number"
                component={Input}
              />
              <Field
                label={CLOSED_ACCOUNT}
                name="checkClosedAccount"
                type="number"
                component={Input}
              />
              <Field
                label={OPEN_ACCOUNT}
                name="checkOpenAccount"
                type="number"
                component={Input}
              />
            </div>
            <div className="control is-grouped is-light-label">
              <Field
                label={TOTAL_LOAN}
                name="checkTotalLoan"
                type="number"
                isExpanded
                component={Input}
              />
              <Field
                label={TOTAL_MIN_PAY}
                name="checkTotalMinPay"
                type="number"
                isExpanded
                component={Input}
              />
            </div>
            <div className="control is-light-label">
              <Field
                label={HAVE_PAST_DUE_STATUS}
                name="checkFinancialStatus"
                component={HorizontalRadioInput}
                options={[
                  { text: 'ปกติ' },
                  { text: 'เคยมีค้างชำระ' },
                ]}
              />
            </div>
          </div>
        </div>
        {/* FINANCIAL_STATUS */}
        <div className="column is-6">
          <div className="checklist">
            <CheckListHeader
              category={FINANCIAL_STATUS}
              options={[
                YES,
                NO,
              ]}
            />
            {
              financialStatus.map(item => (
                <Field
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  component={CheckListRadioInput}
                  options={[
                    { text: YES },
                    { text: NO },
                  ]}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckList
