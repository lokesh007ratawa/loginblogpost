import { call, put, takeLatest } from 'redux-saga/effects';
import {GETBLOGPOST_LOADING,GETBLOGPOST_SUCCESS,GETBLOGPOST_ERROR, GETBLOGPOST, } from "../action/actionType";
import {authorNameApi} from '../axios/api';


function* fetchBlogs(action) {
    yield put({ type: GETBLOGPOST_LOADING });
   try {
      const getBlogposts = yield call(authorNameApi,`/blogPost`);
      let data =[];
      data = getBlogposts.data;
      console.log("getblogsagaapi",getBlogposts.data)
      yield put({  type:GETBLOGPOST_SUCCESS, blogData: data});
   } catch (e) {
      yield put({  type:GETBLOGPOST_ERROR, message: e.message});
   }
}

function* getBlogSaga() {
   yield takeLatest(GETBLOGPOST, fetchBlogs);
}

export default getBlogSaga;