import {

    UPDATE_SUCCESS, UPDATE_FAIL, } from "../redux/types";
    const initialState = {
    isUpdated: false, userRole: "", data:[],
   
     };
   
     const updateReducer = (state = initialState, action) => {
    const { type, payload } = action;
     switch (type) {
    case UPDATE_SUCCESS:
   
           console.log("Payload Data in Auth Reducer",action.payload)
           console.log("Payload Data in Auth Reducer",action.message)
   
           return {
   
             ...state,
             isUpdated: true,
             data:action.payload,
             userRole:action.message,
            
           };
   
         case UPDATE_FAIL:
   
           return {
   
             ...state,
             isUpdated: false,
             userRole:action.message
             
           };
   
         default:
           return state;
   
       }
   
     };
     export default updateReducer;