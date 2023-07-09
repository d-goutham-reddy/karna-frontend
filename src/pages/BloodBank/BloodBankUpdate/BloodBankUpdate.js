
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


export const BloodBankUpdate = () => {


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
                    .put(`${baseURL}/bloodbank/updatedetails/${localStorage.getItem('blood_bank_id')}`, form)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('id', response.data._id)
                            toast.success("Succesfully updated :)", {
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
            }
        }
        callApi();
    }
    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <h3>BLOOD BANK Details</h3>
                <ToastContainer/>
                <Form className='border  w-lg-75 w-sm-100 rounded p-3 w-75'>
                    <Form.Group className="mb-3 addShow" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter you name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label>Blood Bank register No.</Form.Label>
                        <Form.Control type="text" placeholder="register No" onChange={(e) => setbldbnk(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label>PHONE No.</Form.Label>
                        <Form.Control type="number" placeholder="PH NO." onChange={(e) => setPh(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label>EMAIL ID</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="password" onChange={(e) => setPsw(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 addShow" controlId="">
                        <Form.Label>address</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="address" rows={3} onChange={(e) => setAddr(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        UPDATE
                    </Button>

                </Form>
            </div>
        </Fragment>
    )

}
