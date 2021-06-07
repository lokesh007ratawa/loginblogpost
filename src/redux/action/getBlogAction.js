import { GETBLOGPOST } from "./actionType";

export const getBlogData = (payload) => {
    console.log("signup=================", payload);
    return {
      type: GETBLOGPOST,
    };
  };