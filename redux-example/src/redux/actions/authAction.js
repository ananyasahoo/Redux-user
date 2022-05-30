import axios from "axios";
import { LOGIN_FAIL,LOGIN_SUCCESS } from "../types";
export const login = (payload) => (dispatch) => {
   //const values = { email:userEmail, password:userPassword };
  
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
     data: payload,
    url: "https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/login",
  };
  axios(options)
    .then((res) => {
      console.log("the data has been send to the server and posted");
      // when posted successfully , dispatch
      console.log("API Response",res.data);
      if(res.data)
      { 
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data,
            message:"Form Action success",
           // navigate(modal)
          
          });
      }
      else{
        dispatch({
                type: LOGIN_FAIL,
            message:"Form Action fail"

              });
          
      }
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
    message:"Form Action fail"

      });
      alert("invalid userEmail/password");
    });


};