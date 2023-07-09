
import {Fragment, useState} from 'react'
import classes from "./BloodBankRegister.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = envs.endpoint;

export const HospitalRegister = ()=> {

    const [formChange, setFormChange] = useState({
        "name": "",
        "email": "",
        "password": "",
        "address": "",
        "phone": 0,
        "hospitalregnum": ""
    })
    const navigate = useNavigate();

    const handleonChange = (e)=>{
        e.preventDefault();
        if(e.target.name === 'phone'){
            setFormChange(
                {...formChange,
                [e.target.name]: Number(e.target.value),
                }
            )
        }
        else{
            setFormChange(
                {...formChange,
                [e.target.name]:e.target.value,}
            )
        }
        
    }

    console.log(formChange);

    const handleRegister = ()=>{
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/hospital/signup`,formChange)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('hospital_id', response?.data._id)
                            localStorage.setItem('hospital_name',response?.name)
                            localStorage.setItem('hospital_is_logged',true);
                            toast.success("Successfully registered :)", {
                                toastId: 'hospital success'
                            })
                            setTimeout(navigate('/hospital/login'), 8000);
                        }
                        else {
                            console.log("response")
                            toast.error(response, {
                                toastId: 'hospital error'
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

  return (
    <Fragment>
         <div className={classes['dis-det']}>
            <h3 onClick={()=>{
                navigate('/home')
            }}
            style={{
                color:'#fe452d92',
                fontWeight:'1000',
                fontSize:'35px',
                cursor:'pointer',
            }}
            >HOSPITAL DETAILS</h3>
            <Form className='w-lg-75 w-sm-100 rounded p-3 w-75'>

                <Form.Group className="mb-3 addShow " controlId="name">
                    <Form.Label
                         style={{
                            color:'#fe452d92',
                            fontWeight:'1000',
                        }}
                    >Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter you name" name='name' onChange={handleonChange}/>
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="phone">
                    <Form.Label
                         style={{
                            color:'#fe452d92',
                            fontWeight:'1000',
                        }}
                    >PHONE No.</Form.Label>
                    <Form.Control type="number" placeholder="PH NO." name='phone' onChange={handleonChange}/>
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="email">
                    <Form.Label
                         style={{
                            color:'#fe452d92',
                            fontWeight:'1000',
                        }}
                    >EMAIL ID</Form.Label>
                    <Form.Control type="email" placeholder="Email" name='email' onChange={handleonChange}/>
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="password">
                    <Form.Label
                         style={{
                            color:'#fe452d92',
                            fontWeight:'1000',
                        }}
                    >password</Form.Label>
                    <Form.Control type="password" placeholder="password" name='password' onChange={handleonChange}/>
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="address">
                    <Form.Label
                         style={{
                            color:'#fe452d92',
                            fontWeight:'1000',
                        }}
                    >address</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="address" rows={3} name='address' onChange={handleonChange}/>
                </Form.Group>


                <Form.Group className="mb-3 addShow" controlId="hospitalregnum">
                    <Form.Label
                    
                    style={{
                        color:'#fe452d92',
                        fontWeight:'1000',
                    }}
                    >HOSPITAL REG No :</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="HOSPITAL REG No :" rows={2} name='hospitalregnum' onChange={handleonChange}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleRegister}>
                    SingUp
                </Button>

            </Form>
            </div>
    </Fragment>
  )

}
