import { AUTHORNAME } from "./actionType";

export const authorNameData = (payload) => {
    console.log("signup=================", payload);
    return {
      type: AUTHORNAME,
    };
  };