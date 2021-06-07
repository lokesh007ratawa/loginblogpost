export const loggerMiddleware = store =>{
  return next =>{
    return action =>{
      const result = next(action);
      console.log("caughtaction in mid", JSON.stringify(result))
      return result;
    }
  }
}