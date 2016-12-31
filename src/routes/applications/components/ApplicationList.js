import React, { PropTypes } from 'react'
import Griddle from 'griddle-react'
import applicationShape from 'shapes/application'
import {
  SHORT_APPLICATION_NO,
  SHORT_CITIZEN_ID,
  FIRSTNAME,
  LASTNAME,
  TYPE,
  SHORT_LOAN_AMOUNT,
  STATUS,
  CREATED_DATE,
  LASTMODIFIED_DATE,
} from 'texts'
import LinkComponent from './LinkComponent'

const metaData = [
  {
    columnName: 'id',
    displayName: SHORT_APPLICATION_NO,
    customComponent: LinkComponent,
  },
  {
    columnName: 'citizenId',
    displayName: SHORT_CITIZEN_ID,
    cssClassName: 'wide-column',
  },
  {
    columnName: 'firstname',
    displayName: FIRSTNAME,
  },
  {
    columnName: 'lastname',
    displayName: LASTNAME,
  },
  {
    columnName: 'productName',
    displayName: TYPE,
    cssClassName: 'wide-column',
  },
  {
    columnName: 'appAmount',
    displayName: SHORT_LOAN_AMOUNT,
  },
  {
    columnName: 'status',
    displayName: STATUS,
  },
  {
    columnName: 'createdDate',
    displayName: CREATED_DATE,
  },
  {
    columnName: 'lastModifiedDate',
    displayName: LASTMODIFIED_DATE,
  },
]
const ApplicationList = ({ applications }) => (
  <Griddle
    results={applications}
    showSettings
    showFilter
    columnMetadata={metaData}
    columns={['id', 'firstname', 'lastname', 'productName', 'appAmount', 'status', 'createdDate']}
  />
)

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape(applicationShape),
  ),
}

export default ApplicationList
