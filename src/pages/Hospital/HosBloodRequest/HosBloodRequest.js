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
import BloodRequestCard from '../../../components/BloodRequestCard/BloodRequestCard';
import BloodRequestDel from '../../../components/BloodRequestDel/BloodRequestDel';
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import { toast } from 'react-toastify';
import Waiting from '../../../components/Hospitals/waiting/Waiting';
import Cancelled from '../../../components/Hospitals/Cancelled/Cancelled';
import Delivered from '../../../components/Hospitals/Delivered/Delivered';
import Confirmed from '../../../components/Hospitals/Confirmed/Confirmed';
import "./HosBloodRequest.scss";




const baseURL = envs.endpoint;

const initailState = {}

const initialStateDelivered = {

        "_id": "648078c171df1df2905030df",
        "separationType": "rbc",
        "expiryDate": "2023-07-12T12:32:01.136Z",
        "availablestatus": false,
        "bloodDonationDetails": {
            "_id": "647996a50c740919ca6772e9",
            "bloodgroup": "A+",
            "location": "BB Collectors",
            "appdate": "2023-06-05T00:00:00.000Z",
            "time": "12:10",
            "status": "Completed",
            "arriveStatus": true,
            "donorDetails": "6479968c0c740919ca6772e5",
            "bloodbankDetails": {
                "_id": "6475aa9a147a82fa6164cf61",
                "verificationStatus": "Verified",
                "name": "BB Blood Collectors",
                "email": "bloodbank@gmail.com",
                "password": "$2b$10$wFhKdOilyyAMidh1dlfV6.nTj8I7RewG6sX4wVv2fX.3yps/5DlRm",
                "address": "Kankapura, Bengaluru",
                "phone": 9988776655,
                "bloodbankregnum": "5545671234675412",
                "role": "Blood Bank",
                "livessavedmeter": 1,
                "points": 2300,
                "badge": "Champion",
                "createdAt": "2023-05-30T07:49:46.276Z",
                "updatedAt": "2023-06-08T14:33:46.715Z",
                "__v": 0
            },
            "createdAt": "2023-06-02T07:13:41.212Z",
            "updatedAt": "2023-06-07T19:34:25.218Z",
            "__v": 0,
            "feedback": "good experience overall",
            "haemoglobinLevel": "80",
            "plateletCount": "100",
            "rbcCount": "230",
            "report": "blood is ansolutely healthy",
            "heartwarmingmsg": "Thanks a lot to both donor and blood bank for saving my life"
        },
        "createdAt": "2023-06-07T12:32:01.137Z",
        "updatedAt": "2023-06-07T13:05:21.300Z",
        "__v": 0,
        "bloodRequestDetails": {
            "_id": "64807bb071df1df290503171",
            "bloodgroup": "A+",
            "status": "Delivered",
            "component": "rbc",
            "purpose": "Transfusion",
            "fname": "Suja",
            "mname": "y",
            "lname": "S",
            "email": "recipient@gmail.com",
            "address": "Andhrahalli Pakka, Bglore",
            "phone": 8998989877,
            "sex": "Male",
            "DOB": "2001-07-01T12:39:45.734Z",
            "age": 21,
            "hospitalDetails": "6478f4cb7e56ffe321a6044f",
            "createdAt": "2023-06-07T12:44:32.043Z",
            "updatedAt": "2023-06-07T13:18:04.374Z",
            "__v": 0
        }
    
}

const initalConfirmed = {
    "_id": "648078c171df1df2905030e3",
    "separationType": "plasma",
    "expiryDate": "2024-06-06T12:32:01.200Z",
    "availablestatus": false,
    "bloodDonationDetails": {
        "_id": "647996a50c740919ca6772e9",
        "bloodgroup": "A+",
        "location": "BB Collectors",
        "appdate": "2023-06-05T00:00:00.000Z",
        "time": "12:10",
        "status": "Completed",
        "arriveStatus": true,
        "donorDetails": "6479968c0c740919ca6772e5",
        "bloodbankDetails": {
            "_id": "6475aa9a147a82fa6164cf61",
            "verificationStatus": "Verified",
            "name": "BB Blood Collectors",
            "email": "bloodbank@gmail.com",
            "password": "$2b$10$wFhKdOilyyAMidh1dlfV6.nTj8I7RewG6sX4wVv2fX.3yps/5DlRm",
            "address": "Kankapura, Bengaluru",
            "phone": 9988776655,
            "bloodbankregnum": "5545671234675412",
            "role": "Blood Bank",
            "livessavedmeter": 1,
            "points": 2300,
            "badge": "Champion",
            "createdAt": "2023-05-30T07:49:46.276Z",
            "updatedAt": "2023-06-08T14:33:46.715Z",
            "__v": 0
        },
        "createdAt": "2023-06-02T07:13:41.212Z",
        "updatedAt": "2023-06-07T19:34:25.218Z",
        "__v": 0,
        "feedback": "good experience overall",
        "haemoglobinLevel": "80",
        "plateletCount": "100",
        "rbcCount": "230",
        "report": "blood is ansolutely healthy",
        "heartwarmingmsg": "Thanks a lot to both donor and blood bank for saving my life"
    },
    "createdAt": "2023-06-07T12:32:01.200Z",
    "updatedAt": "2023-06-07T12:59:38.911Z",
    "__v": 0,
    "bloodRequestDetails": {
        "_id": "64807ba071df1df290503167",
        "bloodgroup": "A+",
        "status": "Confirmed",
        "component": "plasma",
        "purpose": "Transfusion",
        "fname": "Suja",
        "mname": "y",
        "lname": "S",
        "email": "recipient@gmail.com",
        "address": "Andhrahalli Pakka, Bglore",
        "phone": 8998989877,
        "sex": "Male",
        "DOB": "2001-07-01T12:39:45.734Z",
        "age": 21,
        "hospitalDetails": "6478f4cb7e56ffe321a6044f",
        "createdAt": "2023-06-07T12:44:16.127Z",
        "updatedAt": "2023-06-07T12:59:38.874Z",
        "__v": 0
    }
}

