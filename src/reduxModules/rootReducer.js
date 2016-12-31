import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'connected-react-router'
import applicationReducer from './application'
import productReducer from './product'

const rootReducer = combineReducers({
  ui: uiReducer,
  router: routerReducer,
  form: formReducer,
  product: productReducer,
  application: applicationReducer,
})

export default rootReducer
