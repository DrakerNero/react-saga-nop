import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const LinkComponent = ({ data }) => (
  <Link to={`/applications/${data}`}>{data}</Link>
)
LinkComponent.propTypes = {
  data: PropTypes.string.isRequired,
}
export default LinkComponent
