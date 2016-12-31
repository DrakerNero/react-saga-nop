import React, { PropTypes } from 'react'

const CheckListHeader = ({ category, options }) => (
  <div className="checklist-header columns">
    <div className="column">
      <div className="category">{category}</div>
    </div>
    {
      options.map(option => (
        <div key={option} className="column is-2">
          <div className="option">{option}</div>
        </div>
      ))
    }
  </div>
)

CheckListHeader.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CheckListHeader
