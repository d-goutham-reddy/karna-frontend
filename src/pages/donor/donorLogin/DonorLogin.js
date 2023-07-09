import { React, Fragment, useState } from 'react';
import classes from "./LoginScreen.module.css";
import {toast} from "react-toastify";
import {envs} from "../../../utils/endpoint";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL = envs.endpoint;

const DonorLogin = (props) => {

    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const navigate = useNavigate();



    const handleRegis = ()=>{
        navigate('/donor/register')   
    }


    const handleLogin = (e)=>{

        e.preventDefault();
        
        const form= {
            'email':email,
            'password':psw
        }
        console.log(form)
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/donor/login`,form)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('donor_id', response.data._id)
                            localStorage.setItem('donor_name',response.data.fname)
                            localStorage.setItem('donor_lastdonationdate', response.data.lastdonationdate)
                            localStorage.setItem('donor_permanentbanreason', response.data.permanentbanreason)
                            localStorage.setItem('donor_livessavedmeter', response.data.livessavedmeter);
                            localStorage.setItem('donor_badge', response.data.badge);
                            localStorage.setItem('donor_points', response.data.points);
                            localStorage.setItem('donor_is_logged',true);
                            toast.success("Logging in  :)", {
                                toastId: 'donor success'
                            })
                            setTimeout(navigate('/donor/donorHome'), 8000);
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


    return (
        <Fragment>
            <div className={`row ${classes['outer-container']}`}>
                <div className={`col-lg ${classes['left-container']}`}>
                    <div className={` ${classes['form-cont']}`}>
                        <div className={`my-3 ${classes['form-heading']}`}>
                        <span onClick={()=>{
                            navigate('/')
                        }}
                        style={{cursor:'pointer'}}
                        >KARNA</span>
                        </div>

                        <form className={`d-flex flex-column ${classes['form-sty']}`}>
                            <p className={`mt-4 ${classes['login-type']}`}>DONOR LOGIN</p>
                            <label className='mt-2'
                            htmlFor='getEmail'>Email</label>
                            <input
                                className='my-1'
                                type='email'
                                id='getEmail'
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <label className='mt-4' 
                            htmlFor='getPsw'>Password</label>
                            <input
                                className='my-1'
                                type='password'
                                id="getPsw"
                                onChange={(e)=> setPsw(e.target.value)}
                            />
                            <button className='mt-5' onClick={handleLogin}>Log IN</button>

                            <h5 className="mt-5" style={{cursor:"pointer"}} onClick={handleRegis}>NEW USER? CLICK HERE TO REGISTER</h5>
                        </form>
                    </div>
                </div>
                <div className={`col-sm d-none d-lg-block ${classes['right-container']}`}>

                </div>
            </div>

        </Fragment>
    )
}


export default DonorLogin;
