import {
  watchApplicationSagas,
} from './applicationSagas'

export default function* rootSaga() {
  yield [
    watchApplicationSagas(),
  ]
}
