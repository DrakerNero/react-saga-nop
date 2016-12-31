import React, { PropTypes } from 'react'
import ApplicationForm from './containers/ApplicationForm'

const Application = ({ params }) => (
  <ApplicationForm id={params.id} />
)

Application.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

export default Application