const HosBloodRequest = () => {

    const [waiting, setWaiting] = useState([initailState]);
    const [cancelled, setCancelled] = useState([initailState]);
    const [confirmed, setConfirmed] = useState([initalConfirmed]);
    const [delivered, setDelivered] = useState([initialStateDelivered]);

    

    // waiting
    useEffect(()=>{
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/hospital/requests/waiting/${localStorage.getItem('hospital_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            
                            setWaiting(response.data)
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
    },[])

     // confirmed
     useEffect(()=>{
        async function callApi() {
            try {
                await axios
                .get(`${baseURL}/hospital/requests/confirmed/${localStorage.getItem('hospital_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {

                            setConfirmed(response.data)

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
    },[])

     // delivered
     useEffect(()=>{
        async function callApi() {
            try {
                await axios
                .get(`${baseURL}/hospital/requests/delivered/${localStorage.getItem('hospital_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {

                            setDelivered(response.data)

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
    },[])

         // cancelled
         useEffect(()=>{
            async function callApi() {
                try {
                    await axios
                    .get(`${baseURL}/hospital/requests/cancelled/${localStorage.getItem('hospital_id')}`)
                        .then((response) => {
                            console.log(response.status)
                            if (response.status === 200) {
                    
                                setCancelled(response.data)
    
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
        },[])


    return (
        <Fragment>
            <Tabs
                defaultActiveKey="WAITING"
                className="my-4 hosp-tabs"
                
                justify
            >
                <Tab 
                eventKey="WAITING" 
                title="WAITING"
                className='hosp-innertab'
                >
                    {/* <Sonnet /> */}
                    <Container className='my-1'>
                        <Row>
                            {
                                waiting.map((ele, index)=>{
                                    return (
                                        <Col lg={6} md={12} xs={12} className='my-4' key={index}>
                                            <Waiting
                                    Name={ele.fname}
                                    BldGrp={ele.bloodgroup}
                                    component={ele.component}
                                    purpose={ele.purpose}
                                    email={ele.email}
                                    age={ele.age}
                                    ph={ele.phone}
                                    address={ele.address}
                                    sex={ele.sex}
                                    dob={ele.DOB}
                                    id={ele._id}
                                    // cal={ele.cancelReason}
                                    />
                                    </Col> 
                                    )
                                })
                            }
                            {/* <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Name={'suraj'}
                                    BldGrp={'AB+'}
                                    component={'Plasma'}
                                    purpose={'Transfusion'}
                                    email={'sanjay@gmail.com'}
                                    age={'26'}
                                    ph={'874564454541'}
                                    address={'vijaynagar'}
                                    sex={'male'}
                                    dob={'11/02/2023'}
                                    cal={'blood report is wrong'}
                                // reasonCancel

                                />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Name={'suraj'}
                                    BldGrp={'AB+'}
                                    component={'Plasma'}
                                    purpose={'Transfusion'}
                                    email={'sanjay@gmail.com'}
                                    age={'26'}
                                    ph={'874564454541'}
                                    address={'vijaynagar'}
                                    sex={'male'}
                                    dob={'11/02/2023'}
                                    cal={'blood report is wrong'}
                                // reasonCancel
                                />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Date={"29/03/23"}
                                    Time={"9:30 AM"}
                                    Name={"Raj"}
                                    Ph={"1234567890"}
                                    Age={"24"}
                                    BldGrp={"AB+"}
                                // reasonCancel

                                />
                            </Col> */}
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="CONFIRMED" title="CONFIRMED">
                    <Container className='my-1'>
                        <Row>
                        {
                                confirmed.map((ele, index)=>{
                                    return (
                                        <Col lg={6} md={12} xs={12} className='my-4' key={index}>
                                            <Confirmed
                                            bbName = {ele.bloodDonationDetails.bloodbankDetails.name}
                                            bbLoc = {ele.bloodDonationDetails.location}
                                            bbNumber = {ele.bloodDonationDetails.bloodbankDetails.phone}
                                            comp = {ele.bloodRequestDetails.component}
                                            bloodGroup = {ele.bloodDonationDetails.bloodgroup}
                                            expiryDate = {ele.expiryDate}
                                            plateletCount = {ele.bloodDonationDetails.plateletCount}
                                            haemoglobinLvl = {ele.bloodDonationDetails.haemoglobinLevel}
                                            rbcCnt = {ele.bloodDonationDetails.rbcCount}
                                            report = {ele.bloodDonationDetails.report}
                                            trsnplatPurpose = {ele.bloodRequestDetails.purpose}
                                            PatName = {ele.bloodRequestDetails.fname}
                                            patPhone = {ele.bloodRequestDetails.phone}
                                            id={ele.bloodRequestDetails._id}
                                            
                                    />
                                    </Col> 
                                    )
                                })
                            }
                            {/* <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Name={'suraj'}
                                    BldGrp={'AB+'}
                                    component={'Plasma'}
                                    purpose={'Transfusion'}
                                    email={'sanjay@gmail.com'}
                                    age={'26'}
                                    ph={'874564454541'}
                                    address={'vijaynagar'}
                                    sex={'male'}
                                    dob={'11/02/2023'}
                                    cal={'blood report is wrong'}
                                // reasonCancel

                                />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Name={'suraj'}
                                    BldGrp={'AB+'}
                                    component={'Plasma'}
                                    purpose={'Transfusion'}
                                    email={'sanjay@gmail.com'}
                                    age={'26'}
                                    ph={'874564454541'}
                                    address={'vijaynagar'}
                                    sex={'male'}
                                    dob={'11/02/2023'}
                                    cal={'blood report is wrong'}
                                // reasonCancel
                                />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <BloodRequestCard
                                    Date={"29/03/23"}
                                    Time={"9:30 AM"}
                                    Name={"Raj"}
                                    Ph={"1234567890"}
                                    Age={"24"}
                                    BldGrp={"AB+"}
                                // reasonCancel

                                />
                            </Col> */}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="DELIVERED" title="DELIVERED">
                    <Container className='my-1'>
                        <Row>
                        {
                                delivered.map((ele, index)=>{
                                    return(
                                    <Col lg={6} md={12} xs={12} className='my-4' key={index}>
                                        <Delivered
                                            bbName = {ele.bloodDonationDetails.bloodbankDetails.name}
                                            bbLoc = {ele.bloodDonationDetails.location}
                                            bbNumber = {ele.bloodDonationDetails.bloodbankDetails.phone}
                                            comp = {ele.bloodRequestDetails.component}
                                            bloodGroup = {ele.bloodDonationDetails.bloodGroup}
                                            expiryDate = {ele.expiryDate}
                                            plateletCount = {ele.bloodDonationDetails.plateletCount}
                                            haemoglobinLvl = {ele.bloodDonationDetails.haemoglobinLevel}
                                            rbcCnt = {ele.bloodDonationDetails.rbcCount}
                                            report = {ele.bloodDonationDetails.report}
                                            trsnplatPurpose = {ele.bloodRequestDetails.purpose}
                                            PatName = {ele.bloodRequestDetails.fname}
                                            patPhone = {ele.bloodRequestDetails.phone}
                                        />
                                    </Col>)
                                })
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="CANCELLED" title="CANCELLED">
                    <Container className='my-1'>
                        <Row>
                            {
                                cancelled.map((ele, index)=>{
                                    return(
                                    <Col lg={6} md={12} xs={12} className='my-4' key={index}>
                                        <Cancelled
                                        Name = {ele.fname}
                                        BldGrp= {ele.bloodgroup}
                                        component= {ele.component}
                                        purpose= {ele.purpose}
                                        email= {ele.email}
                                        age= {ele.age}
                                        ph= {ele.phone}
                                        address= {ele.address}
                                        sex= {ele.sex}
                                        dob= {ele.DOB}
                                        cal= {ele.cancelReason}
                                        />
                                    </Col>)
                                })
                            }
                        </Row>
                    </Container>
                </Tab>
            </Tabs>

            {/* <div className='px-5 py-1 my-5 d-flex flex-column align-items-start'>
                <h4>FeedBack About Your Experience in the Website and it's Impact on Donation Mindset</h4>
                <Form.Control as="textarea" rows={3} placeholder='Enter your Feedback here' className='w-75 w'/>
            </div> */}
        </Fragment>
    )

}

export default HosBloodRequest;
