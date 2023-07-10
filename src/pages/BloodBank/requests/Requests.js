import React, { Fragment, useState, useEffect } from 'react';
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
import { useNavigate } from "react-router-dom";
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import RequestCard from './RequestCard';
import ExceptWaiting from './ExceptWaiting';



const baseURL = envs.endpoint;
const wa = {
    "_id": "648069ec71df1df290502ffe",
    "bloodgroup": "A-",
    "status": "Waiting",
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
    "hospitalDetails": {
        "_id": "6478f4cb7e56ffe321a6044f",
        "verificationStatus": "Verified",
        "name": "Apollo",
        "email": "hospital@gmail.com",
        "password": "$2b$10$AMDaPGYxbv5qv7WZnOGFyuvtp9puS.wzAcGishB3n9RnGFpWr7FsG",
        "address": "bglore banashankari",
        "phone": 9999900000,
        "hospitalregnum": "554567123478384294",
        "role": "Hospital",
        "createdAt": "2023-06-01T19:43:07.824Z",
        "updatedAt": "2023-06-01T19:43:24.317Z",
        "__v": 0
    },
    "createdAt": "2023-06-07T11:28:44.839Z",
    "updatedAt": "2023-06-07T11:28:44.839Z",
    "__v": 0
}

const del =
{
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
        "bloodbankDetails": "6475aa9a147a82fa6164cf61",
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
        "hospitalDetails": {
            "_id": "6478f4cb7e56ffe321a6044f",
            "verificationStatus": "Verified",
            "name": "Apollo",
            "email": "hospital@gmail.com",
            "password": "$2b$10$AMDaPGYxbv5qv7WZnOGFyuvtp9puS.wzAcGishB3n9RnGFpWr7FsG",
            "address": "bglore banashankari",
            "phone": 9999900000,
            "hospitalregnum": "554567123478384294",
            "role": "Hospital",
            "createdAt": "2023-06-01T19:43:07.824Z",
            "updatedAt": "2023-06-01T19:43:24.317Z",
            "__v": 0
        },
        "createdAt": "2023-06-07T12:44:32.043Z",
        "updatedAt": "2023-06-07T13:18:04.374Z",
        "__v": 0
    }
}
const con = {
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
        "bloodbankDetails": "6475aa9a147a82fa6164cf61",
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
        "hospitalDetails": {
            "_id": "6478f4cb7e56ffe321a6044f",
            "verificationStatus": "Verified",
            "name": "Apollo",
            "email": "hospital@gmail.com",
            "password": "$2b$10$AMDaPGYxbv5qv7WZnOGFyuvtp9puS.wzAcGishB3n9RnGFpWr7FsG",
            "address": "bglore banashankari",
            "phone": 9999900000,
            "hospitalregnum": "554567123478384294",
            "role": "Hospital",
            "createdAt": "2023-06-01T19:43:07.824Z",
            "updatedAt": "2023-06-01T19:43:24.317Z",
            "__v": 0
        },
        "createdAt": "2023-06-07T12:44:16.127Z",
        "updatedAt": "2023-06-07T12:59:38.874Z",
        "__v": 0
    }
}
export const Requests = () => {

    const [waiting, setWaiting] = useState([wa]);
    const [confirmed, setConfirmed] = useState([con]);
    const [delivered, setDelivered] = useState([del]);


    //confirmed
    useEffect(() => {
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/requests/confirmed/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setConfirmed(response.data)
                        }
                        else {
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


    //delivered
    useEffect(() => {
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/requests/delivered/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setDelivered(response.data)
                        }
                        else {
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


    //waiting
    useEffect(() => {
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/requests/waiting`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setWaiting(response.data)
                        }
                        else {
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


    //confirmed
    useEffect(() => {
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/requests/confirmed/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setConfirmed(response.data)
                        }
                        else {
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

    console.log(delivered)
    return (
        <Fragment>
            <h5 className="my-4 mx-5 px-5" >HOSPITAL REQUESTS :</h5>

            <Tabs
                defaultActiveKey="WAITING"
                id="fill-tab-example"
                className="my-5 taboo"
                justify

            >
                <Tab eventKey="WAITING" title="WAITING">
                    {/* <Sonnet /> */}
                    <Container className='my-1'>
                        <Row>
                            {
                                waiting.map((ele, index) => {
                                    return (
                                        <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                            <RequestCard
                                                hname={ele.hospitalDetails.name}
                                                hloc={ele.hospitalDetails.address}
                                                hnum={ele.hospitalDetails.phone}
                                                hreq={ele.component}
                                                hbgrp={ele.bloodgroup}
                                                htrans={ele.purpose}
                                                type={true}
                                                id={ele._id}
                                            />

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="CONFIRMED" title="CONFIRMED">
                    <Container className='my-1'>
                        <Row>
                            {
                                confirmed.map((ele, index) => {
                                    return (
                                        <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                            <ExceptWaiting
                                                hname={ele.bloodRequestDetails.hospitalDetails.name}
                                                hloc={ele.bloodRequestDetails.hospitalDetails.address}
                                                hnum={ele.bloodRequestDetails.hospitalDetails.phone}
                                                hpur={ele.bloodRequestDetails.purpose}
                                                hcomp={ele.bloodRequestDetails.component}
                                                hbgrp={ele.bloodDonationDetails.bloodgroup}
                                                hexp={ele.expiryDate}
                                                hplat={ele.bloodDonationDetails.plateletCount}
                                                hhae={ele.bloodDonationDetails.haemoglobinLevel}
                                                hrbc={ele.bloodDonationDetails.rbcCount}
                                                rp={ele.bloodDonationDetails.report}
                                            />
                                        </Col>
                                    )
                                })
                            }


                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="DELIVERED" title="DELIVERED">
                    <Container className='my-1'>
                        <Row>
                            {
                                delivered.map((ele, index) => {
                                    return (
                                        <Col lg={4} md={6} xs={12} className='my-4'>
                                            <ExceptWaiting
                                                hname={ele.bloodRequestDetails.hospitalDetails.name}
                                                hloc={ele.bloodRequestDetails.hospitalDetails.address}
                                                hnum={ele.bloodRequestDetails.hospitalDetails.phone}
                                                hpur={ele.bloodRequestDetails.purpose}
                                                hcomp={ele.bloodRequestDetails.component}
                                                hbgrp={ele.bloodDonationDetails.bloodgroup}
                                                hexp={ele.expiryDate}
                                                hplat={ele.bloodDonationDetails.plateletCount}
                                                hhae={ele.bloodDonationDetails.haemoglobinLevel}
                                                hrbc={ele.bloodDonationDetails.rbcCount}
                                                rp={ele.bloodDonationDetails.report}
                                            />
                                        </Col>
                                    )
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
