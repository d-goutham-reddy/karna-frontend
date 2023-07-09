import React, { useEffect, useState } from 'react';
import classes from "./OutImpact.module.css";

import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TestMonial from './TestMonial';
// import women from "../../../assests/woman.png";
import women from '../../../assests/woman.png';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';
import './OurImpact.scss';



const baseURL = envs.endpoint;

const OurImpact = () => {


    const [lifeSaved, setLifeSaved] = useState();
    const [organ, setOrgan] = useState();
    const [bloodPacket, setBloodPacket] = useState();
    const [test, setTest] = useState([]);

    // api call functions
    async function getLiveSaved() {
        try {
            await axios
                .get(`${baseURL}/home/livessavedmeter`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setLifeSaved(response?.data)
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    async function getOrganDonated() {
        try {
            await axios
                .get(`${baseURL}/home/organsdonated`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setOrgan(response?.data)
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);

        }
    }

    async function getBloodPackets() {
        try {
            await axios
                .get(`${baseURL}/home/bloodpacketsdonated`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setBloodPacket(response?.data)
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        getLiveSaved();
        getBloodPackets();
        getOrganDonated()
    }, [])

    useEffect(()=>{

        async function getTestimonials() {
            try {
                await axios
                    .get(`${baseURL}/home/experiences`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setTest(response?.data)
                        }
                        else {
                            console.log("response")
                        }
                    })
            }
            catch (e) {
                console.log(e);
               
            }
        }
        getTestimonials();
    }, [])

    console.log(test)

    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <h3>WHAT WE HAVE DONE SO FAR ?</h3>
                <div className='row w-100 px-5 gx-5 gy-5'>
                    <div className='col-12 col-lg-4 '>
                        <Card >
                            <Card.Body
                             className='our-impact-card'
                             >
                                <Card.Title className=''>
                                    <h3 className='w-100 m-0 text-center text-dark'>LIVES SAVED</h3>
                                </Card.Title>
                                <Card.Text>
                                    <h3 className='w-100 m-0 text-center'>{lifeSaved}</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-12 col-lg-4 '>
                        <Card >
                            <Card.Body  className='our-impact-card'>
                                <Card.Title >
                                  <h3 className='w-100 m-0 text-center text-dark'>ORGANS DONATED</h3> 
                                    </Card.Title>
                                <Card.Text>
                                  <h3 className='w-100 m-0 text-center'>{organ}</h3>  
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-12 col-lg-4  '>
                        <Card >
                            <Card.Body  className='our-impact-card'>
                                <Card.Title >
                                  <h3 className='w-100 m-0 text-center text-dark'>BLOOD PACKETS DONATED</h3>  
                                    </Card.Title>
                                <Card.Text>
                                 <h3 className='w-100 m-0 text-center'>{bloodPacket}</h3>   
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={classes['dis-det']}>
                <h3>EXPERIENCES </h3>
                <div className='row my-2 w-100 gx-5 gy-5 h-100'>

                {
                    test.map((ele, index)=>{
                       
                       return <TestMonial
                        key={index}
                        ima={women}
                        feed={ele.feedback}
                        name="NAME" />
                    })
                }
                {/* <TestMonial
                    ima={women}
                    feed="This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" /> */}
     
                {/* <TestMonial
                    ima={women}
                    feed="“This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" />

                <TestMonial
                    ima={women}
                    feed="“This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" /> */}
            </div>
            </div>
        </Fragment>
    )
}

export default OurImpact;
