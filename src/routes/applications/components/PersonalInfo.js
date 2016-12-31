import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Input from 'components/Input'
import SelectInput from 'components/SelectInput'
import Label from 'components/Label'
import Address from 'components/Address'
import RadioInput from 'components/RadioInput'
import HorizontalRadioInput from 'components/HorizontalRadioInput'
import {
  CITIZEN_ID,
  CITIZEN_ID_PLACE_HOLDER,
  FULLNAME,
  FIRSTNAME,
  LASTNAME,
  TITLE,
  MR,
  MRS,
  MISS,
  BIRTHDATE,
  CURRENT_ADDRESS,
  PERMANENT_ADDRESS,
  RESIDENT_INFO,
  STAY_PERIOD,
  RESIDENT_TYPE,
  RESIDENT_OWNER,
  OWNER_ME,
  OWNER_OTHER_PEOPLE,
  OWNER_RENT,
  OWNER_INSTALLMENT,
  OWNER_PARENT,
  YEAR,
  MONTH,
  HOUSE,
  TOWNHOUSE,
  CONDOMINIUM,
  EDUCATION,
  HIGH_SCHOOL,
  DIPLOMA,
  BACHELOR,
  MASTER,
  MARITAL_STATUS,
  SINGLE,
  MARRIED,
  DIVORCE,
  WIDOW,
  SPOUSE_FULLNAME,
  SPOUSE_CONTACT,
  CONTACT_PERSON,
  CONTACT_NUMBER,
  RELATION,
  PARENTS,
  HUSBAND,
  WIFE,
  OTHER,
  SOCIAL_MEDIA,
  EMAIL,
  LINE,
  FACEBOOK,
} from 'texts'

const PersonalInfo = ({ relation }) => (
  <div className="column is-8-desktop is-6-widescreen">
    <div className="control">
      <Field
        label={CITIZEN_ID}
        name="citizenId"
        type="text"
        placeholder={CITIZEN_ID_PLACE_HOLDER}
        component={Input}
      />

      <Label>{FULLNAME}</Label>
      <div className="control is-grouped">
        <Field
          name="title"
          component={SelectInput}
          noSelectText={TITLE}
          options={[
            { value: MR, text: MR },
            { value: MRS, text: MRS },
            { value: MISS, text: MISS },
          ]}
        />
        <Field
          name="firstname"
          component={Input}
          placeholder={FIRSTNAME}
          type="text"
          isExpanded
        />
        <Field
          name="lastname"
          component={Input}
          placeholder={LASTNAME}
          type="text"
          isExpanded
        />
      </div> {/** prename, firstname, lastname group */}

      <Field
        label={BIRTHDATE}
        name="birthdate"
        component={Input}
        type="date"
      />

      {/* Current address */}
      <Address prefix="current" label={CURRENT_ADDRESS} />

      {/* Permanent address */}
      <Address prefix="permanent" label={PERMANENT_ADDRESS} />

      <Label>{RESIDENT_INFO}</Label>
      <Label>{STAY_PERIOD}</Label>
      <div className="control is-grouped">
        <Field
          name="stayYear"
          type="number"
          placeholder={YEAR}
          component={Input}
        />
        <Field
          name="stayMonth"
          type="number"
          placeholder={MONTH}
          component={Input}
        />
      </div>

      <Field
        label={RESIDENT_TYPE}
        name="residentType"
        options={[
          { text: HOUSE },
          { text: TOWNHOUSE },
          { text: CONDOMINIUM },
        ]}
        component={RadioInput}
      />

      <Field
        label={RESIDENT_OWNER}
        name="residentOwner"
        options={[
          { text: OWNER_ME },
          { text: OWNER_OTHER_PEOPLE },
          { text: OWNER_RENT },
          { text: OWNER_INSTALLMENT },
          { text: OWNER_PARENT },
        ]}
        component={RadioInput}
      />

      <Field
        label={EDUCATION}
        name="education"
        options={[
          { text: HIGH_SCHOOL },
          { text: DIPLOMA },
          { text: BACHELOR },
          { text: MASTER },
        ]}
        component={RadioInput}
      />

      <Field
        label={MARITAL_STATUS}
        name="maritalStatus"
        options={[
          { text: SINGLE },
          { text: MARRIED },
          { text: DIVORCE },
          { text: WIDOW },
        ]}
        component={HorizontalRadioInput}
      />

      {/** Spose info */}
      <Label>{SPOUSE_FULLNAME}</Label>
      <div className="control is-grouped">
        <Field
          name="spouseTitle"
          component={SelectInput}
          noSelectText={TITLE}
          options={[
            { value: MR, text: MR },
            { value: MRS, text: MRS },
            { value: MISS, text: MISS },
          ]}
        />
        <Field
          name="spouseFirstname"
          component={Input}
          placeholder={FIRSTNAME}
          type="text"
          isExpanded
        />
        <Field
          name="spouseLastname"
          component={Input}
          placeholder={LASTNAME}
          type="text"
          isExpanded
        />
      </div> {/** prename, firstname, lastname group */}

      <Label>{SPOUSE_CONTACT}</Label>
      <div className="control is-grouped">
        <Field
          name="spouseTelNo"
          component={Input}
          placeholder="021234567, ..."
          type="text"
          isExpanded
        />
        <Field
          name="spouseMobileNo"
          component={Input}
          placeholder="0861234567"
          type="text"
          isExpanded
        />
      </div>

      {/** Spouse info */}
      <Label>{CONTACT_PERSON}</Label>
      <div className="control is-grouped">
        <Field
          name="contactTitle"
          component={SelectInput}
          noSelectText={TITLE}
          options={[
            { value: MR, text: MR },
            { value: MRS, text: MRS },
            { value: MISS, text: MISS },
          ]}
        />
        <Field
          name="contactFirstname"
          component={Input}
          placeholder={FIRSTNAME}
          type="text"
          isExpanded
        />
        <Field
          name="contactLastname"
          component={Input}
          placeholder={LASTNAME}
          type="text"
          isExpanded
        />
      </div> {/** prename, firstname, lastname group */}

      <Label>{CONTACT_NUMBER}</Label>
      <div className="control is-grouped">
        <Field
          name="contactTelNo"
          component={Input}
          placeholder="021234567, ..."
          type="text"
          isExpanded
        />
        <Field
          name="contactMobileNo"
          component={Input}
          placeholder="0861234567"
          type="text"
          isExpanded
        />
      </div>

      <Field
        label={RELATION}
        name="relation"
        component={RadioInput}
        options={[
          { text: PARENTS },
          { text: HUSBAND },
          { text: WIFE },
          { text: OTHER },
        ]}
      />
      <Field
        name="otherRelation"
        component={Input}
        type="text"
        disabled={relation !== OTHER}
      />

      <Label>{SOCIAL_MEDIA}</Label>
      <Field
        label={EMAIL}
        name="email"
        component={Input}
        type="text"
      />
      <Field
        label={LINE}
        name="line"
        component={Input}
        type="text"
      />
      <Field
        label={FACEBOOK}
        name="facebook"
        component={Input}
        type="text"
      />
      <Field
        label={OTHER}
        name="otherSocialMedia"
        component={Input}
        type="text"
      />
    </div> {/* control */}
  </div> /* column is-6 */
)

PersonalInfo.propTypes = {
  relation: PropTypes.string,
}
export default PersonalInfo
