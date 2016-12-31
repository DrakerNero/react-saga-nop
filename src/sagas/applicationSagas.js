import { takeLatest } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { change } from 'redux-form'
import fetchMock from 'fetch-mock' // eslint-disable-line import/no-extraneous-dependencies
import applicationStatusSelectorCreator from 'selectors/applicationStatusSelectorCreator'
import { sampleDataByStatus } from 'shapes/application'
import {
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  APPROVED,
} from 'appStatus'

import { API_SERVER, postJSON, getJSON } from '../utils/api'
import {
  CREATE_APPLICATION,
  CREATE_APPLICATION_SUCCESS,
  SAVE_APPLICATION_DRAFT,
  SAVE_APPLICATION_DRAFT_SUCCESS,
  SUBMIT_APPLICATION,
  LOAD_SAMPLE_DATA,
  FETCH_ONE_APPLICATION,
  FETCH_ONE_APPLICATION_SUCCESS,
  SUBMIT_FOR_VERIFY,
  SUBMIT_FOR_VERIFY_SUCCESS,
  SUBMIT_TO_ANALYST,
  SUBMIT_TO_ANALYST_SUCCESS,
  SUBMIT_FOR_APPROVE,
  SUBMIT_FOR_APPROVE_SUCCESS,
  APPROVE_LOAN,
  APPROVE_LOAN_SUCCESS,
} from '../reduxModules/application' // eslint-disable-line
import * as actions from '../reduxModules/application' // eslint-disable-line

let applicationCount = 0
export function* createApplication(action) {
  // TODO: Remove me after this !!!
  applicationCount += 1
  // Pad running number to 4 digit eg. A1 -> A0001
  const pad = '0000'
  const runNo = `${pad.substring(0, pad.length - `${applicationCount}`.length)}${applicationCount}`
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications`, {
      body: {
        id: `A1${runNo}`,
        ...action.payload,
        createdDate: (new Date()).toString(),
        lastModifiedDate: (new Date()).toString(),
         // need to wrap status inside body field to avoid conflict with http status
        status: FILLFORM,
      },
    })
  // End remove me after this !!!
  const json = yield call(postJSON, `${API_SERVER}/api/applications`, action.payload)
  yield put({
    type: CREATE_APPLICATION_SUCCESS,
    payload: json,
  })
  yield put(push(`/applications/${json.id}`))
}

export function* saveApplicationDraft(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications/save-draft`, {
      body: {
        ...action.payload,
        lastModifiedDate: (new Date()).toString(),
      },
    })
  const json = yield call(postJSON, `${API_SERVER}/api/applications/save-draft`, action.payload)
  // End Remove me after this !!!
  yield put({
    type: SAVE_APPLICATION_DRAFT_SUCCESS,
    payload: json,
  })
}

export function* submitApplication(action) {
  const applicationStatusSelector = applicationStatusSelectorCreator(action.payload.id)
  const status = yield select(applicationStatusSelector)
  const submitHandler = {
    [FILLFORM]: actions.submitForVerify,
    [WAIT_VERIFY]: actions.submitToAnalyst,
    [WAIT_ANALYST]: actions.submitForApprove,
    [WAIT_APPROVE]: actions.approveLoan,
  }
  yield put(submitHandler[status](action.payload))
}

export function* loadSampleData(action) {
  const applicationStatusSelector = applicationStatusSelectorCreator(action.payload.id)
  const status = yield select(applicationStatusSelector)
  const sampleData = sampleDataByStatus(status)
  const formName = action.payload.formName
  const keys = Object.keys(sampleData)
  for (const key of keys) { // eslint-disable-line no-restricted-syntax
    yield put(change(formName, key, sampleData[key]))
  }
}

export function* fetchOneApplication(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .get(`${API_SERVER}/api/applications?id=${action.payload}`, {
      body: {
        ...sampleDataByStatus(WAIT_ANALYST), // Load data as if we just completed wait-analyst stage
        id: action.payload,
        status: WAIT_APPROVE,
        createdDate: (new Date()).toString(),
        lastModifiedDate: (new Date()).toString(),
      },
    })
  // End Remove me after this !!!
  const json = yield call(getJSON, `${API_SERVER}/api/applications?id=${action.payload}`)
  yield put({
    type: FETCH_ONE_APPLICATION_SUCCESS,
    payload: json,
  })
}

export function* submitForVerify(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications/submit-for-verify`, {
      body: {
        ...action.payload,
        lastModifiedDate: (new Date()).toString(),
        status: WAIT_VERIFY,
      },
    })
  // End Remove me after this !!!
  const json = yield call(postJSON, `${API_SERVER}/api/applications/submit-for-verify`)
  yield put({
    type: SUBMIT_FOR_VERIFY_SUCCESS,
    payload: json,
  })
  yield put(push('/applications'))
}

export function* submitToAnalyst(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications/submit-to-analyst`, {
      body: {
        ...action.payload,
        lastModifiedDate: (new Date()).toString(),
        status: WAIT_ANALYST,
      },
    })
  // End Remove me after this !!!
  const json = yield call(postJSON, `${API_SERVER}/api/applications/submit-to-analyst`)
  yield put({
    type: SUBMIT_TO_ANALYST_SUCCESS,
    payload: json,
  })
  yield put(push('/applications'))
}

export function* submitForApprove(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications/submit-for-approve`, {
      body: {
        ...action.payload,
        lastModifiedDate: (new Date()).toString(),
        status: WAIT_APPROVE,
      },
    })
  // End Remove me after this !!!
  const json = yield call(postJSON, `${API_SERVER}/api/applications/submit-for-approve`)
  yield put({
    type: SUBMIT_FOR_APPROVE_SUCCESS,
    payload: json,
  })
  yield put(push('/applications'))
}

export function* approveLoan(action) {
  // TODO: Remove me after this !!!
  fetchMock.restore()
  fetchMock
    .post(`${API_SERVER}/api/applications/approve-loan`, {
      body: {
        ...action.payload,
        lastModifiedDate: (new Date()).toString(),
        status: APPROVED,
      },
    })
  // End Remove me after this !!!
  const json = yield call(postJSON, `${API_SERVER}/api/applications/approve-loan`)
  yield put({
    type: APPROVE_LOAN_SUCCESS,
    payload: json,
  })
  console.log('approved')
  yield put(push('/applications'))
}

export function* watchApplicationSagas() {
  yield takeLatest(CREATE_APPLICATION, createApplication)
  yield takeLatest(SAVE_APPLICATION_DRAFT, saveApplicationDraft)
  yield takeLatest(SUBMIT_APPLICATION, submitApplication)
  yield takeLatest(LOAD_SAMPLE_DATA, loadSampleData)
  yield takeLatest(FETCH_ONE_APPLICATION, fetchOneApplication)
  yield takeLatest(SUBMIT_FOR_VERIFY, submitForVerify)
  yield takeLatest(SUBMIT_TO_ANALYST, submitToAnalyst)
  yield takeLatest(SUBMIT_FOR_APPROVE, submitForApprove)
  yield takeLatest(APPROVE_LOAN, approveLoan)
}
