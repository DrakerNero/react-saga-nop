/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { loadSampleData } from 'reduxModules/application'
import { USE_SAMPLE_DATA } from 'texts'

const decorator = Component => props => (
  <div>
    <div className="column is-6">
      <button
        className="button is-success"
        type="button"
        onClick={props.loadSampleData}
      >
        { USE_SAMPLE_DATA }
      </button>
    </div>
    <Component {...props} />
  </div>
)
const withUseSampleDataButton = formName => Component => (props) => {
  const mapDispatchToProps = dispatch => ({
    loadSampleData: () => {
      const id = (props.params)
        ? props.params.id
        : undefined
      dispatch(loadSampleData(id, formName))
    },
  })

  const ConnectedComponent = connect(null, mapDispatchToProps)(decorator(Component))
  return <ConnectedComponent {...props} />
}

export default withUseSampleDataButton
