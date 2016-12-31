import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Label from 'components/Label'
import Input from 'components/Input'
import RadioInput from 'components/RadioInput'
import Address from 'components/Address'
import {
  EMPLOYMENT_TYPE,
  GOVERNMENT_OFFICER,
  STATE_ENTERPRISE,
  COMPANY_EMPLOYEE,
  REGISTERED_COMPANY_OWNER,
  UNREGISTERED_COMPANY_OWNER,
  FREELANCE,
  OTHER,
  BUSINESS_TYPE,
  AGRICULTURE,
  INDUSTRY,
  COMMERCE,
  CONSTRUCTION,
  FINANCE,
  SERVICE,
  OCCUPATION,
  OCCUPATION_PLACEHOLDER,
  COMPANY_NAME,
  COMPANY_NAME_PLACEHOLDER,
  OFFICE_ADDRESS,
  EXPERIENCE,
  YEAR,
  MONTH,
  INCOME,
  REGULAR_INCOME,
  EXTRA_INCOME,
  EXTRA_INCOME_SOURCE,
  OT_BONUS,
} from 'texts'

const IncomeInfo = ({ employmentType, businessType, extraIncomeSource }) => (
  <div className="column is-8-desktop is-6-widescreen">
    {/* Employment Type */}
    <Field
      label={EMPLOYMENT_TYPE}
      name="employmentType"
      component={RadioInput}
      options={[
        { text: GOVERNMENT_OFFICER },
        { text: STATE_ENTERPRISE },
        { text: COMPANY_EMPLOYEE },
        { text: REGISTERED_COMPANY_OWNER },
        { text: UNREGISTERED_COMPANY_OWNER },
        { text: FREELANCE },
        { text: OTHER },
      ]}
    />
    <Field
      name="otherEmploymentType"
      component={Input}
      type="text"
      disabled={employmentType !== OTHER}
    />
    {/* Employment Type */}

    {/* Business Type */}
    <Field
      label={BUSINESS_TYPE}
      name="businessType"
      component={RadioInput}
      options={[
        { text: AGRICULTURE },
        { text: INDUSTRY },
        { text: COMMERCE },
        { text: CONSTRUCTION },
        { text: FINANCE },
        { text: SERVICE },
        { text: OTHER },
      ]}
    />
    <Field
      name="otherBusinessType"
      component={Input}
      type="text"
      disabled={businessType !== OTHER}
    />
    {/* End Business Type */}

    <Field
      label={OCCUPATION}
      name="occupation"
      placeholder={OCCUPATION_PLACEHOLDER}
      component={Input}
      type="text"
    />

    <Field
      label={COMPANY_NAME}
      name="companyName"
      placeholder={COMPANY_NAME_PLACEHOLDER}
      component={Input}
      type="text"
    />

    <Address prefix="office" label={OFFICE_ADDRESS} />

    <Label>{EXPERIENCE}</Label>
    <div className="control is-grouped">
      <Field
        name="workYear"
        type="number"
        placeholder={YEAR}
        component={Input}
      />
      <Field
        name="workMonth"
        type="number"
        placeholder={MONTH}
        component={Input}
      />
    </div>

    <Label>{INCOME}</Label>
    <div className="control is-grouped">
      <Field
        name="income"
        type="number"
        placeholder={REGULAR_INCOME}
        component={Input}
      />
      <Field
        name="extraIncome"
        type="number"
        placeholder={EXTRA_INCOME}
        component={Input}
      />
    </div>

    <Field
      label={EXTRA_INCOME_SOURCE}
      name="extraIncomeSource"
      options={[
        { text: OT_BONUS },
        { text: OTHER },
      ]}
      component={RadioInput}
    />
    <Field
      name="otherExtraIncomeSource"
      component={Input}
      type="text"
      disabled={extraIncomeSource !== OTHER}
    />
  </div>
)

IncomeInfo.propTypes = {
  employmentType: PropTypes.string,
  businessType: PropTypes.string,
  extraIncomeSource: PropTypes.string,
}

export default IncomeInfo
