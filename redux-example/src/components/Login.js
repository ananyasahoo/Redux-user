import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { LOGIN_FAIL } from "../redux/types";
import ModalComponent from "./ModalComponent";
import ForgotPassword from "./ForgotPassword";
const Login=()=>{

    const[email,setEmail] = useState("");
    const[pwd,setPassword] = useState("");
     const navigate = useNavigate();
    const handleSignup=()=>{
      navigate("/")
    }
     const handleChangePassword=()=>{
      navigate("/reset")
    }
    
    const { isLoggedIn,data,userRole } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
     
    const handleLogin = () => {
        console.log("Handled Login", email);
      //  navigate("/modal");
      //  const email1 = email;
      //  const password = pwd;
        const payload={
            email:email,
            password:pwd
        }
        dispatch(login(payload));
        //console.log("User logged in Successfully", isLoggedIn);
       
      };
      console.log("isLoggedIn value:",isLoggedIn);
      

    return (
        <div>
        <div>
        <h2>Login Page</h2>
        </div>
            <table cellspacing="2" align="center" cellpadding="8" border="0">
                <tr>
                    <td>Enter Registered Email:</td>
                    <td><input type="email" placeholder="Enter email" value={email}
                onChange={(e) => {setEmail(e.target.value) 
                     dispatch({
                    type: LOGIN_FAIL,
                message:"Form Action fail"
    
                  });} } class="tb" /></td>
                </tr>
                <tr>
                    <td>Enter password:</td>
                    <td><input type="password" placeholder="Enter password" value={pwd}
                onChange={(e) => {setPassword(e.target.value)
                    dispatch({
                        type: LOGIN_FAIL,
                    message:"Form Action fail"
        
                      });} }class="tb" /></td>
                </tr>
                <td></td>
                <td>
                <Button onClick={handleChangePassword} >Change Password</Button><br/>
               
                <Button onClick={handleSignup}>Go to Signup</Button>
                    <Button color="primary" onClick={handleLogin} type="button" block>Verify & Proceed</Button>
                {
                  isLoggedIn && <ModalComponent/>
                }
              
                    <div>
                    </div>
                </td>
                </table>
            
                   
         </div>       
    );
  };
export default Login;