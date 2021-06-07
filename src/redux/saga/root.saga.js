import { all } from 'redux-saga/effects'
import authorSaga from './authorName.saga';
import signuSaga from './signup.saga';
import saveblogSaga from './saveBlog.saga';
import signinSaga from './signin.saga'
import getBlogSaga from './getBlog.saga';

export default function* rootSaga() {
  yield all([
    signuSaga(),
    authorSaga(),
    saveblogSaga(),
    signinSaga(),
    getBlogSaga()
  ])
}