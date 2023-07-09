import { React, Fragment, useState } from 'react'
import classes from "./LoginScreen.module.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {toast} from "react-toastify";
import {envs} from '../../../utils/endpoint';
const baseURL = envs.endpoint;



const BloodBankLogin = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    const handleRegis = ()=>{
        navigate('/bloodBank/register')
    };

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
                    .post(`${baseURL}/bloodbank/login`,form)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('blood_bank_id', response?.data._id)
                            localStorage.setItem('blood_bank_name',response?.data?.name)
                            localStorage.setItem('blood_bank_is_logged',true);
                            localStorage.setItem('bloodbankLivesSavelivessavedmeter', response.data.livessavedmeter)
                            localStorage.setItem('bloodbankBadge', response.data.badge)
                            localStorage.setItem('bloodbankPoints', response.data.points)
                            if(response?.data?.verificationStatus === 'Verified'){
                                toast.success("Logging in  :)", {
                                    toastId: 'blood bank success'
                                })
                                setTimeout(navigate('/bloodBank/impact'), 2000);
      
                            }
                            else{
                                toast.error("Logging in  :)", {
                                    toastId: 'bloodbank pending error'
                                })
                            }
              
                        }
                        else {
                            console.log("response")
                            toast.error(response, {
                                toastId: 'blood bank error'
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
                        <div
                         className={`my-3 ${classes['form-heading']}`}
                         
                        onClick={()=>{
                            navigate('/')
                        }}
                        >
                           <span
                           className='m-0 p-0' 
                           style={{cursor:'pointer'}}>KARNA</span> 
                        </div>

                        <form className={`d-flex flex-column ${classes['form-sty']}`}>
                            <p className={`mt-4 ${classes['login-type']}`}>BLOOD BANK LOGIN</p>
                            <label className='mt-2'
                            htmlFor='getEmail'>Email</label>
                            <input
                                className='my-1'
                                type='email'
                                id='getEmail'
                                onChange = {(e)=>setEmail(e.target.value)}
                            />
                            <label className='mt-4' 
                            htmlFor='getPsw'>Password</label>
                            <input
                                className='my-1'
                                type='password'
                                id="getPsw"
                                onChange = {(e)=>setPsw(e.target.value)}
                            />
                            <button className='my-5' onClick={handleLogin}>Log IN</button>
                            
                        <h5 className="my-1" onClick={handleRegis}>NEW USER? CLICK HERE TO REGISTER</h5>

                        </form>
                    </div>
                </div>
                <div className={`col-sm d-none d-lg-block ${classes['right-container']}`}>
                </div>
            </div>

        </Fragment>
    )
}


export default BloodBankLogin;
