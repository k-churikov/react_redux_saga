import { put, call, takeEvery } from 'redux-saga/effects'
import { showLoader, hideLoader, showAlert } from './actions'
import { REQUEST_POST, FETCHED_POST } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: FETCHED_POST, payload })
    yield put(hideLoader())
  } catch(e) {
    yield put(showAlert('Something went wrong!'))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}