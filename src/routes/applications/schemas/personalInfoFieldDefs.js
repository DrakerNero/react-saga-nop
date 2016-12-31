import {
  // PersonalInfo
  CITIZEN_ID,
  TITLE,
  FIRSTNAME,
  LASTNAME,
  BIRTHDATE,
  ADDRESS_LINE1,
  SUB_DISTRICT,
  DISTRICT,
  PROVINCE,
  POSTCODE,
  STAY_PERIOD,
  RESIDENT_TYPE,
  RESIDENT_OWNER,
  EDUCATION,
  MARITAL_STATUS,
  RELATION,
  EMAIL,
  LINE,
  FACEBOOK,
  TEL_NO,
  MOBILE_NO,
} from 'texts'
import citizenIdValidator from 'validators/citizenIdValidator'

export default {
  citizenId: {
    label: CITIZEN_ID,
    required: true,
    validate: {
      citizenIdValidator,
    },
  },
  title: {
    label: TITLE,
    required: true,
  },
  firstname: {
    label: FIRSTNAME,
    required: true,
  },
  lastname: {
    label: LASTNAME,
    required: true,
  },
  birthdate: {
    label: BIRTHDATE,
    required: true,
    type: 'date',
  },

  // Current Address
  currentAddressLine1: {
    label: ADDRESS_LINE1,
    required: true,
  },
  currentSubDistrict: {
    label: SUB_DISTRICT,
    required: true,
  },
  currentDistrict: {
    label: DISTRICT,
    required: true,
  },
  currentProvince: {
    label: PROVINCE,
    required: true,
  },
  currentPostcode: {
    label: POSTCODE,
    required: true,
    type: 'numeric',
    validate: {
      length: {
        min: 5,
        max: 5,
      },
    },
  },
  currentTelNo: {
    label: TEL_NO,
    required: true,
  },
  currentMobileNo: {
    label: MOBILE_NO,
    required: true,
  },

  // Permanent Address
  permanentAddressLine1: {
    label: ADDRESS_LINE1,
    required: true,
  },
  permanentSubDistrict: {
    label: SUB_DISTRICT,
    required: true,
  },
  permanentDistrict: {
    label: DISTRICT,
    required: true,
  },
  permanentProvince: {
    label: PROVINCE,
    required: true,
  },
  permanentPostcode: {
    label: POSTCODE,
    required: true,
    type: 'numeric',
    validate: {
      length: {
        min: 5,
        max: 5,
      },
    },
  },
  permanentTelNo: {
    label: TEL_NO,
    required: true,
  },
  permanentMobileNo: {
    label: MOBILE_NO,
    required: true,
  },

  // Stay period
  stayYear: {
    label: STAY_PERIOD,
    required: true,
    type: 'numeric',
  },
  stayMonth: {
    label: STAY_PERIOD,
    required: true,
    type: 'numeric',
    validate: {
      int: {
        min: 1,
        max: 11,
      },
    },
  },

  residentType: {
    label: RESIDENT_TYPE,
    required: true,
  },
  residentOwner: {
    label: RESIDENT_OWNER,
    required: true,
  },
  education: {
    label: EDUCATION,
    required: true,
  },
  maritalStatus: {
    label: MARITAL_STATUS,
    required: true,
  },

  // Contact person
  contactTitle: {
    label: TITLE,
    required: true,
  },
  contactFirstname: {
    label: FIRSTNAME,
    required: true,
  },
  contactLastname: {
    label: LASTNAME,
    required: true,
  },
  contactTelNo: {
    label: TEL_NO,
    required: true,
  },
  contactMobileNo: {
    label: MOBILE_NO,
    required: true,
  },
  relation: {
    label: RELATION,
    required: true,
  },
  email: {
    label: EMAIL,
    type: 'email',
    required: true,
  },
  line: {
    label: LINE,
    required: true,
  },
  facebook: {
    label: FACEBOOK,
    required: true,
  },
}
