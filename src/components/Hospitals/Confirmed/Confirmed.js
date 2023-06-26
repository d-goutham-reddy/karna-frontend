import { Fragment, useState, react } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Confirmed.scss';
import ok from "../../../assests/correct.png"
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import { toast } from 'react-toastify';


/**
 * 
 * @param {
 * bbName,
 * bbLoc,
 * bbNumber,
 * comp,
 * bloodGroup,
 * expiryDate,
 * plateletCount,
 * haemoglobinLvl,
 * rbcCnt,
 * report,
 * trsnplatPurpose,
 * PatName,
 * patPhone,
 * id,} props 
 * @returns 
 */

const baseURL = envs.endpoint;
const Confirmed = (props) => {

    const [disCard, setDisCard] = useState(false);
    const [readData, setReadData] = useState(false);
    const [idSubmit, setIdSubmit] = useState();
    const [msgFromPatient, setMsgFromPatient] = useState('');

    const handleArrived = () => {
        setDisCard(true)
    }

    const handleReadData = () => {

        setReadData(true)
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/hospital/requests/confirmed/arrived/${props.id}`, {})
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully`, {
                                toastId: 'blood bank register'
                            })
                            setIdSubmit(response.data._id)
                        }
                        else {
                            toast.error(`unable to process`, {
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

    const handleSubmit = () => {
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/hospital/requests/confirmed/arrivedsubmit/${idSubmit}`, {
                        'heartwarmingmsg': msgFromPatient,
                    })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully`, {
                                toastId: 'blood bank register'
                            })
                            setTimeout(() => {
                                window.location.reload(false);
                            }, 6000);
                        }
                        else {
                            toast.error(`unable to verify`, {
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
        <Fragment>
            {
                disCard && <>
                    <div className='background'>
                        <div className='box'>
                            <div className='headers'>
                                <span onClick={(e) => setDisCard(false)}>X</span>
                            </div>
                            {
                                readData === true ? <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <h6 className='my-3 text-bold'>Blood Packet Arrived Successfully</h6>
                                    <img src={ok} height={50} width={50} alt='ok img' className='my-5' />
                                    <label id='msgPatient'>Message from Patient</label>
                                    <input type='text' id='msgPatient' className='w-75 my-3 rounded' onChange={(e) => setMsgFromPatient(e.target.value)} />
                                    <button
                                        className='btn btn-success'
                                        onClick={handleSubmit}
                                    >SUBMIT</button>
                                </div> : <div className='msg-box'>
                                    <p>Put RFID Tag near the reader</p>
                                    <img src={ok} height={50} width={50} alt='ok img' />
                                    <p></p>
                                    <button
                                        className='btn btn-primary'
                                        onClick={handleReadData}
                                    >READ DATA</button>
                                </div>
                            }

                        </div>
                    </div>


                </>

            }
            <Card style={{ 
                width: '100%', 
                margin: "0px 0px 0px 0px",
                height:'700px'
                 }}>
                <Card.Body>
                    <Card.Text><span>BLOOD BANK NAME:</span> {props.bbName}</Card.Text>
                    <Card.Text><span>BLOOD BANK LOCATION:</span>{props.bbLoc}</Card.Text>
                    <Card.Text><span>BLOOD BANK NUMBER:</span> {props.bbNumber}</Card.Text>
                    <Card.Text><span>COMPONENT:</span> {props.comp}</Card.Text>
                    <Card.Text><span>BLOOD GROUP:</span> {props.bloodGroup}</Card.Text>
                    <Card.Text><span>EXPIRY DATE:</span> {props.expiryDate}</Card.Text>
                    <Card.Text><span>PLATELET COUNT:</span> {props.plateletCount}</Card.Text>
                    <Card.Text><span>HAEMOGLOBIN LEVEL:</span> {props.haemoglobinLvl}</Card.Text>
                    <Card.Text><span>RED BLOOD CELL COUNT:</span> {props.rbcCnt}</Card.Text>
                    <Card.Text><span>REPORT:</span> {props.report}</Card.Text>
                    <Card.Text><span>TRANSFUSION PURPOSE:</span> {props.trsnplatPurpose}</Card.Text>
                    <Card.Text><span>PATIENT NAME:</span> {props.PatName}</Card.Text>
                    <Card.Text><span>PATIENT PHONE No:</span>{props.patPhone}</Card.Text>
                    <Button onClick={handleArrived}>Arrived:</Button>
                </Card.Body>
            </Card>
        </Fragment>
    )


}


export default Confirmed;
