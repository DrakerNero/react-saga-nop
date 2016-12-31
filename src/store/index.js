import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reduxModules/rootReducer'
import rootSaga from '../sagas'

// export configureStore instead of global store created by it
// to avoid state pollution between tests
// (eg. each test can create a new store independent of previous state)
const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  let enhancer = compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  )
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line no-underscore-dangle
    enhancer = compose(
      enhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    )
  }
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  )
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reduxModules/rootReducer', () => {
      store.replaceReducer(require('../reduxModules/rootReducer')) // eslint-disable-line
    })
  }

  return store
}

export default configureStore
