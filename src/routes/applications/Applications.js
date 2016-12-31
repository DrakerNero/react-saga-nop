import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import applicationShape from 'shapes/application'
import applicationsWithProductSelector from 'selectors/applicationsWithProductSelector'
import createTab from 'hocs/createTab'
import {
  ALL,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  NEW_APPLICATION,
} from 'texts'
import ApplicationList from './components/ApplicationList'

/* const dummyApps = [
  { id: 'A10001', firstname: 'Arnupharp', lastname: 'Viratanapanu', appAmount: '30000' },
  { id: 'A10002', firstname: 'Donald', lastname: 'Trump', appAmount: '50000' },
  { id: 'A10001', firstname: 'Hillary', lastname: 'Clinton', appAmount: '20000' },
] */
const Applications = ({ params, applications }) => {
  const currentStatus = params.status || 'all'
  const Tab = createTab('applications', currentStatus)
  return (
    <div className="application-list">
      {/**
        This Tab render nothing cause every tab render same components
        We put the component outside to avoid remount
       */}
      <Tab
        tabs={[
          { key: 'all', label: ALL, linkTo: '/applications', content: false },
          { key: 'fillform', label: FILLFORM, linkTo: '/applications/filter/fillform', content: false },
          { key: 'wait-verify', label: WAIT_VERIFY, linkTo: '/applications/filter/wait-verify', content: false },
          { key: 'wait-analyst', label: WAIT_ANALYST, linkTo: '/applications/filter/wait-analyst', content: false },
          { key: 'wait-approve', label: WAIT_APPROVE, linkTo: '/applications/filter/wait-approve', content: false },
        ]}
      />
      <ApplicationList
        applications={applications.filter(application => params.status === undefined || params.status === 'all' || application.status === params.status)}
      />
      <div style={{ marginTop: 15 }}>
        <Link to="/applications/new" className="button is-primary">{NEW_APPLICATION}</Link>
      </div>
    </div>
  )
}
Applications.propTypes = {
  params: PropTypes.shape({
    status: PropTypes.string,
  }),
  applications: PropTypes.arrayOf(
    PropTypes.shape(applicationShape),
  ),
}

const mapStateToProps = state => ({
  applications: applicationsWithProductSelector(state),
})

export default connect(mapStateToProps)(Applications)
