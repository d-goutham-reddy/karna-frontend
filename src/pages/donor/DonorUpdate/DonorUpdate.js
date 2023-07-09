import { react, useState } from 'react';
import classes from "./DonorUpdate.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { envs } from "../../../utils/endpoint"


const baseURL = envs.endpoint;

const DonorUpdate = () => {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "fname": "",
        "mname": "",
        "lname": "",
        "password": "",
        "address": "",
        "phone": 0,
        "sex": "",
        "DOB": "",
        "age": 0,
        "bloodgroup": "",
        "aadharId": 0,
        "emergencycontactname": "",
        "emergencycontactphone": 0,
        'volunteer':false,
        'organRequest':false,
    });




    const handleFormData = (e) => {
        if(e.target.name === 'phone' 
        || e.target.name === 'age'
        || e.target.name === 'aadharId' 
        || e.target.name === 'emergencycontactphone'){
            console.log("Either one og them is activated !", Number(e.target.value))
            setFormData(
                {
                    ...formData,
                    [e.target.name]:Number(e.target.value),
                }
            )
        }
        else if( e.target.name === 'DOB'){

            console.log(e.target.value)
            const [year, month, day] = (e.target.value).split('-')
           
            const date = new Date(e.target.value);
            // console.log(date.toString())
            // const date = (e.target.value).append('T12:39:45.734+00:00')
            setFormData(
                {
                    ...formData,
                    [e.target.name]:date.toString(),
                }
            )

        }
        else{
            setFormData(
                {
                    ...formData,
                    [e.target.name]: e.target.value
                }
            )
        }
 
    }

    console.log(formData);


    const handleSubmit = (e) => {
        e.preventDefault();

        // const form = {
        //     "fname": "Goutham",
        //     "mname": "Reddy",
        //     "lname": "D",
        //     "email": "dfdfdfdfdfdfdfdf@gmail.com",
        //     "password": "123456",
        //     "address": "bglore Kr puram",
        //     "phone": 8998989899,
        //     "sex": "Male",
        //     "DOB": "2001-08-07T12:39:45.734+00:00",
        //     "age": 22,
        //     "bloodgroup": "A+",
        //     "aadharId": 551675114222,
        //     "emergencycontactname": "Mothers name",
        //     "emergencycontactphone": 5656565698,
        // }

        async function callApi() {
            try {
                await axios
                    .put(`${baseURL}/donor/updatedetails/${localStorage.getItem('donor_id')}`, formData)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('id', response.data._id)
                            toast.success("Succesfully Registered :)", {
                                toastId: 'donor register'
                            })
                            // setTimeout(navigate('/donor/donorHome'), 8000);
                        }
                        else {
                            toast.error("Something went wrong :(", {
                                toastId: 'donor register'
                            })
                            throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                toast.error(e?.response?.message, {
                    toastId: "donor register error"
                })
            }
        }
        callApi();
    }

    // console.log('Sex is :', sex)

    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-5 px-5'>
            <h3 
            onClick={()=>{
                navigate('/home')
            }}
            style={{cursor:'pointer'}}
            className='my-5'
            >DONOR Update</h3>
            <Form className='w-100 rounded mx-5 px-5' >
                <Form.Group className="mb-3 addShow" onChange={handleFormData}  controlId="fname" >
                    <Form.Label >First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter you name" name='fname' />
                </Form.Group>

                <Form.Group className="mb-3 addShow"  onChange={handleFormData} controlId='mname'>
                    <Form.Label>Middle name</Form.Label>
                    <Form.Control type="text" placeholder="middle name" name='mname'/>
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="lname" onChange={handleFormData} >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="last name" name='lname' />
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="DOB" onChange={handleFormData}  >
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" placeholder="Date of birth" name='DOB' />
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="phone" onChange={handleFormData} >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" name='phone' />
                </Form.Group>

                <Form.Group className="mb-3 addShow" controlId="age" onChange={handleFormData}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" name='age' />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="email" onChange={handleFormData} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email' />
                </Form.Group> */}

                <Form.Group className="mb-3 addShow" controlId="password" onChange={handleFormData} >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name='password' />
                </Form.Group>


                <Form.Group className="mb-3 addShow" onChange={handleFormData} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" type="textarea" placeholder="address" name='address' />
                </Form.Group>

                 <Form.Group className="mb-3 addShow" onChange={handleFormData}  name='sex' >
                    <Form.Label>sex</Form.Label>
                    {/* {['radio'].map((type) => (*/}
                    <div className="mb-3 addShow" >
                        <Form.Check
                            label="male"
                            name="sex"
                            id="male"
                            type={'radio'}
                            value={'Male'}
                        />
                        <Form.Check
                            label="female"
                            name="sex"
                            id="female"
                            type={'radio'}
                            value='Female'
                        />
                    </div>
                    {/* </div>) )}*/}

                </Form.Group>

                <Form.Group className="mb-3 addShow" onChange={handleFormData}  name='bloodgroup'>
                    <Form.Label>Blood group</Form.Label>

                    <div className="mb-3">
                        <Form.Check
                            inline
                            label="A+"
                            value="A+"
                            id="A+"
                            name="bloodgroup"
                            type={'radio'}

                        />
                        <Form.Check
                            inline
                            label="B+"
                            id="B+"
                            name="bloodgroup"
                            type={'radio'}
                            value="B+"
                        />
                        <Form.Check
                            inline
                            label="AB+"
                            id="AB+"
                            name="bloodgroup"
                            type={'radio'}
                            value="AB+"
                        />
                        <Form.Check
                            inline
                            label="O+"
                            id="O+"
                            name="bloodgroup"
                            type={'radio'}
                            value="O+"

                        />
                        <Form.Check
                            inline
                            label="A-"
                            id="A-"
                            name="bloodgroup"
                            type={'radio'}
                            value="A-"

                        />
                        <Form.Check
                            inline
                            label="B-"
                            id="B-"
                            name="bloodgroup"
                            type={'radio'}
                            value="B-"
                        />
                        <Form.Check
                            inline
                            label="AB-"
                            id="AB-"
                            name="bloodgroup"
                            type={'radio'}
                            value="AB-"

                        />
                        <Form.Check
                            inline
                            label="O-"
                            id="O-"
                            name="bloodgroup"
                            type={'radio'}
                            value="O-"
                        />
                    </div>
                </Form.Group>


                <Form.Group className="mb-3 addShow" onChange={handleFormData} controlId="aadharId" name={'aadharId'} >
                    <Form.Label>Aadhar ID</Form.Label>
                    <Form.Control  placeholder="AADHAR ID" name={'aadharId'} type="number" />
                </Form.Group>
                <Form.Group className="mb-3 addShow" onChange={handleFormData} controlId="emergencycontactname" name={'emergencycontactname'} >
                    <Form.Label>Emergency contact name</Form.Label>
                    <Form.Control type="text" placeholder="Emergency contact name" name={'emergencycontactname'} />
                </Form.Group>
                <Form.Group className="mb-3 addShow" onChange={handleFormData} controlId="emergencycontactphone" name={'emergencycontactphone'} >
                    <Form.Label>Emergency contact phone</Form.Label>
                    <Form.Control type="number" placeholder="Emergency contact phone" name={'emergencycontactphone'} />
                </Form.Group>

            <Form.Group className="mb-3 addShow" onChange={handleFormData}  name='volunteer'>
                    {/* <Form.Label>Volunteer</Form.Label> */}
                    <div className="mb-3 addShow">
                        <Form.Check
                            inline
                            label="volunteer"
                            value="true"
                            id="volTrue"
                            name="volunteer"
                            type={'radio'}

                        />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3 addShow" onChange={handleFormData}  name='organRequest'>
                    {/* <Form.Label>Organ Request</Form.Label> */}
                    <div className="mb-3 addShow">
                        <Form.Check
                            inline
                            label="Organ Request"
                            value="true"
                            id="organRequestTrue"
                            name="organRequest"
                            type={'radio'}

                        />
                    </div>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default DonorUpdate;
