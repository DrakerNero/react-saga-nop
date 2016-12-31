import React, { PropTypes } from 'react'
import createTab from 'hocs/createTab'
import {
  ANALYSE_LOAN,
  VERIFY_DOCUMENT,
  PERSONAL_INFO,
  INCOME_INFO,
  LOAN_DETAIL,
} from 'texts'
import {
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  APPROVED,
} from 'appStatus'
import ApplicationSummary from './ApplicationSummary'
import PersonalInfo from './PersonalInfo'
import IncomeInfo from './IncomeInfo'
import LoanDetail from './LoanDetail'
import VerifyDocument from './VerifyDocument'
import AnalyseLoan from './AnalyseLoan'

const Tab = createTab('applicationFormTab', 0)
const ApplicationForm = ({
  status,
  handleSubmit,
  summary,
  personalInfo,
  incomeInfo,
  loanDetail,
  saveApplicationDraft,
  submitApplication,
}) => {
  const statusToStep = {
    [FILLFORM]: 0,
    [WAIT_VERIFY]: 1,
    [WAIT_ANALYST]: 2,
    [WAIT_APPROVE]: 3,
    [APPROVED]: 4,
  }
  const tabContents = [
    { label: ANALYSE_LOAN, content: <AnalyseLoan key={0} status={status} />, availFrom: WAIT_ANALYST }, // eslint-disable-line max-len
    { label: VERIFY_DOCUMENT, content: <VerifyDocument key={1} />, availFrom: WAIT_VERIFY },
    { label: PERSONAL_INFO, content: <PersonalInfo key={2} {...personalInfo} />, availFrom: FILLFORM }, // eslint-disable-line max-len
    { label: INCOME_INFO, content: <IncomeInfo key={3} {...incomeInfo} />, availFrom: FILLFORM },
    { label: LOAN_DETAIL, content: <LoanDetail key={4} {...loanDetail} />, availFrom: FILLFORM },
  ]
  return (
    <form onSubmit={handleSubmit(submitApplication)}>
      <ApplicationSummary
        {...summary}
        saveApplicationDraft={saveApplicationDraft}
        status={status}
      />
      <Tab
        tabs={
          tabContents.filter((tabContent) => {
            const availableFromStep = statusToStep[tabContent.availFrom]
            const currentStep = statusToStep[status]
            return currentStep >= availableFromStep
          })
        }
      />
    </form>
  )
}

ApplicationForm.propTypes = {
  status: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  summary: PropTypes.shape({
    id: PropTypes.string,
    productName: PropTypes.string,
    fullname: PropTypes.string,
    appAmount: PropTypes.string,
    loanTerm: PropTypes.string,
    nextAction: PropTypes.string,
  }),
  personalInfo: PropTypes.shape({
    relation: PropTypes.string,
  }),
  incomeInfo: PropTypes.shape({
    employmentType: PropTypes.string,
    businessType: PropTypes.string,
  }),
  loanDetail: PropTypes.shape({
    purpose: PropTypes.string,
    purposeType: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        purposeType: PropTypes.string,
        productType: PropTypes.string,
        interestRate: PropTypes.number,
        fine: PropTypes.number,
      }),
    ),
  }),
  saveApplicationDraft: PropTypes.func.isRequired,
  submitApplication: PropTypes.func.isRequired,
}
export default ApplicationForm
