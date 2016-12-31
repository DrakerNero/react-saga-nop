const FETCH_PRODUCT = 'ittp/product/FETCH_PRODUCT'
const FETCH_PRODUCT_SUCCESS = 'ittp/product/FETCH_PRODUCT_SUCCESS'
const FETCH_PRODUCT_FAILED = 'ittp/product/FETCH_PRODUCT_FAIL'

/**
 * Dummy data
 */
const mockProductDb = {
  1001: {
    id: '1001',
    name: 'Staff Loan - Installment',
    purposeType: 'Personal Loan',
    type: 'Installment',
    interestRate: 20,
    fine: 100,
  },
  1002: {
    id: '1002',
    name: 'Staff Loan - Revolving',
    purposeType: 'Personal Loan',
    type: 'Revolving',
    interestRate: 20,
    fine: 100,
  },
  1003: {
    id: '1003',
    name: 'PLoan - Installment',
    purposeType: 'Personal Loan',
    type: 'Installment',
    interestRate: 28,
    fine: 100,
  },
  1004: {
    id: '1004',
    name: 'PLoan - Revolving',
    purposeType: 'Personal Loan',
    type: 'Revolving',
    interestRate: 28,
    fine: 100,
  },
  1005: {
    id: '1005',
    name: 'NanoFinance - Installment',
    purposeType: 'Nano Finance',
    type: 'Installment',
    interestRate: 28,
    fine: 100,
  },
  1006: {
    id: '1006',
    name: 'NanoFinance - Revolving',
    purposeType: 'Nano Finance',
    type: 'Revolving',
    interestRate: 28,
    fine: 100,
  },
}

/**
 * Reducer
 */
const initialState = {
  productDb: mockProductDb,
  error: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productDb: mockProductDb,
        error: '',
        loading: false,
      }
    case FETCH_PRODUCT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
