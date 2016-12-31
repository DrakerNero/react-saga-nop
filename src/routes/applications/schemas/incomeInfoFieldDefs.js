import {
  EMPLOYMENT_TYPE,
  BUSINESS_TYPE,
  OCCUPATION,
  COMPANY_NAME,
  ADDRESS_LINE1,
  SUB_DISTRICT,
  DISTRICT,
  PROVINCE,
  POSTCODE,
  TEL_NO,
  MOBILE_NO,
  EXPERIENCE,
  REGULAR_INCOME,
  EXTRA_INCOME,
  EXTRA_INCOME_SOURCE,
} from 'texts'

export default {
  employmentType: {
    label: EMPLOYMENT_TYPE,
    required: true,
  },
  businessType: {
    label: BUSINESS_TYPE,
    required: true,
  },
  occupation: {
    label: OCCUPATION,
    required: true,
  },
  companyName: {
    label: COMPANY_NAME,
    required: true,
  },

  // Office address
  officeAddressLine1: {
    label: ADDRESS_LINE1,
    required: true,
  },
  officeSubDistrict: {
    label: SUB_DISTRICT,
    required: true,
  },
  officeDistrict: {
    label: DISTRICT,
    required: true,
  },
  officeProvince: {
    label: PROVINCE,
    required: true,
  },
  officePostcode: {
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
  officeTelNo: {
    label: TEL_NO,
    required: true,
  },
  officeMobileNo: {
    label: MOBILE_NO,
    required: true,
  },

  // Work experience
  workYear: {
    label: EXPERIENCE,
    required: true,
  },
  workMonth: {
    label: EXPERIENCE,
    required: true,
    validate: {
      int: {
        min: 1,
        max: 11,
      },
    },
  },

  // Income
  income: {
    label: REGULAR_INCOME,
    type: 'numeric',
    required: true,
  },
  extraIncome: {
    label: EXTRA_INCOME,
    type: 'numeric',
    required: true,
  },
  extraIncomeSource: {
    label: EXTRA_INCOME_SOURCE,
    required: true,
  },
}
