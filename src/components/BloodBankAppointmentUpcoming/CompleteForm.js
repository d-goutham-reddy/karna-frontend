import React, { useState, Fragment } from 'react'
import './BloodBankAppointmentUpcoming.scss';
import Form from 'react-bootstrap/Form';
import { envs } from '../../utils/endpoint';
import axios from 'axios';
import { toast } from 'react-toastify';
import correct from "../../assests/correct.png";
import { useNavigate } from 'react-router-dom';



const baseURL = envs.endpoint;


export const CompleteForm = (props) => {

    const [banReasom, setBanReason] = useState('');
    const [permanentBanReason, setPermanenetBanReason] = useState('');
    const [onDateTemp, setOnDateTemp] = useState('');
    const [showInsertCard, setShowInsertCard] = useState(false);
    const navigate = useNavigate()
    const [showOk, setShowOk] = useState(false)
    const [rfidDataInsert, setRfidDataInsert] = useState({
        "_id": "",
        "bloodgroup": "",
        "location": "",
        "appdate": "",
        "time": "",
        "status": "",
        "arriveStatus": false,
        "donorDetails": {
        "familyPermission": false,
        "_id": "",
        "fname": "",
        "mname": "",
        "lname": "",
        "email": "",
        "password": "",
        "address": "",
        "phone": 8861861428,
        "sex": "",
        "DOB": "",
        "age": 21,
        "bloodgroup": "",
        "aadharId": 551675114222,
        "emergencycontactname":  "",
        "emergencycontactphone": 8296339964,
        "role": "",
        "dead": false,
        "permanentbanreason": "",
        "eligibledate": "",
        "livessavedmeter": 1,
        "points": 1150,
        "badge": "",
        "volunteer": true,
        "createdAt": "",
        "updatedAt": "",
        "__v": 0,
        "lastdonationdate": "",
        "organRequest": true,
        "feedback": ""
        },
        "bloodbankDetails": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
        });

    const handleBanStatus = (e) => {
        console.log(e.target.value)
        setBanReason(e.target.value)
    }

    const handleResetRadio = (e)=>{
        setBanReason('')
        e.target.value = '';
    }

    const handleInsert = (e)=>{
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/appointments/upcoming/complete/insertdata/${props.id}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully Inserted`, {
                                toastId: 'blood bank register'
                            })
                            // setShowInsertCard(false)
                            setShowOk(true)
                            // props?.callForApiCallRerender();

                        }
                        else {
                            toast.error(`unable to verify`, {
                                toastId: 'blood bank register'
                            })
                            // setShowInsertCard(false)
                            // setShowOk(true)
                            throw Error;
                        }
                    })

            }
            catch (e) {
                console.log(e);
            }
        }
        callApi();

        // window.location.reload(false);
    }


    const handlePermanentSubmit = () => {
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/bloodbank/appointments/upcoming/complete/permanentban/${props.id}`,
                        {
                            "permanentbanreason": permanentBanReason,
                        })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully Banned The Donor`, {
                                toastId: 'blood bank register'
                            })

                            // props?.callForApiCallRerender();

                        }
                        else {
                            toast.error(`unable to ban`, {
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

    const handleTempSubmit = () => {
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/bloodbank/appointments/upcoming/complete/temporaryban/${props.id}`,
                        {
                            "eligibledate": onDateTemp,
                        })

                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully Banned Donor Till ${onDateTemp}`, {
                                toastId: 'blood bank register'
                            })
                            props?.callForApiCallRerender();

                        }
                        else {
                            toast.error(`unable to ban`, {
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

    const handleComplete = ()=>{

        async function callApi() {

            if(permanentBanReason === ''){

            try {
                await axios
                    .put(`${baseURL}/bloodbank/appointments/upcoming/complete/${props.id}`,
                        {
                            "": '',
                        })

                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success(`Succesfully Completed The Blood Donation`, {
                                toastId: 'blood bank register'
                            })
                            // props?.callForApiCallRerender();
                            // setShowInsertCard(false)
                            setRfidDataInsert(response.data)
                            //  setShowInsertCard(true)
                        }
                        else {
                            toast.error(`unable to verify ${props.name}`, {
                                toastId: 'blood bank register'
                            })
                            // setShowInsertCard(false)
                            throw Error;
                            
                        }
                    })
            }
            catch (e) {
                console.log(e);
            }
        }
    }
        callApi();
        setShowInsertCard(true);
    

    }

    const handleCloseX = ()=>{
        setShowInsertCard(false)
    }


    // const handleconclution = (e)=>{
    //     console.log(e.target.name, e.target.value)
    // }


    // console.log(props)
    return (
        <Fragment>
        <div className="backdrop" {...props} >
            <div className='contam'>
                <div className="modal-header">
                    <div className="modal-title">Handle Banning</div>
                    <div className='close-btn'>
                        <span className="close-button" onClick={props.handleClose}>
                            x
                        </span>
                    </div>
                </div>
                <div className="modal-desc">
                    <h6><b>Youre Not Eligible To Donate Permanently If:</b></h6>
                    <p>
                        <ol>
                            <li>
                                You have HIV or AIDS history or tested positive for syphilis, gonorrhea, or other sexually transmitted infections.

                            </li>
                            <li>
                                You used needles to take drugs, including steroids.

                            </li>
                            <li>
                                You ever had hepatitis B or C or have an active hepatitis infection.

                            </li>
                            <li>
                                You ever had cancer, including leukemia and lymphoma.

                            </li>
                            <li>
                                You ever had a heart attack or stroke.

                            </li>
                            <li>
                                You ever had an organ transplant or bone marrow transplant.

                            </li>
                            <li>
                                You ever had a positive test for the Zika virus or Chagas disease or Creutzfeldt-Jakob disease (CJD) or variant CJD.

                            </li>
                            <li>
                                You dont satisfy the age limit criterion  Minimum 18 Years and Maximum 65 Years.

                            </li>
                            <li>
                                You dont satisfy the weight limit criterion  Minimum 50 kgs.

                            </li>
                        </ol>
                    </p>

                    <h6><b>Youre Not Eligible To Donate Blood Temporarily For A Certain Period Of Time If:</b></h6>
                    <p>
                        <ol>
                            <li>
                                You have diabetes and took insulin or other medications 24 hours prior to the time of donation and have complications such as retinopathy, neuropathy or nephropathy.

                            </li>
                            <li>
                                You have Hypertension and have headache, dizziness or chest pain related to high Blood Pressure at the time of donation.

                            </li>
                            <li>
                                You have taken harmful medications at the time of donation such as Antibiotics (To Treat Active Infections), Blood thinners (Warfarin, Heparin, Aspirin), Immunosuppressants, Accutane (6 Months Gap Required), Intravenous drug use (Recreational drugs), Herbal supplements.

                            </li>
                            <li>
                                You have taken harmful vaccines such as Covid-19 Vaccine, Hepatitis B Vaccine (7 days prior), Measles, Mumps and Rubella (MMR) Vaccine (4 Weeks prior) and Varicella (Chickenpox) Vaccine (4 Weeks prior).

                            </li>
                            <li>
                                You have travelled to areas with highly infectious diseases such as Malaria (12 Months prior), Zika (28 Days prior), Mad Cow (6 Months prior) and HIV or Hepatitis-B or Hepatitis-C.

                            </li>
                            <li>
                                You have had sex with a partner injected with drugs or has HIV, Hepatitis-B or C, or is a commercial sex worker, or with more than one partners in last 6 months, or if you have a history of Sexually Transmitted Infections (STI).

                            </li>
                            <li>
                                You had access to intravenous drugs (injected to veins - 6 months prior) or recreational drugs (Non prescribed drugs – 48 hours prior) or took medications not prescribed by a doctor or prescribed to someone else.

                            </li>
                            <li>
                                (For Women) You had a successful delivery in last 6 months or had miscarriage/abortion in last 3 months.

                            </li>
                            <li>
                                You dont have clean Lifestyle Habits  Had alcohol, tobacco or any other nicotine products 24 Hours prior to the donation time or had tattoo or piercing 6 months prior or had surgeries 6 months prior to the donation time.

                            </li>
                            <li>
                                You dont have your Blood Sugar Level between 70 and 180 mg/dL.

                            </li>
                            <li>
                                Your hemoglobin level at the time of donation is not at least 12.5g/dL (grams per deciliter) if youre a woman or not at least 13.5 g/dL if youre a man.

                            </li>
                            <li>
                                Your Blood Pressure Level is not in the range of 100/60 to 160/100 mmHg.

                            </li>

                        </ol>
                    </p>


                    <Form.Group className="mb-3" onChange={handleBanStatus} name='bans' >
                        <button className='btn btn-danger mx-3 my-4' onClick={handleResetRadio}>reset Radio</button>
                        <Form.Label>Conclusions: </Form.Label>
                        <div className="mb-3 d-flex" >
                            <Form.Check
                                label="Permanent Ban"
                                name="bans"
                                id="permanent ban"
                                type={'radio'}
                                value={'pban'}
                                className='mx-2'
                            />
                            <Form.Check
                                label="Temporary Ban"
                                name="bans"
                                id="Temporary Ban"
                                type={'radio'}
                                value='tban'
                                className='mx-2'
                            />
                        </div>
                        {/* </div>) )}*/}

                    </Form.Group>
                    {
                        banReasom === 'pban' && <div className=''>
                            <h6>Permanent ban Reason</h6>
                            <Form.Group
                                className="mb-3"
                                onChange={(e) => setPermanenetBanReason(e.target.value)}  >
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                >
                                </Form.Control>
                            </Form.Group>
                            <button type='button'
                                className='success'
                                onClick={handlePermanentSubmit}>SUBMIT</button>
                        </div>
                    }
                    {
                        banReasom === 'tban' && <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* <h6>Temporary ban Reason</h6> */}
                            <Form.Group
                                className="mb-3"
                                onChange={(e) => setOnDateTemp(e.target.value)}  >
                                <Form.Label>Ban Until Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Eligible data"
                                    name='' />
                            </Form.Group>
                            <button type='button'
                                className='success'
                                onClick={handleTempSubmit}>SUBMIT</button>
                        </div>
                    }
                    {/* <button type='button'
                        className='btn btn-success'
                        onClick={handleComplete}>COMPLETE</button> */}
                </div>
                <div className="modal-footer">
                    <button className="secondary-button" onClick={props.handleClose}>
                        Close
                    </button>
                    <button className="primary-button" onClick={handleComplete}>
                        COMPLETE
                    </button>
                </div>
            </div>
        </div>
        {
            showInsertCard && <div className='card_insert'>
                <div className='box'>
                    <div className='header'>
                    
                    <span onClick={handleCloseX}>X</span>
                    </div>
                    <div className='img-dis mx-5 my-5'>
                    {/* <img src={correct} alt='correct ico' height={60} width={60}/> */}
                    {
                      showOk ? <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='text-center my-5'>Details inserted Successfully</h4>

                      <img src={correct} alt='correct ico' height={60} width={60}/> 
                    <button className='btn btn-success rounded mt-5 px-5 py-1' onClick={()=>{
                        window.location.reload(false);
                    }}>Ok</button>
                      
                      </div> : <> 
                    <h4 className='text-center my-5'>Details About to be Written into the RFID TAG ARE</h4>
                      <p>Name: {rfidDataInsert.donorDetails.fname}</p>
                      <p>Phone: {rfidDataInsert.donorDetails.phone}</p>
                      <p>Blood group: {rfidDataInsert.donorDetails.bloodgroup}</p>
                      <p>Sex: {rfidDataInsert.donorDetails.sex}</p>
                      <p>Age: {rfidDataInsert.donorDetails.age}</p>
                    <button className='btn btn-success rounded' onClick={handleInsert}>INSERT</button>
                      
                      </> 
                    }
                   

                    </div>
                   
                </div>
            </div>
        }

        {
            showOk && 
            <div className='box'>
            <div className='header'>
            <h4>Details About to be Written into the RFID TAG ARE:</h4>
            <span onClick={handleCloseX}>X</span>
            </div>
            <div className='img-dis'>
            <img src={correct} alt='correct ico' height={60} width={60}/>

            <button className='btn btn-success rounded' onClick={()=>{
                    // navigate('/bloodBank/appoint')
                   setTimeout(window.location.reload(false), 8000);
            }}>ok</button>
                    </div>
                   
                </div>
           
            
        }
        </Fragment>
    )
}

