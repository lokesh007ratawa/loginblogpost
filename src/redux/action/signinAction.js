import { SIGNIN } from "./actionType";

export const signinData = (payload) => {
    console.log("signin=================", payload);
    return {
      type: SIGNIN
    }
}