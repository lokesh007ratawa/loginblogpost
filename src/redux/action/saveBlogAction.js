import { SAVEBLOGPOST } from "./actionType";

export const saveBlogData = (payload) => {
    console.log("saveblogpostaction=================", payload);
    return {
      type: SAVEBLOGPOST,
      payload: payload
    };
  };