import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import TextArea from 'components/TextArea'
import Input from 'components/Input'
import {
  ANALYST_OPINION,
  ANALYST_SUGGESTED_AMOUNT,
  APPROVER_OPINION,
  APPROVER_AMOUNT,
} from 'texts'
import {
  WAIT_APPROVE,
  APPROVED,
} from 'appStatus'

const AnalystOpinion = () => (
  <div className="control">
    <Field
      label={ANALYST_OPINION}
      name="analystOpinion"
      component={TextArea}
      type="textarea"
    />
    <Field
      label={ANALYST_SUGGESTED_AMOUNT}
      name="analystSuggestedAmount"
      component={Input}
      type="number"
    />
  </div>
)

const ApproverOpinion = () => (
  <div className="control">
    <Field
      label={APPROVER_OPINION}
      name="approverOpinion"
      component={TextArea}
      type="textarea"
    />
    <Field
      label={APPROVER_AMOUNT}
      name="approverAmount"
      component={Input}
      type="number"
    />
  </div>
)
const showApproverOpinion = status => (
  status === WAIT_APPROVE
    || status === APPROVED
)

const AnalyseLoan = ({ status }) => (
  <div className="columns">
    <div className="column is-6">
      <AnalystOpinion />
      { showApproverOpinion(status) && <ApproverOpinion /> }
    </div>
  </div>
)

AnalyseLoan.propTypes = {
  status: PropTypes.string,
}

export default AnalyseLoan
