import React, { PropTypes } from 'react'

// This HoC should be connected between react-redux contect and reduxForm
// connect should have selector set in mapStateToProps to map stat in store to initialValues
// required by reduxForm. A fetchData function should be available
// in case initialValues is not available
const withInitialValues = (Component) => {
  class WithInitialValues extends React.Component {
    componentDidMount() {
      const { initialValues, fetchById, id } = this.props
      if (initialValues === undefined) {
        fetchById(id)
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
  WithInitialValues.propTypes = {
    id: PropTypes.string,
    initialValues: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    fetchById: PropTypes.func.isRequired,
  }
  return WithInitialValues
}

export default withInitialValues
