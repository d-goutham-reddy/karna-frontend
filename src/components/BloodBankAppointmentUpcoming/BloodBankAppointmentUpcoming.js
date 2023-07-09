import { react, Fragment, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { envs } from '../../utils/endpoint';
import './BloodBankAppointmentUpcoming.scss';
import { CompleteForm } from './CompleteForm';


const baseURL = envs.endpoint;

/**
 * 
 * @param {
* Date,
* Time,
* Name, 
* Ph, 
* Age,
* BldGrp, 
* reasonCancel
* id
* } props 
* @returns 
*/


const BloodBankAppointmentUpcoming = (props) => {

    const [cancelReason, setCancelReason] = useState();
    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => {
        
        // <div className="backdrop" {...props} />;
    }
    const handleClose = () => setShowModal(false);

    const handleSuccess = () => {
        console.log("success");
    };

    const handleCancel = () => {
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/bloodbank/appointments/upcoming/cancel/${props?.id}`,
                    {'cancelReason':cancelReason})
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Cancelled Upcoming Appointment ${response.data}`, {
                                toastId: 'blood bank cancel upcoming'
                            })
                            props?.callForApiCallRerender();

                        }
                        else {
                            toast.error(`unable to verify ${props.data}`, {
                                toastId: 'blood bank cancel upcoming'
                            })
                            throw Error;
                        }
                    })
            }
            catch (e) {
                // toast.error(`Network error`, {
                //     toastId: 'nwk error'
                // })
                console.log(e);
            }
        }
        callApi();
    }

    const handleSubmit = () => {
        setShowModal(true)
    }

    const propClose = ()=> {
        setShowModal(false);
    }

    return (
        <Fragment>
            <Card style={{ width: '100%', margin: "0px 0px 0px 0px" }} >
                <Card.Body>
                    <Card.Text>Date: {props.Date}</Card.Text>
                    <Card.Text>Time: {props.Time}</Card.Text>
                    <Card.Text>Name: {props.Name}</Card.Text>
                    <Card.Text>Phone No: {props.Ph}</Card.Text>
                    <Card.Text>Age: {props.Age}</Card.Text>
                    <Card.Text>Blood Group: {props.BldGrp}</Card.Text>
                    <Card.Text>Reason For Cancellation: </Card.Text>
                    <Card.Text>
                        <Form>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setCancelReason(e.target.value)}>{cancelReason}</Form.Control>
                            <Button variant="danger" type={'button'} className='mx-2 my-2' onClick={handleCancel}>cancel</Button><br />
                            <Button variant="success" type={'button'} className='mx-2 my-2' onClick={handleSubmit}>COMPLETE</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <div className='modal-example'> */}
            {/* <Modal
                className="modal"
                show={showModal}
                onHide={propClose}
                renderBackdrop={CompleteForm}
                handleClose={handleClose}
                handleSuccess={handleSuccess}>
                <div>
                </div>
            </Modal> */}
            {
                showModal && 
 
            <CompleteForm
            handleClose={handleClose}
            handleSuccess={handleSuccess}
            id={props.id}
            >

            </CompleteForm>
            }
            

        </Fragment>
    )
}


export default BloodBankAppointmentUpcoming;