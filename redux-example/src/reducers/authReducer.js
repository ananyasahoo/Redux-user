import {

 LOGIN_SUCCESS, LOGIN_FAIL, } from "../redux/types";
 const initialState = {
 isLoggedIn: false, userRole: "", data:[],

  };

  const authReducer = (state = initialState, action) => {
 const { type, payload } = action;
  switch (type) {
 case LOGIN_SUCCESS:

        console.log("Payload Data in Auth Reducer",action.payload)
        console.log("Payload Data in Auth Reducer",action.message)

        return {

          ...state,
          isLoggedIn: true,
          data:action.payload,
          userRole:action.message,
         
        };

      case LOGIN_FAIL:

        return {

          ...state,
          isLoggedIn: false,
          userRole:action.message
          
        };

      default:
        return state;

    }

  };
  export default authReducer;