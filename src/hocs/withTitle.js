import React from 'react'
import Helmet from 'react-helmet'

const withTitle = title => Component => props => (
  <div>
    <Helmet title={title} />
    <Component {...props} />
  </div>
)

export default withTitle
