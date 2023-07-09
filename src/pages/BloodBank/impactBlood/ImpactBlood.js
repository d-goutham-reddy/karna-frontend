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
import axios from 'axios';
import { envs } from '../../../utils/endpoint';


const baseURL = envs.endpoint;

// import Button from 'react-bootstrap/Button';

const ImpactBlood = () => {


    const [rank, setRank] = useState();
    const [wordsSaved, setWordsSaved] = useState([{}]);
    const [feedBack, setFeedBack] = useState([{}]);
    

    useEffect(()=>{
        async function callUpcoming() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/leadership/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                           setRank(response.data)
                            // setUpComingDon(response.data)
                     
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
    
            }
            
    }
    callUpcoming()
}
, [])

useEffect(()=>{
    async function callUpcoming() {
        try {
            await axios
                .get(`${baseURL}/bloodbank/words/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setWordsSaved(response.data)
                        // setUpComingDon(response.data)
                 
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

        }
        
}
callUpcoming()
}
, [])

useEffect(()=>{
    async function callUpcoming() {
        try {
            await axios
                .get(`${baseURL}/bloodbank/feedbacks/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setFeedBack(response.data)
                        // setUpComingDon(response.data)
                 
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

        }
        
}
callUpcoming()
}
, [])


console.log(wordsSaved)
console.log(feedBack)

    return (
        <Fragment>
            <Container className='my-3 mw-100 px-5'>
                <h3 
                className='my-4 border-bottom'
                style={{ color: '#FE472D'}}
                >IMPACT YOU HAVE CREATED SO FAR</h3>
                <Row>
                    <Col xs={12} md={6} lg={4}>

                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title
                                style={{ color: '#FE472D', fontSize:'25px'}}
                                >LIVES SAVED METER</Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title>{localStorage.getItem('bloodbankLivesSavelivessavedmeter')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title style={{ color: '#FE472D', fontSize:'25px'}}>BADGE</Card.Title>
                                <Card.Img src={badge} style={{
                                    width: '150px',
                                    height: '100px',
                                }} />

                                <Card.Title 
                                style={{ color: '#FE472D', fontSize:'25px'}}
                                >{localStorage.getItem('bloodbankBadge')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} >
                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title
                                style={{ color: '#FE472D'}}
                                >{'LEADERSHIP BOARD'}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{`Rank ${rank}`}</Card.Title>
                                <Card.Title>{`Points ${localStorage.getItem('bloodbankPoints')}`}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3 
                className='my-5 border-bottom'
                style={{ color: '#FE472D'}}
                >WORDS FROM LIVES YOU SAVED :</h3>

                <div className='row gy-5 gx-5'>
                    {
                        wordsSaved.map((ele, index)=>{
                            return (
                                <div  className='col-12 col-md-4' key={index}>
                                     <TestMonial
                                    ima={women}
                                    feed={ele.heartwarmingmsg}
                                    name=''/>
                                </div>
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

                    </Col> */}
                    {/* <Col xs={12} className='mx-2 my-1'>
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
                </div>
                <h3 className='my-5 border-bottom '>FEEDBACK ABOUT YOUR SERVICE :</h3>


                <div className='row row gy-5 gx-5 mb-5'>
                {
                        feedBack.map((ele, index)=>{
                            return (
                                <div className='col-12 col-md-4' key={index}>
                                     <TestMonial
                                    ima={women}
                                    feed={ele.feedback}
                                    name=''/>
                                </div>
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
                </div>

            </Container>



        </Fragment>
    )

}

export default ImpactBlood;
