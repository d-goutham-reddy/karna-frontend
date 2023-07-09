import React, { Fragment, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import badge from "../../../assests/hh.jpg"
import TestMonial from "./TestMonial";
import women from "../../../assests/woman.png"
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';
import './Impact.scss';
// import Button from 'react-bootstrap/Button';



const baseURL = envs.endpoint;

const Impact = () => {

    const [donor_rank, setDonor_Rank] = useState();
    const [msgs, setMsgs] = useState([{
        "_id": "",
        "heartwarmingmsg": ""
    }]);
    const [feedBack, setFeedBack] = useState();



    const handleFeedBack = (e) => {

        e.preventDefault();
        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/donor/feedback/${localStorage.getItem('donor_id')}`, {
                        'feedback': feedBack,
                    })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success("Feed Back Submitted Successfully :)", {
                                toastId: 'donor success'
                            })
                            // setTimeout(navigate('/donor/donorHome'), 8000);
                            setTimeout(() => {
                                window.location.reload();
                              }, 2000);
                        }
                        else {
                            console.log("response")
                            toast.error(response, {
                                toastId: 'donor error'
                            })
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
                toast.error(e.response.data, {
                    toastId: 'blood bank login'
                })
            }
        }
        callApi();
    }


    useEffect(() => {
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/donor/leadership/${localStorage.getItem('donor_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            console.log(response.data)
                            setDonor_Rank(response.data);
                            // setDonor_Rank(response.data.)
                            // setTimeout(navigate('/donor/donorHome'), 8000);
                        }
                        else {
                            console.log("response")

                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
                toast.error(e.response.data, {
                    toastId: 'blood bank login'
                })
            }
        }

        async function words() {
            try {
                await axios
                    .get(`${baseURL}/donor/words/${localStorage.getItem('donor_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            console.log(response.data)
                            setMsgs(response.data);
                            // setDonor_Rank(response.data.)
                            // setTimeout(navigate('/donor/donorHome'), 8000);
                        }
                        else {
                            console.log("response")

                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
                toast.error(e.response.data, {
                    toastId: 'blood bank login'
                })
            }
        }

        callApi();
        words();

    }, [])

    return (
        <Fragment>
            <Container className='mw-100 px-5' style={{marginTop:'100px'}}>
                <Row>

                    <Col xs={12} md={6} lg={4}>

                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='our-impact-card d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title
                                style={{ color: '#FE472D', fontSize:'25px'}}
                                >LIVES SAVED METER</Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title>{localStorage.getItem('donor_livessavedmeter')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '100%' }} className='text-center'>
                            <Card.Body className='our-impact-card d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title
                                style={{ color: '#FE472D', fontSize:'25px'}}
                                >BADGE</Card.Title>
                                <Card.Img src={badge} style={{
                                    width: '150px',
                                    height: '100px',
                                }} />

                                <Card.Title>{localStorage.getItem('donor_badge')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} >
                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title
                                style={{ color: '#FE472D', fontSize:'25px'}}
                                >{'LEADERSHIP BOARD'}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{`Points - ${localStorage.getItem('donor_points')}`}</Card.Title>
                                <Card.Title>{`Rank - ${donor_rank}`}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                    <h3 className='my-5 border-bottom '
                    style={{ color: '#FE472D', fontSize:'30px'}}
                    >WORDS FROM LIVES YOU SAVED</h3>
                <Row className='gx-5 gy-5'>
                    {
                        msgs.map((ele, index) => {
                            return (
                                <Col key={index} xs={12} md={6} lg={4} className=''>
                                    <TestMonial
                                        ima={women}
                                        feed={ele.heartwarmingmsg}
                                        // name={ele._id}
                                    />
                                </Col>
                            )
                        })
                    }

                    {/* <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME"
                        />

                    </Col>
                    <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col>
                    <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col> */}
                </Row>

            </Container>

            <div className='mx-5'>
                <h2 className='my-5 border-bottom '
                style={{ color: '#FE472D', fontSize:'30px'}}
                >VOLUNTEERING IMPORTANCE :</h2>
                <p>
                    Sign yourself to be a volunteer.<br />
                    Donate blood when it is most needed.<br />
                    Save Lives by being available when a patient needs your blood the most.<br />

                    Go To Your Details and Update By Clicking On The CheckBox To Become A Volunteer Right Now.
                </p>
            </div>

            <Form.Group className="mb-3 mx-5 border border-dark p-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label
                style={{ color: '#FE472D', fontSize:'18px'}}
                >FEEDBACK ABOUT YOUR EXPERIENCE IN THE WEBSITE AND IT’S IMPACT ON DONATION MINDSET</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    className='my-3'
                    onChange={(e) => setFeedBack(e.target.value)} />
                <Button variant="warning" onClick={handleFeedBack}>SUBMIT</Button>
            </Form.Group>
        </Fragment>
    )

}

export default Impact;
