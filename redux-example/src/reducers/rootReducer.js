import { combineReducers } from "redux";
import authReducer from "./authReducer";
import signReducer from "./signReducer";
import updateReducer from "./updateReducer";
export default combineReducers({
auth:authReducer,
sign:signReducer,
reset:updateReducer
});