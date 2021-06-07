import { call, put, takeLatest } from 'redux-saga/effects';
import {SAVEBLOGPOST_LOADING,SAVEBLOGPOST_SUCCESS,SAVEBLOGPOST_ERROR, SAVEBLOGPOST, } from "../action/actionType";
import {saveblogApi} from '../axios/api';


function* fetchUsers(action) {
    const { payload } = action;
   console.log("saveblog saga", payload);
    yield put({ type: SAVEBLOGPOST_LOADING });
   try {
      const saveblogResponse = yield call(saveblogApi,`/blogPost`,payload);
      console.log("saveblogApi",saveblogResponse)
      yield put({  type:SAVEBLOGPOST_SUCCESS, saveblogData: saveblogResponse});
   } catch (e) {
      yield put({  type:SAVEBLOGPOST_ERROR, message: e.message});
   }
}

function* saveblogSaga() {
   yield takeLatest(SAVEBLOGPOST, fetchUsers);
}

export default saveblogSaga;