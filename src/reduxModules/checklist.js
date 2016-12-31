/**
 * Actions and Creators
 */
const CREATE_CHECKLIST_SUCCESS = 'ittp/CHECKLIST/CREATE_CHECKLIST_SUCCESS'
const CREATE_CHECKLIST_FAILED = 'ittp/CHECKLIST/CREATE_CHECKLIST_FAILED'

const UPDATE_CHECKLIST = 'ittp/CHECKLIST/UPDATE_CHECKLIST'
const UPDATE_CHECKLIST_SUCCESS = 'ittp/CHECKLIST/UPDATE_CHECKLIST_SUCCESS'
const UPDATE_CHECKLIST_FAILED = 'ittp/CHECKLIST/UPDATE_CHECKLIST_FAILED'

const updateChecklist = data => ({
  type: UPDATE_CHECKLIST,
  payload: data,
})

/**
 * Reducer
 */
const initialState = {
  checklistDb: {},
  error: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKLIST:
      return {
        ...state,
        loading: true,
      }

    case CREATE_CHECKLIST_SUCCESS:
    case UPDATE_CHECKLIST_SUCCESS:
      return {
        ...state,
        checklistDb: {
          ...state.checklistDb,
          [action.payload.id]: action.payload,
        },
        error: '',
        loading: false,
      }

    case CREATE_CHECKLIST_FAILED:
    case UPDATE_CHECKLIST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export {
  // Actions
  CREATE_CHECKLIST_SUCCESS,
  CREATE_CHECKLIST_FAILED,
  UPDATE_CHECKLIST,
  UPDATE_CHECKLIST_SUCCESS,
  UPDATE_CHECKLIST_FAILED,

  // Action creators
  updateChecklist,
}

export default reducer
