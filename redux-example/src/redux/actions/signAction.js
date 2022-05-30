import axios from "axios";
import { SIGNUP_SUCCESS,SIGNUP_FAIL} from "../types";
export const signup = (email,firstName,lastName,phoneNumber,dob,gender,newPassword,oldPassword) => (dispatch) =>{
    const values = { 
        email:email,
        firstName:firstName,
        lastName:lastName, 
        phoneNumber:phoneNumber,
        dob:dob,
        gender:gender,
        newPassword:newPassword,
        oldPassword:oldPassword
     };
     const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: values,
        url: "https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/saveUser",
      };
      axios(options)
    .then((res) => {
      console.log("the data has been send to the server and posted");
      // when posted successfully , dispatch
      console.log("API Response",res.data);
      if(res.data){
        dispatch({
            type: SIGNUP_SUCCESS,
            payload:res.data,
            message:"Form Action success"
          });
      }
      else{
        dispatch({
                type: SIGNUP_FAIL
              });
          alert(res.data.message);
      }
    })
    .catch((err) => {
      alert("Registeration Not Successful");
    });

  }