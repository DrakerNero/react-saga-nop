import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './store'
import App from './App'
import './styles/ittp.scss'

const initialState = {}
const history = createBrowserHistory()
const store = configureStore(initialState, history)

const renderWithHotReload = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainComponent history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'),
  )
}

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line global-require
    renderWithHotReload(NextApp)
  })
}
