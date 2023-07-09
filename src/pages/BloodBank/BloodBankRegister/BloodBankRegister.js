
import { ReactComponentElement, Fragment, useState, useEffect } from 'react'
import classes from "./BloodBankRegister.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { envs } from '../../../utils/endpoint';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import bcrypt from 'bcryptjs'

const baseURL = envs.endpoint;


export const BloodBankRegister = () => {


    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [bldbnk, setbldbnk] = useState('');
    const [ph, setPh] = useState(0);
    const [em, setEm] = useState('');
    const [psw, setPsw] = useState('');
    const [addr, setAddr] = useState('');
    const salt = bcrypt.genSaltSync(10)


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            "name": name,
            "email": em,
            // "password": bcrypt.hashSync(psw, salt),
            "password":psw,
            "address": addr,
            "phone": Number(ph),
            "bloodbankregnum": bldbnk,
        }
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/bloodbank/signup`, form)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('id', response.data._id)
                            toast.success("Succesfully Registered :)", {
                                toastId: 'blood bank register'
                            })
                            setTimeout(navigate('/bloodBank/login'), 8000);
                        }
                        else {
                            toast.error("Something went wrong :(", {
                                toastId: 'blood bank register'
                            })
                            throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                toast.error(""+e?.response, {
                    toastId: 'blood bank register'
                })
            }
        }
        callApi();
    }
    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <h3
                    style={{
                        color:'#fe452d92',
                        fontWeight:'1000',
                        fontSize:'35px'
                    }}
                ><span onClick={()=>{
                    navigate('/')
                }}
                style={{cursor:'pointer'}}
                >BLOOD BANK REGISTRATION</span></h3>
                <ToastContainer/>
                <Form className='w-lg-75 w-sm-100 rounded p-3 w-75'>
                    <Form.Group className="mb-3 addShow" controlId="formBasicEmail">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter you name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >Blood Bank register No.</Form.Label>
                        <Form.Control type="text" placeholder="register No" onChange={(e) => setbldbnk(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >PHONE No.</Form.Label>
                        <Form.Control type="number" placeholder="PH NO." onChange={(e) => setPh(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >EMAIL ID</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >password</Form.Label>
                        <Form.Control type="password" placeholder="password" onChange={(e) => setPsw(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label
                             style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                        >address</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="address" rows={3} onChange={(e) => setAddr(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        SingUp
                    </Button>

                </Form>
            </div>
        </Fragment>
    )

}
