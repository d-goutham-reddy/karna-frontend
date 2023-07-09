import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';
import { envs } from '../../utils/endpoint';
import axios from 'axios';
import './AdminCard.scss';

const baseURL = envs.endpoint;


/**
 * 
 * @param {
 * name,
 * email,
 * ph,
 * addr,
 * hosreg,
 * id,
 * type (bloodbank, hospital)
 * callForApiCallRerender
 * } props 
 * @returns 
 */

const AdminCard = (props)=> {

  // console.log(props.id, props.type)

  const handleVerify = ()=>{
    console.log("<--->", props.type)
      async function callApi() {
          try {
              await axios
                  .put(`${baseURL}/admin/registrations/${props.type}/verify/${props.id}`)
                  .then((response) => {
                      console.log(response.status)
                      if (response.status === 200) {
                          toast.success(`Succesfully verfied ${props.name}`, {
                              toastId: 'blood bank register'
                          })
                          props?.callForApiCallRerender();
                         
                      }
                      else {
                          toast.error(`unable to verify ${props.name}`, {
                              toastId: 'blood bank register'
                          })
                          throw Error;
                      }
                  })
          }
          catch (e) {
              console.log(e);
          }
      }
      callApi();

  }

  const handleCancel = ()=>{

      async function callApi() {
          try {
              await axios
                  .delete(`${baseURL}/admin/registrations/${props?.type}/cancel/${props?.id}`)
                  .then((response) => {
                      console.log(response.status)
                      if (response.status === 200) {
                          // localStorage.setItem('id', response.data._id)
                          toast.success(`Succesfully Cancelled ${props.name}`, {
                              toastId: `${props.id} success`
                          })
                          props?.callForApiCallRerender();
                      }
                      else {
                          toast.error(`Failed to cancel ${props.name}, ${response?.data}`, {
                            toastId: `${props.id} error`
                          })
                          throw Error;
                      }
                  })
          }
          catch (e) {
            toast.error(`Failed to cancel ${props.name}, ${e}`, {
              toastId: `${props.id} error`
            })
              console.log(e);
          }
      }
      callApi();
  }

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body styele={{}}>
      <Card.Text>
        NAME : {`${(props.name).slice(0, 20)} ...`}</Card.Text>
      <Card.Text>
        EMAIL : {`${(props.email).slice(0, 20)} ...`}</Card.Text>
      <Card.Text>
        PHONE No : {`${String((props.ph)).slice(0, 20)} ...`}</Card.Text>
      <Card.Text>
        ADDRESS : {`${(props.addr).slice(0, 20)} ...`}</Card.Text>
      <Card.Text>
        REG No : {`${(props.hosreg).slice(0, 20)} ...`}</Card.Text>
      <Card.Text>
        <Form className='d-flex'>
      <Button variant="success" className='mx-2 my-2' onClick={handleVerify}>VERIFY</Button><br/>
      <Button variant="danger" className='mx-2 my-2' onClick={handleCancel}>CANCEL</Button>
      </Form>
      </Card.Text>

    </Card.Body>
  </Card>
  )

}

export default AdminCard;
