import React, { Fragment, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../../../components/Cards/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import StockBLd from '../../../components/Stock/StockBLd';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';
import './BloodBankAppointmentUpcoming.scss';
import correct from "../../../assests/correct.png";




const baseURL = envs.endpoint;
const initialStage = {
    "_id": "",
    "separationType": "",
    "expiryDate": "",
    "availablestatus": true,
    "bloodDonationDetails": {
    "_id": "",
    "bloodgroup": "",
    "location": " ",
    "appdate": "",
    "time": "",
    "status": "",
    "arriveStatus": true,
    "donorDetails": "",
    "bloodbankDetails": "",
    "createdAt": "",
    "updatedAt": "",
    "__v": 0,
    "feedback": "",
    "haemoglobinLevel": "",
    "plateletCount": "",
    "rbcCount": "",
    "report": ""
    },
    "createdAt": "",
    "updatedAt": "",
    "__v": 0
    }

export const Stock = () => {

    const [newBloodDis, setNewBloodDis] = useState(false)
    // const navigate = useLocation();
    const jj = useLocation();
    const navigate = useNavigate();

    const [stockWhole, setStockWhole] = useState([initialStage]);
    const [stockRbc, setStockRbc] = useState([initialStage]);
    const [stockPlasma, setStockPlasma] = useState([initialStage])
    const [stockPlatelets, setStockPlatelets] = useState([initialStage]);
    const [oneOverLay, setOneOverLay] = useState(false);
    const [twoOverLay, setTwoOverLay] = useState(false);
    const [detailsOfPacket, setDetailsOfPacket] = useState({});

    const newBloodPacketHandler = (event) => {
        setNewBloodDis((prev) => !prev)
    }
    const handleProceed = ()=>{
        
        console.log(jj.pathname)
        setOneOverLay(true);
        // navigate("/bloodbank/terms");
    }
//whole
    useEffect(()=>{
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/bloodbank/stock/available/${localStorage.getItem('blood_bank_id')}`,{
                        'packettype':"whole"
                    })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            // toast.success(`Succesfully `, {
                            //     toastId: 'blood bank register'
                            // })
                            setStockWhole(response.data)
                        }
                        else {
                            // setStockWhole(response.data)
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
    }, [])

// RBC

useEffect(()=>{
    async function callApi() {
        try {
            await axios
                .post(`${baseURL}/bloodbank/stock/available/${localStorage.getItem('blood_bank_id')}`,{
                    'packettype':"rbc"
                })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        // toast.success(`Succesfully `, {
                        //     toastId: 'blood bank register'
                        // })
                        setStockRbc(response.data)
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
}, [])

// plasma

useEffect(()=>{
    async function callApi() {
        try {
            await axios
                .post(`${baseURL}/bloodbank/stock/available/${localStorage.getItem('blood_bank_id')}`,{
                    'packettype':"plasma"
                })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        // toast.success(`Succesfully `, {
                        //     toastId: 'blood bank register'
                        // })
                        setStockPlasma(response.data)
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
}, [])


// platelets

useEffect(()=>{
    async function callApi() {
        try {
            await axios
                .post(`${baseURL}/bloodbank/stock/available/${localStorage.getItem('blood_bank_id')}`,{
                    'packettype':"platelet"
                })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        // toast.success(`Succesfully `, {
                        //     toastId: 'blood bank register'
                        // })
                        setStockPlatelets(response.data)
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
}, [])

const handleCloseX = ()=>{
    setOneOverLay(false)
}


const rfidGet = ()=>{
    async function callApi() {
        try {
            await axios
                .get(`${baseURL}/bloodbank/stock/new/details`,)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        toast.success(`Succesfully`, {
                            toastId: 'blood bank register'
                        })
                        console.log(response.data)
                        setTwoOverLay(true)
                        setOneOverLay(true)
                        setDetailsOfPacket(response.data)
                        localStorage.setItem('stock_details_id', response.data._id)
                    }
                    else {
                        // setOneOverLay(true)
                        
                        toast.error(response.data, {
                            toastId: 'blood bank register'
                        })
                        throw Error;
                    }
                })
        }
        catch (e) {  
            // setOneOverLay(true)

            console.log(e);
            
        }
    }
    callApi();
}

    console.log(detailsOfPacket)
    return (
        <Fragment>
            { oneOverLay ? twoOverLay?<>
                <div className='card_insert'>
                <div className='box'>
                    <div className='header p-3'>
                    <span onClick={handleCloseX}>X</span>
                    </div>
                    <div className='img-dis mx-4 px-5'>
                    <h4 className='my-2'>Details of the Packet</h4>
                    <img src={correct} alt='correct ico' height={80} width={80}/>
                    <div className='my-2 p-3'>
                    <p>Donor Name: {detailsOfPacket.donorDetails.fname}</p>
                    <p>Phone No: {detailsOfPacket.donorDetails.phone}</p>
                    <p>Blood Group: {detailsOfPacket.donorDetails.bloodgroup}</p>
                    <p>Appointment Date: {detailsOfPacket.appdate.slice(0, 10)}</p>
                    <p>Time: {detailsOfPacket.time}</p>
                    <p>Sex: {detailsOfPacket.donorDetails.sex}</p>
                    <p>Age: {detailsOfPacket.donorDetails.age}</p>
                    </div>
                    {
                    <>
                    <button className='btn btn-success rounded' onClick={()=>{
                       navigate("/bloodbank/terms");
                    }}>Proceed</button>
                      
                    </> 
                     
                    }
                   

                    </div>
                   
                </div>
            </div> 
                
            </>:<>

                <div className='card_insert'>
                <div className='box'>
                    <div className='header'>
                    
                    <span onClick={handleCloseX}>X</span>
                    </div>
                    <div className='img-dis mx-5 my-3'>
                    <h4 className='mt-3'>PUT RFID TAG NEAR THE READER</h4>
                    <img src={correct} alt='correct ico' height={60} width={60} className='mt-4'/>
                    {
                    <>
                    <button className='btn btn-success rounded mt-5' onClick={rfidGet}>Read Data</button>
                      
                    </> 
                     
                    }
                   

                    </div>
                   
                </div>
            </div> </>:<>
            {/* <div className='card_insert'>
                <div className='box'>
                    <div className='header'>
                    <h4>DETAILS OF THE PACKET ARE:</h4>
                    <span onClick={handleCloseX}>X</span>
                    </div>
                    <div className='img-dis'>
                    <img src={correct} alt='correct ico' height={60} width={60}/>
                    <p>Donor Name {}</p>
                    {
                    <>
                    <button className='btn btn-success rounded' onClick={rfidGet}>Proceed</button>
                      
                    </> 
                     
                    }
                   

                    </div>
                   
                </div>
            </div>  */}
            </>
            }
            <div className='mx-5 p-2'>
                <h5 className="my-4 mx-5 " >ARRIVAL OF A NEW BLOOD PACKET: </h5>
                {/* // onClick={newBloodPacketHandler}> */}
                <Button variant='warning mx-5 mb-4'  onClick={handleProceed}>
                
                    NEW BLOOD PACKET
                </Button>
                {

                    // newBloodDis && <Container className='border border-dark p-4'>
                    //     <Row>
                    //         <Col xs={12} md={6}>
                    //             <p>
                    //                 PUT RFID TAG NEAR THE READER
                    //             </p>
                    //         </Col>
                    //         <Col xs={12} md={6}>
                    //             <h5>DETAILS OF THE PACKET ARE:</h5>
                    //             <p>
                    //                 DONOR NAME: Chirag V
                    //                 PHONE NO: 8861787239
                    //                 BLOOD GROUP: O+
                    //                 APPOINTMENT DATE: 23/05/2023
                    //                 TIME: 9:00 A.M
                    //                 SEX: Male
                    //                 AGE: 21
                    //             </p>
                    //             <Button variant='warning mx-0 my-1' onClick={handleProceed}>
                    //                 Proceed
                    //             </Button>

                    //         </Col>
                    //     </Row>

                    // </Container>
                }
            </div>

            <h5 className="my-4 mx-5 px-5" >AVAILABLE BLOOD PACKETS: </h5>

            <Tabs
                defaultActiveKey="Whole"
                id="fill-tab-example"
                className="my-4"
                justify
            >
                <Tab eventKey="Whole" title="Whole">
                    {/* <Sonnet /> */}
                    <Container className='my-1'>
                        <Row>
                            {
                                stockWhole.map((ele, index)=>{
                                    return (
                                    <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                    <StockBLd
                                        ExpDate={ele.expiryDate.slice(0, 10)}
                                        BldGrp={ele.bloodDonationDetails.bloodgroup}
                                        PltCnt={ele.bloodDonationDetails.plateletCount}
                                        HmLvl={ele.bloodDonationDetails.haemoglobinLevel}
                                        Rbc={ele.bloodDonationDetails.rbcCount}
                                        Rp={ele.bloodDonationDetails.report}
                                    />
                                    </Col>)
                            })
                            }
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="RBC" title="RBC">
                    <Container className='my-1'>
                        <Row>
                        {
                                stockRbc.map((ele, index)=>{
                                    return (
                                    <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                    <StockBLd
                                        ExpDate={ele.expiryDate.slice(0, 10)}
                                        BldGrp={ele.bloodDonationDetails.bloodgroup}
                                        PltCnt={ele.bloodDonationDetails.plateletCount}
                                        HmLvl={ele.bloodDonationDetails.haemoglobinLevel}
                                        Rbc={ele.bloodDonationDetails.rbcCount}
                                        Rp={ele.bloodDonationDetails.report}
                                    />
                                    </Col>)
                            })
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="PLASMA" title="PLASMA">
                    <Container className='my-1'>
                        <Row>
                        {
                                stockPlasma.map((ele, index)=>{
                                    return (
                                    <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                    <StockBLd
                                        ExpDate={ele.expiryDate.slice(0, 10)}
                                        BldGrp={ele.bloodDonationDetails.bloodgroup}
                                        PltCnt={ele.bloodDonationDetails.plateletCount}
                                        HmLvl={ele.bloodDonationDetails.haemoglobinLevel}
                                        Rbc={ele.bloodDonationDetails.rbcCount}
                                        Rp={ele.bloodDonationDetails.report}
                                    />
                                    </Col>)
                            })
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="PLATELETS" title="PLATELETS">
                    <Container className='my-1'>
                        <Row>
                        {
                                stockPlatelets.map((ele, index)=>{
                                    return (
                                    <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                    <StockBLd
                                        ExpDate={ele.expiryDate.slice(0, 10)}
                                        BldGrp={ele.bloodDonationDetails.bloodgroup}
                                        PltCnt={ele.bloodDonationDetails.plateletCount}
                                        HmLvl={ele.bloodDonationDetails.haemoglobinLevel}
                                        Rbc={ele.bloodDonationDetails.rbcCount}
                                        Rp={ele.bloodDonationDetails.report}
                                    />
                                    </Col>)
                            })
                            }
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </Fragment>
    );

}
