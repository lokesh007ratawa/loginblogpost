import { SIGNUP } from "./actionType";

export const signupData = (payload) => {
    console.log("signup=================", payload);
    return {
      type: SIGNUP,
      payload: payload
    };
  };