import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';
import { toast } from 'react-toastify';



/**
 * 
 * @param {
 * Name,
 * BldGrp,
 * component,
 * purpose,
 * email,
 * age,
 * ph,
 * address,
 * sex,
 * dob,
 * id
 * } props 
 * @returns 
 */


const baseURL = envs.endpoint;

const Waiting = (props) => {

  const [cancelReason, setCancelReason] = useState();

  const handleCancel = () => {
    async function callApi() {
      try {
        await axios
          .put(`${baseURL}/hospital/requests/waiting/cancel/${props.id}`,
            {
              "cancelReason": cancelReason,
            })
          .then((response) => {
            console.log(response.status)
            if (response.status === 200) {
              toast.success(`cancelled `, {
                toastId: 'blood bank register'
              })

              // props?.callForApiCallRerender();

            }
            else {
              toast.error(`unable to verify }`, {
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

  return (
    <Card style={{ width: '100%', margin: "0px 0px 0px 0px",  height:'700px'  }}>
      <Card.Body>
        <Card.Text><span>Name:</span> {props.Name}</Card.Text>
        <Card.Text><span>Blood Group:</span> {props.BldGrp}</Card.Text>
        <Card.Text><span>Component Required:</span> {props.component}</Card.Text>
        <Card.Text><span>Transfusion Purpose:</span> {props.purpose}</Card.Text>
        <Card.Text><span>Email:</span> {props.email}</Card.Text>
        <Card.Text><span>Age:</span> {props.age}</Card.Text>
        <Card.Text><span>Phone No:</span> {props.ph}</Card.Text>
        <Card.Text><span>Address:</span> {props.address}</Card.Text>
        <Card.Text><span>Gender:</span> {props.sex}</Card.Text>
        <Card.Text><span>Date Of Birth:</span> {props.dob}</Card.Text>
        <Card.Text><span>Reason For Cancellation:</span> {props.cal}</Card.Text>

        <Form>
          <Form.Control as="textarea" rows={3} onChange={(e) => setCancelReason(e.target.value)}>{cancelReason}</Form.Control>
          <Button variant="danger" className='mx-2 my-2' onClick={handleCancel}>cancel</Button><br />
          {/* <Button variant="danger" className='mx-2 my-2'>COMPLETE</Button> */}
        </Form>

      </Card.Body>
    </Card>
  )

}

export default Waiting;
