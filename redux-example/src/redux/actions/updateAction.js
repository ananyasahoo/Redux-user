import axios from "axios";
import { UPDATE_FAIL,UPDATE_SUCCESS } from "../types";

export const update = (payload) => (dispatch) => {
   //const values = { email:userEmail, password:userPassword };
  
  const options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
     data: payload,
    url: "https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/updatePassword/"+payload.email,

  };
  axios(options)
    .then((res) => {
      console.log("the data has been send to the server and posted");
      // when posted successfully , dispatch
      console.log("API Response",res.data);
      if(res.data)
      { 
        dispatch({
            type: UPDATE_SUCCESS,
            payload:res.data,
            message:"Form Action success",
           // navigate(modal)
          
          });
      }
    //   else{
    //     dispatch({
    //             type: UPDATE_FAIL,
    //         message:"Form Action fail"

    //           });
          
    //   }
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_FAIL,
        //payload: res.data,
    message:"Form Action fail"

      });
      alert("invalid userEmail/password");
    });


};