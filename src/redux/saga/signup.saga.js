import { call, put, takeLatest } from 'redux-saga/effects';
import {SIGNUP_LOADING,SIGNUP_SUCCESS,SIGNUP_ERROR, SIGNUP, } from "../action/actionType";
import {sigupApi} from '../axios/api';


function* fetchUsers(action) {
    const { payload } = action;
   console.log("signup saga", payload);
    yield put({ type: SIGNUP_LOADING });
   try {
      const signupResponce = yield call(sigupApi,`/signup`,payload);
      console.log("signupDatasapi",signupResponce)
      yield put({  type:SIGNUP_SUCCESS, signupDatas: signupResponce});
   } catch (e) {
      yield put({  type:SIGNUP_ERROR, message: "User Name and password invalid"});
   }
}

function* signuSaga() {
   yield takeLatest(SIGNUP, fetchUsers);
}

export default signuSaga;