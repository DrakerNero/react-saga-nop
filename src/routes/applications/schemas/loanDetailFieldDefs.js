import {
  DOCUMENT_ADDRESS,
  APPLYING_LOAN,
  LOAN_PURPOSE,
  LOAN_AMOUNT,
  HOW_MUCH_YOU_CAN_PAY,
  STATEMENT_DATE,
  PAYTO,
  ACCOUNT_NAME,
  BRANCH_NAME,
  ACCOUNT_NO,
  ACCOUNT_TYPE,
  KNOWN_FROM,
} from 'texts'

export default {
  documentAddress: {
    label: DOCUMENT_ADDRESS,
    required: true,
  },
  productId: {
    label: APPLYING_LOAN,
    required: true,
  },
  purpose: {
    label: LOAN_PURPOSE,
    required: true,
  },
  appAmount: {
    label: LOAN_AMOUNT,
    required: true,
    type: 'numeric',
  },
  canPay: {
    label: HOW_MUCH_YOU_CAN_PAY,
    required: true,
    type: 'numeric',
  },
  statementDate: {
    label: STATEMENT_DATE,
    required: true,
    type: 'date',
  },
  bank: {
    label: PAYTO,
    required: true,
  },
  accountName: {
    label: ACCOUNT_NAME,
    required: true,
  },
  branchName: {
    label: BRANCH_NAME,
    required: true,
  },
  accountNo: {
    label: ACCOUNT_NO,
    required: true,
    type: 'numeric',
  },
  accountType: {
    label: ACCOUNT_TYPE,
    required: true,
  },
  knownFrom: {
    label: KNOWN_FROM,
    required: true,
  },
}
