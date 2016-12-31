import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'connected-react-router'

const rootReducer = combineReducers({
  ui: uiReducer,
  router: routerReducer,
  form: formReducer,
})

export default rootReducer
