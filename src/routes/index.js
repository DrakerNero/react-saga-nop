import React from 'react'
import { compose } from 'redux'
import { Match, Miss } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import NotFound from './NotFound'

const routes = (
  <div>
    <Match
      exactly
      pattern="/"
      render={() =>
        <MainLayout />}
    />
    <Miss component={NotFound} />
  </div>
)

export default routes
