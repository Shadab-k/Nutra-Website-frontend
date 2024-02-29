import { combineReducers } from "redux";
import AuthSlice from './auth/authReducer';

const RootReducer=combineReducers({
    AuthSlice,
})

export default RootReducer;