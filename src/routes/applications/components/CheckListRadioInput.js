/* eslint-disable jsx-a11y/label-has-for */
// Disable eslint as it force us to use htmlFor on <label>
import React, { PropTypes } from 'react'

const CheckListRadioInput = ({
  input,
  label,
  meta: { touched, error },
  options,
}) => (
  <div className="checklist-radio-input">
    <div className="columns">
      <div className="column">
        {label}
      </div>
      {
        options.map(option => (
          <div key={option.text} className="column is-2">
            {/* Do not use <label className="..." htmlFor="..." />
                as this will cause label to be unclickable and we'll have to click on radio button'
                which reduce the sweet spot of radio button */}
            <label key={option.text} className="radio">
              <input
                {...input}
                type="radio"
                value={(option.value) ? option.value : option.text}
                checked={
                  option.value
                    ? option.value === input.value
                    : option.text === input.value
                }
              />
            </label>
          </div>
        ))
      }
    </div> {/* coumns */}
    {
      touched && (error && <div className="help is-danger">{error}</div>)
    }
  </div>
) // return

CheckListRadioInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.array,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    text: PropTypes.string.isRequired,
  })),
}
export default CheckListRadioInput
