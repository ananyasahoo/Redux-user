import React from 'react'
import { useState } from 'react';
import { useNavigate,Link} from "react-router-dom";
import { Button } from 'reactstrap';
import { ButtonGroup, Modal,ModalBody,ModalFooter,ModalHeader,Toggle} from 'reactstrap';

export default function ModalComponent() {
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    const navigate = useNavigate();
    return(
        <div>
          <Button color="danger" onClick={toggle}>
User Logged in successfully
</Button>

<Modal isOpen={modal}>
<ModalHeader toggle={toggle}>
  User details are correct
</ModalHeader>

<ModalBody>Welcome User
</ModalBody>
<ModalFooter>
  <Button color="primary"
    // onClick={function noRefCheck(){} }
    onClick={()=>navigate('/home')} >  
Navigate to Home
  </Button>

  {' '}

  <Button onClick={()=>navigate('/')}>Cancel</Button>
</ModalFooter>
</Modal>
      </div>
      
    )
}