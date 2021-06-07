import { combineReducers } from 'redux';
import autorNameReducer from './authorNameReducer';
import saveblogReducer from './saveblogReducer';
import signupReducer from './singupReducer';
import signinReducer from './signinReducer'
import getBlogReducer from './getBlogReducer';
const rootReducer = combineReducers({
    signupReducer:signupReducer,
    authorNameReducer:autorNameReducer,
    saveblogReducer:saveblogReducer,
    signinReducer:signinReducer,
    getBlogReducer:getBlogReducer
});

export default rootReducer;