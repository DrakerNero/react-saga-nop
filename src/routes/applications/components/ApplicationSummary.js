/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes } from 'react'
import applicationShape from 'shapes/application'
import {
  APPLICATION_NO,
  FULLNAME,
  LOAN_AMOUNT,
  APPLYING_LOAN,
  LOAN_TERM,
  MONTH,
  BAHT,
  SAVE_DRAFT,
  STATUS,
} from 'texts'
import {
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
} from 'appStatus'

const hasNextAction = status => (
  status === FILLFORM
    || status === WAIT_VERIFY
    || status === WAIT_ANALYST
    || status === WAIT_APPROVE
)
const AccountSummary = ({
  id,
  fullname,
  appAmount,
  productName,
  loanTerm,
  applicationData,
  saveApplicationDraft,
  status,
  nextAction,
}) => (
  <div className="section">
    <div className="heading">
      <div className="columns">
        <div className="column is-6">
          <div className="subtitle">{`${APPLICATION_NO}: ${id}`}</div>
          <div className="subtitle">{`${FULLNAME}: ${fullname}`}</div>
          <div className="subtitle">{`${LOAN_AMOUNT}: ${appAmount} ${BAHT}`}</div>
        </div>
        <div className="column is-6">
          <div className="subtitle">{`${APPLYING_LOAN}: ${productName}`}</div>
          <div className="subtitle">{`${LOAN_TERM}: ${loanTerm} ${MONTH}`}</div>
          <div className="subtitle">{`${STATUS}: ${status}`}</div>
        </div>
      </div> {/* columns */}
      <div className="columns">
        <div className="column is-6">
          <div className="control is-grouped">
            <p className="control">
              <a
                className="button is-outlined is-primary"
                onClick={() => {
                  saveApplicationDraft(applicationData)
                }}
              >
                {SAVE_DRAFT}
              </a>
            </p>
            <p className="control">
              { hasNextAction(status) && <button type="submit" className="button is-primary">{nextAction}</button> }
            </p>
          </div>
        </div>
      </div> {/* columns */}
    </div> {/* heading */}
  </div> /* section */
)

AccountSummary.propTypes = {
  id: PropTypes.string,
  fullname: PropTypes.string,
  appAmount: PropTypes.string,
  productName: PropTypes.string,
  loanTerm: PropTypes.string,
  applicationData: PropTypes.shape(
    applicationShape,
  ),
  saveApplicationDraft: PropTypes.func.isRequired,
  status: PropTypes.string,
  nextAction: PropTypes.string,
}
export default AccountSummary
