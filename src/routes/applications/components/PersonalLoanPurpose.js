import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import RadioInput from 'components/RadioInput'
import {
  LOAN_PURPOSE,
  FOR_BUYING_GOODS,
  OTHER,
} from 'texts'

// enable purposeOther if purpose = "อื่นๆระบุ"
const PersonalLoanPurpose = ({ purpose }) => (
  <div className="control">
    <Field
      label={LOAN_PURPOSE}
      name="purpose"
      component={RadioInput}
      options={[
        { value: FOR_BUYING_GOODS, text: FOR_BUYING_GOODS },
        { value: OTHER, text: OTHER },
      ]}
    />
    <div className="control">
      <Field
        name="otherPurpose"
        className="input"
        component="input"
        type="text"
        disabled={purpose !== OTHER}
      />
    </div>
  </div>
)

PersonalLoanPurpose.propTypes = {
  purpose: PropTypes.string,
}
export default PersonalLoanPurpose
