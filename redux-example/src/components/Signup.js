import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody,CardTitle,Label,Input,FormGroup,Form, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {signup } from "../redux/actions/signAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=(props)=>{
    const { isRegistered,data,userRole } = useSelector((state) => state.sign);
    const dispatch = useDispatch();
    let navigate = useNavigate();
//const normalData = "Hello React!!";
//const [message,setMessage]=useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [username, setUsername] = useState('');
const [password,setPassword]=useState('');
const [phoneno,setPhoneno]=useState('');
const [birthdate,setBirthdate]=useState('');
const [gen,setGen]=useState('');
const [oldpass,setOldpass] =useState('');
const handleRegister = () => {

    const emailid = username;
    const firstName = fname;
    const lastName = lname;
    const phoneNumber = phoneno;
    const dateOB = birthdate;
    const gend = gen;
    const newPassword= password;
    const oldPassword = oldpass;

    dispatch(signup(emailid,firstName,lastName,phoneNumber,dateOB,gend,newPassword));

    console.log(".........hey i am registered in", isRegistered);
    navigate('/login');
    
  };

//const [user,setUser]=useState(false);
const savedata = (e) => {
    
    const user={
        email: username,
        firstName: fname,
        lastName: lname,
        phoneNumber:phoneno,
        dob: new Date(birthdate),
        gender: gen,
        newPassword: password
        
    }
    console.log(user);
    axios.post("https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/saveUser", user)
    .then((response) =>
     {
      console.log(response.data);
      toast.success('User Registered Successfull!!', {
        position: "top-center",
        autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
        draggable: true,
       progress: undefined,
       
       })
    //    setTimeout(function(){
    //     //window.location.reload(1);
    //  }, 6000);
    

      //console.log("Data: ", response.data);
    }).catch((error) => {
      console.error('Something went wrong!', error);
    });

    }

    const handlefname = (e) => {
        setFname(e.target.value)
        }
    const handlelname = (e) => {
            setLname(e.target.value)
        }
    const handleusername = (e) => {
            setUsername(e.target.value)
        }
    const handlepassword = (e) => {
            setPassword(e.target.value)
        }
        
     const handleDOB = (e) => {
            setBirthdate(e.target.value)
        }
     const handlegender = (e) => {
            setGen(e.target.value)
        }
    const handlePhoneNo = (e) => {
            setPhoneno(e.target.value)
        }


return(
<div>
<Card >
<CardTitle tag="h4" >
Registration Form
    </CardTitle>

   
   <CardBody>
<Form id="registerform">
   <FormGroup row>
   <Label>FirstName</Label>
   <Col sm={5}>
<Input type="text" id="firstName" name="fname" onChange={(e)=>handlefname(e)}/><br/>
</Col>
   </FormGroup >
   <FormGroup row>
   <Label>Last Name</Label>
   <Col sm={5}>
<Input type="text" id="lastName" name="fname" onChange={(e)=>handlelname(e)}/><br/>
</Col>
   </FormGroup>
    <FormGroup row>
    <Label>Email</Label>
    <Col sm={5}>
<Input type="email" id="mail" name="email"  onChange={(e)=>handleusername(e)} /><br/>
</Col>
    </FormGroup>

    <FormGroup row>
        <Label>Date Of Birth</Label>
        <Col sm={5}>
        <Input type="date" id="dob" onChange={(e)=>handleDOB(e)} />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label> Gender</Label>
       <Col>
        <input type="radio" id="male" name="gender" value="Male" onChange={(e)=>handlegender(e)}/>Male<span></span><span/>
        <input type="radio" id="female" name="gender" value="Female"/>Female<span></span><span/>
        
        </Col>
    </FormGroup>
    <FormGroup row>
    <Label>Password</Label>
    <Col sm={5}>
<Input type="password" id="pw" name="pw" onChange={(e)=>handlepassword(e)}/><br/>
</Col>

    </FormGroup>
    {/* <FormGroup row>
        <Label size="lg" md={2}>Enter Old Password:</Label>
        <Col sm={10}>
        <Input type="password"   placeholder="Enter Old Password" value={oldpass} onChange={(e)=>setOldpass(e.target.value)} required></Input>
        </Col>
        </FormGroup> */}
        
    <FormGroup row>
   <Label>Phone No</Label>
   <Col sm={5}>
<Input type="text" id="phoneno" name="phoneno" onChange={(e)=>handlePhoneNo(e)}/><br/>
</Col>
   </FormGroup >
   

    {/* <button type="submit" onClick={savedata}><label><ButtonComp text="Register" clr="pink"></ButtonComp></label></button> */}
    <Button color="primary" onClick={handleRegister}>Register</Button>

</Form>
</CardBody>
</Card>

</div>

)
//}

};

export default Signup;