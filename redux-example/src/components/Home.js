import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText ,Button,Card,CardText, CardBody, CardTitle} from 'reactstrap';
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
   
   const [userdata, setUserdata]= useState([]);

   useEffect(()=>{
      axios.get('https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/')
      .then((res) => {
         console.log(res.data)
         setUserdata(res.data)
      });

      },[])

   const navigate = useNavigate();
   const { isLoggedIn,data,userRole } = useSelector((state) => state.auth);
  //  const handleLogout =()=>{
  //    if(isLoggedIn){
  //        dispatch(logout(email));

  //    }
  // }
   const todashboard=()=>{
    navigate("/login");
   }
     

   
   const deleteUserdata = (username)=>{
      console.log(username)
      axios.delete(`https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/delete/${username}`)
      .then((res)=>{
         toast.success('User Deleted Successfull!!', {
            position: "top-center",
            autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
            draggable: true,
           progress: undefined,
           })
           setTimeout(function(){
            window.location.reload(1);
         }, 6000);
      }).catch(function (error){
         console.log(error);
          toast.error('Something went wrong!!', {
            position: "top-center",
            autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
            draggable: true,
           progress: undefined,
           })
      })
   }

   return (
      <>
      
      <div  class="container bg-dark text-light p-5">
    
  <div  className="container bg-dark p-5">
    <h1 className="display-4 fw-bold text-danger">Welcome to Brillio  Dashboard !</h1>
    <p className="lead">Brillio is laser-focused on turning technological disruptions into the advantages that our customers need to thrive in today’s digital economy.

.</p>
    <footer className="blockquote-footer text-warning">Brillio Technologies- <cite title="Source Title">Raj Mamodia</cite></footer>
    <div className='text-center'>
    
    <div className='container text-center'>
<Row>
  {userdata.map((item, index) => (
    <Col >
      <div key={index}>
        <Card style={{backgroundColor:"grey"}} key={index} className='mx-4 my-2'>
          <CardBody>
            <CardTitle tag="h5" style={{color:"black"}}>User Details</CardTitle>
            <CardText>First Name: {item.firstName}<br></br> 
            Last Name: {item.lastName} <br></br>
            Email: {item.email}<br></br>
            Gender: {item.gender}<br></br>
            Phone: {item.phoneNumber}<br></br>
            DOB: {item.dob}
            </CardText>
            <Button color='danger' onClick={()=>{
               deleteUserdata(item.email)
            }}> Delete</Button>
          </CardBody>
          
        </Card>
        
      </div>
    </Col>
  ))}
</Row>
</div>
<Button onClick={todashboard} color="primary" className='mt-1' style={{float: 'right' }}>Logout</Button>

    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
</>
   );
   
        };
export default Home;


