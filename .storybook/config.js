import { configure, addDecorator } from '@kadira/storybook'
import React from 'react'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import routes from 'src/routes'
import configureStore from 'src/store'

// Load ../stories/*.js
const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => {
  const store = configureStore(routes, createHistory)
  
  return (
    <Provider store={store}>
      { story() }
    </Provider>
  )
})

configure(loadStories, module)
