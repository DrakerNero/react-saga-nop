import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Task = ({ image, name, url }) => (
  <div className="column is-6-mobile is-3-tablet is-2-widescreen">
    <Link
      className="box is-center"
      to={url || '#'}
    >
      <img className="task-image" alt={name} src={image} />
      <span className="title is-6">{ name }</span>
    </Link>
  </div>
)
Task.propTypes = {
  // Image load from webpack-loader
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
}
export default Task
