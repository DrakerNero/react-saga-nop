import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import RadioInput from 'components/RadioInput'
import {
  LOAN_PURPOSE,
  FOR_NEW_BUSINESS,
  FOR_EXTENDING_EXISTING_BUSINESS,
  OTHER,
} from 'texts'

// enable purposeOther if purpose = "อื่นๆระบุ"
const NanoFinancePurpose = ({ purpose }) => (
  <div className="control">
    <Field
      label={LOAN_PURPOSE}
      name="purpose"
      component={RadioInput}
      options={[
        { value: FOR_NEW_BUSINESS, text: FOR_NEW_BUSINESS },
        { value: FOR_EXTENDING_EXISTING_BUSINESS, text: FOR_EXTENDING_EXISTING_BUSINESS },
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

NanoFinancePurpose.propTypes = {
  purpose: PropTypes.string,
}
export default NanoFinancePurpose
