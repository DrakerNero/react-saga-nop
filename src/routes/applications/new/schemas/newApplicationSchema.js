import buildSchema from 'redux-form-schema'
import {
  CITIZEN_ID,
  APPLYING_LOAN,
  LOAN_TERM,
  LOAN_PURPOSE,
  LOAN_AMOUNT,
  HOW_MUCH_YOU_CAN_PAY,
  PLEASE_SPECIFY,
} from 'texts'
import citizenIdValidator from 'validators/citizenIdValidator'

const schema = {
  citizenId: {
    label: CITIZEN_ID,
    required: true,
    // Remove as citizenIdValidator already validate this,
    // Add type check cause error message to appear twice
    // type: 'numeric',
    error: `${PLEASE_SPECIFY} ${CITIZEN_ID}`,
    validate: {
      citizenIdValidator,
    },
  },
  productId: {
    label: APPLYING_LOAN,
    required: true,
    type: 'numeric',
    error: `${PLEASE_SPECIFY} ${APPLYING_LOAN}`,
  },
  loanTerm: {
    label: LOAN_TERM,
    required: true,
    type: 'numeric',
    error: `${PLEASE_SPECIFY} ${LOAN_TERM}`,
  },
  purpose: {
    label: LOAN_PURPOSE,
    required: true,
    error: `${PLEASE_SPECIFY} ${LOAN_PURPOSE}`,
  },
  appAmount: {
    label: LOAN_AMOUNT,
    required: true,
    type: 'numeric',
    error: `${PLEASE_SPECIFY} ${LOAN_AMOUNT}`,
  },
  canPay: {
    label: HOW_MUCH_YOU_CAN_PAY,
    required: true,
    type: 'numeric',
    error: `${PLEASE_SPECIFY} ${HOW_MUCH_YOU_CAN_PAY}`,
  },
}

export default buildSchema(schema)
