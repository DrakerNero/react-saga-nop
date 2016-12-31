/**
 * Actions and Creators
 */
export const CREATE_APPLICATION = 'ittp/application/CREATE_APPLICATION'
export const CREATE_APPLICATION_SUCCESS = 'ittp/application/CREATE_APPLICATION_SUCCESS'
export const CREATE_APPLICATION_FAILED = 'ittp/application/CREATE_APPLICATION_FAILED'

export const SAVE_APPLICATION_DRAFT = 'ittp/application/SAVE_APPLICATION_DRAFT'
export const SAVE_APPLICATION_DRAFT_SUCCESS = 'ittp/application/SAVE_APPLICATION_DRAFT_SUCCESS'
export const SAVE_APPLICATION_DRAFT_FAILED = 'ittp/application/SAVE_APPLICATION_DRAFT_FAILED'

export const SUBMIT_APPLICATION = 'ittp/application/SUBMIT_APPLICATION'
export const LOAD_SAMPLE_DATA = 'ittp/application/LOAD_SAMPLE_DATA'

export const FETCH_ONE_APPLICATION = 'ittp/application/FETCH_ONE_APPLICATION'
export const FETCH_ONE_APPLICATION_SUCCESS = 'ittp/application/FETCH_ONE_APPLICATION_SUCCESS'
export const FETCH_ONE_APPLICATION_FAILED = 'ittp/application/FETCH_ONE_APPLICATION_FAILED'

export const SUBMIT_FOR_VERIFY = 'ittp/application/SUBMIT_FOR_VERIFY'
export const SUBMIT_FOR_VERIFY_SUCCESS = 'ittp/application/SUBMIT_FOR_VERIFY_SUCCESS'
export const SUBMIT_FOR_VERIFY_FAILED = 'ittp/application/SUBMIT_FOR_VERIFY_FAILED'

export const SUBMIT_TO_ANALYST = 'ittp/application/SUBMIT_TO_ANALYST'
export const SUBMIT_TO_ANALYST_SUCCESS = 'ittp/application/SUBMIT_TO_ANALYST_SUCCESS'
export const SUBMIT_TO_ANALYST_FAILED = 'ittp/applicaiton/SUBMIT_TO_ANALYST_FAILED'

export const SUBMIT_FOR_APPROVE = 'ittp/application/SUBMIT_FOR_APPROVE'
export const SUBMIT_FOR_APPROVE_SUCCESS = 'ittp/application/SUBMIT_FOR_APPROVE_SUCCESS'
export const SUBMIT_FOR_APPROVE_FAILED = 'ittp/application/SUBMIT_FOR_APPROVE_FAILED'

export const APPROVE_LOAN = 'ittp/application/APPROVE_LOAN'
export const APPROVE_LOAN_SUCCESS = 'ittp/application/APPROVE_LOAN_SUCCESS'
export const APPROVE_LOAN_FAILED = 'ittp/application/APPROVE_LOAN_FAILED'

/**
 * Data is a formValue object we get from redux-form
 * See detail: routes/account/new/component/NewAccountForm
 *
 * sampleData: {
 *  citizenId: "4101200009225"
 *  productId: "1003"
 *  loanTerm: "12" (for installment only)
 *  appAmount: "15000"
 *  canPay: "2000"
 *  purpose: "เพื่อซื้อสินค้าอุปโภค บริโภคอื่นๆ"
 *  otherPurpose: (optional just incase purpose is "อื่นๆระบุ")
 * }
 *  */
export const createApplication = data => ({
  type: CREATE_APPLICATION,
  payload: data,
})

export const saveApplicationDraft = data => ({
  type: SAVE_APPLICATION_DRAFT,
  payload: data,
})

export const fetchById = id => ({
  type: FETCH_ONE_APPLICATION,
  payload: id,
})

export const submitApplication = data => ({
  type: SUBMIT_APPLICATION,
  payload: data,
})

// Load sample data to form specified by formName
export const loadSampleData = (id, formName) => ({
  type: LOAD_SAMPLE_DATA,
  payload: {
    id,
    formName,
  },
})

export const submitForVerify = data => ({
  type: SUBMIT_FOR_VERIFY,
  payload: data,
})

export const submitToAnalyst = data => ({
  type: SUBMIT_TO_ANALYST,
  payload: data,
})

export const submitForApprove = data => ({
  type: SUBMIT_FOR_APPROVE,
  payload: data,
})

export const approveLoan = data => ({
  type: APPROVE_LOAN,
  payload: data,
})
/**
 * Reducer
 */
const initialState = {
  applicationDb: {},
  error: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPLICATION:
    case SAVE_APPLICATION_DRAFT:
    case FETCH_ONE_APPLICATION:
    case SUBMIT_FOR_VERIFY:
    case SUBMIT_TO_ANALYST:
    case SUBMIT_FOR_APPROVE:
    case APPROVE_LOAN:
      return {
        ...state,
        loading: true,
      }

    case CREATE_APPLICATION_SUCCESS:
    case SAVE_APPLICATION_DRAFT_SUCCESS:
    case FETCH_ONE_APPLICATION_SUCCESS:
    case SUBMIT_FOR_VERIFY_SUCCESS:
    case SUBMIT_TO_ANALYST_SUCCESS:
    case SUBMIT_FOR_APPROVE_SUCCESS:
    case APPROVE_LOAN_SUCCESS:
      return {
        ...state,
        applicationDb: {
          ...state.applicationDb,
          [action.payload.id]: action.payload,
        },
        error: '',
        loading: false,
      }

    case CREATE_APPLICATION_FAILED:
    case SAVE_APPLICATION_DRAFT_FAILED:
    case FETCH_ONE_APPLICATION_FAILED:
    case SUBMIT_FOR_VERIFY_FAILED:
    case SUBMIT_TO_ANALYST_FAILED:
    case SUBMIT_FOR_APPROVE_FAILED:
    case APPROVE_LOAN_FAILED:
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
