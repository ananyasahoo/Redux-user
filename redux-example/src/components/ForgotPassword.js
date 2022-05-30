import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { update } from "../redux/actions/updateAction";
//import {isUpdated} from '../reducers/updateReducer';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";
import { FormGroup, Input,Label,Col,Form,Button} from "reactstrap";
import Login from './Login';
const ForgotPassword =()=> {
  const [modal, setModal] = useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  const [newpass,setNewpass] =useState('');
    const [oldpass,setOldpass] =useState('');
    const [email,setEmail] =useState('');
    let navigate = useNavigate();
    const change =()=>
    {
        navigate('/login');
    }
    const { isLoggedIn,data,userRole } = useSelector((state) => state.reset);
    const dispatch = useDispatch();
     
    const handleReset = () => {
        console.log("Handled Reset", email);
      //  navigate("/modal");
      //  const email1 = email;
      //  const password = pwd;
        const payload={
            email:email,
            newpass:newpass,
            oldpass:oldpass
        }
        dispatch(update(payload));
        //console.log("User logged in Successfully", isLoggedIn);
       
      };
      //console.log("isUpdated value:",isUpdated);

    // function handle  () {
    //     console.log("inside function");

    //     const id = email;
    //     console.log(id);

    //     const data ={
    //         oldPassword: oldpass,
    //         newPassword: newpass,
    //     };
    //     console.log(data);
    //     axios.put('https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/updatePassword/'+id ,data)
    //         .then((res) => console.log(res.data))
    //         .catch(err => console.log(err));
    //         setModal(!modal);
         
    
    return(
        <div className='container'>
            <Form >
            <h1 >Forget Password </h1>
            <div>
            
            <FormGroup row>
            <Label size="lg" md={2} >Enter EmailId:</Label>
            <Col sm={10}>
            <Input type="text"  value={email} onChange={(e)=>setEmail(e.target.value) } required ></Input>
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label size="lg" sm={2} >Enter Old Password:</Label>
            <Col sm={10}>
            <Input type="password"  value={oldpass} onChange={(e)=>setOldpass(e.target.value)} required ></Input>
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label size="lg" sm={2} >Enter New Password:</Label>
            <Col sm={10}>
            <Input type="password" value={newpass} onChange={(e)=>setNewpass(e.target.value)} required ></Input>
            </Col>
            </FormGroup>
            </div>
            <div>
            <Button color="secondary" onClick={handleReset}>Submit</Button> 
            </div>
                   
            </Form>
            <div>
            <Modal
   isOpen={modal} 
  >
    <ModalHeader toggle={toggle}>
    </ModalHeader>
    <ModalBody>
    Password changed Successfully!!!
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={change}
      >
        Login
      </Button>
      {' '}
      <Button onClick={function noRefCheck(){}}>
        Cancel
      </Button>
    </ModalFooter>
    </Modal> 
            </div>
            </div>
    
    )
  
};
export default ForgotPassword;
