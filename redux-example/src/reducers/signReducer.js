import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../redux/types";

const initialState = {
  isRegistered: false,
  userRole: "",
  data:[],
};

const signReducer =(state = initialState, action) =>{
  const { type, payload } = action;
  switch (type) {
      case SIGNUP_SUCCESS:
        console.log("Payload Data in Auth Reducer",action.payload)
        console.log("Payload Data in Auth Reducer",action.message)
       return {
          ...state,
          isLoggedIn: true,
          data:action.payload,
          userRole:action.message
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
};
export default signReducer;