

import React, {Fragment} from 'react';
import { react, useState } from 'react';
// import classes from "./DonorRegister.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { envs } from "../../../utils/endpoint"




const baseURL = envs.endpoint;

const  HoscreateOrganRequest = ()=> {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    "name": "Suja",
    "phone": 8998989877,
    "sex":"Male",
    "DOB": "1999-06-24T12:00:00.734+00:00",
    "bloodgroup":"O-",
    "diabetes":true,
    "priororgantransplant":true,
    "dialysisDate": "2015-02-16T12:00:00.734+00:00",
    "kidneydisease": "Chronic Kidney Disease",
    "hlatype": "HLA-A",
    "hlatypingmethod":"Polymerase Chain Reaction",
    "pralevel":5,
    "hlaantigen":"HLA-A",
    "pramethod":"Single Antigen Bead",
    "sensitizationreason": "Previous Transplantation",
    "height": 171,
    "weight": 88,
    "surgicalevaluationremarks": "all good bro np",
    "otherdetails": "no probelm dude chill"
    });



  const handleFormData = (e) => {
      if(e.target.name === 'phone' 
      || e.target.name === 'pralevel'
      || e.target.name === 'height'
      || e.target.name === 'weight'){
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
  const handleSubmit = (e) => {
      e.preventDefault();
      async function callApi() {
          try {
              await axios
                  .post(`${baseURL}/hospital/requests/create/organ/${localStorage.getItem('hospital_id')}`, formData)
                  .then((response) => {
                      console.log(response.status)
                      if (response.status === 200) {
                          localStorage.setItem('id', response.data._id)
                          toast.success("Succesfully organ request created )", {
                              toastId: 'organ request success'
                          })
                        //   window.reload()
                          setTimeout(navigate('/hospital/request'), 8000);
                      }
                      else {
                          toast.error("Something went wrong :(", {
                              toastId: 'organ request failed '
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

  console.log(formData)
  return (
    <div className='my-4  d-flex justify-content-center'> 

    <Form className='w-75 w-sm-100 rounded p-3' >
    <h3 
    className='mb-5 text-center'
    style={{
        color:'#fe452d92',
        fontWeight:'1000',
        fontSize:'35px'
    }}
    >Create Organ Request</h3>  
   
                

              <Form.Group className="my-4 addShow" onChange={handleFormData}  controlId="name" >
                <Form.Label
                    style={{
                        color:'#fe452d92',
                        fontWeight:'1000',
                    }}
                >Name</Form.Label>
                <Form.Control type="text" placeholder="Enter you name" name='name' />
            </Form.Group>

            <Form.Group className="my-4 addShow" controlId="phone" onChange={handleFormData} >
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}>Phone</Form.Label>
                <Form.Control type="numyer" placeholder="Phone" name='phone' />
            </Form.Group>

            <Form.Group className="my-4 addShow" onChange={handleFormData}  name='Sex' >
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}>sex</Form.Label>
                <div className="my-3" >
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

            <Form.Group className="my-4 addShow" controlId="DOB" onChange={handleFormData}  >
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}>Date of birth</Form.Label>
                <Form.Control type="date" placeholder="Date of birth" name='DOB' />
            </Form.Group>


            <Form.Group className="my-4 addShow" onChange={handleFormData}  name='Bloodgroup'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >Blood Type Required </Form.Label>
                <div className="my-3">
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

             <Form.Group className="my-4 addShow" onChange={handleFormData}  name='Diabetes' >
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >diabetes</Form.Label>
                <div className="my-3" >
                    <Form.Check
                        label="true"
                        name="diabetes"
                        id="diabetestrue"
                        type={'radio'}
                        value={'true'}
                    />
                    <Form.Check
                        label="false"
                        name="diabetes"
                        id="diabetesfalse"
                        type={'radio'}
                        value='false'
                    />
                </div>
              </Form.Group>


            <Form.Group className="my-4 addShow" onChange={handleFormData}  name='priororgantransplant' >
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >priororgantransplant</Form.Label>
                <div className="my-3" >
                    <Form.Check
                        label="true"
                        name="priororgantransplant"
                        id="priororgantransplanttrue"
                        type={'radio'}
                        value={'true'}
                    />
                    <Form.Check
                        label="false"
                        name="priororgantransplant"
                        id="priororgantransplantfalse"
                        type={'radio'}
                        value='false'
                    />
                </div>
                 </Form.Group>


            <Form.Group className="my-4 addShow" controlId="DOB" onChange={handleFormData}  >
                <Form.Label
                
                style={{
                    color:'#fe452d92',
                    fontWeight:'1000',
                }}>dialysis Date</Form.Label>
                <Form.Control type="date" placeholder="Dialysis Date" name='dialysisDate' />
            </Form.Group>


            <Form.Group className="my-4 addShow" onChange={handleFormData}  name='kidneydisease'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >KIDNEY DISEASE </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="Chronic Kidney Disease"
                        value="Chronic Kidney Disease"
                        id="Chronic Kidney Disease"
                        name="kidneydisease"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label="Diabetic Nephropathy"
                        id="Diabetic Nephropathy"
                        name="kidneydisease"
                        type={'radio'}
                        value="Diabetic Nephropathy"
                    />

                    <Form.Check
                        inline
                        label="Polycrytic Kidney Disease"
                        id="Polycrytic Kidney Disease"
                        name="kidneydisease"
                        type={'radio'}
                        value="Polycrytic Kidney Disease"

                    />
                    <Form.Check
                        inline
                        label="Glomerulonephritis"
                        id="Glomerulonephritis"
                        name="kidneydisease"
                        type={'radio'}
                        value="Glomerulonephritis"

                    />
                </div>
             </Form.Group>

             <Form.Group className="my-4 addShow" onChange={handleFormData}  name='hlatype'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >HUMAN LEUKOCYTE ANTIGEN(HLA) TYPE </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="HLA-A"
                        value="HLA-A"
                        id="HLA-A"
                        name="hlatype"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label="HLA-B"
                        id="HLA-B"
                        name="hlatype"
                        type={'radio'}
                        value="HLA-B"
                    />
                    <Form.Check
                        inline
                        label="HLA-C"
                        id="HLA-C"
                        name="hlatype"
                        type={'radio'}
                        value="HLA-C"
                    />
                    <Form.Check
                        inline
                        label="HLA-DPB1"
                        id="HLA-DPB1"
                        name="hlatype"
                        type={'radio'}
                        value="HLA-DPB1"

                    />
                    <Form.Check
                        inline
                        label="HLA-DQB1"
                        id="HLA-DQB1"
                        name="hlatype"
                        type={'radio'}
                        value="HLA-DQB1"

                    />
                     <Form.Check
                        inline
                        label="HLA-DRB1"
                        id="HLA-DRB1"
                        name="hlatype"
                        type={'radio'}
                        value="HLA-DRB1"

                    />
                </div>
             </Form.Group>


             <Form.Group className="my-4 addShow" onChange={handleFormData}  name='hlatypingmethod'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >HLA TYPING METHOD </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="Polymerase Chain Reaction"
                        value="Polymerase Chain Reaction"
                        id="Polymerase Chain Reaction"
                        name="hlatypingmethod"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label="Sequence Based Typing"
                        id="Sequence Based Typing"
                        name="hlatypingmethod"
                        type={'radio'}
                        value="Sequence Based Typing"
                    />
                    <Form.Check
                        inline
                        label="Sequence Specific Oligonucleotide"
                        id="Sequence Specific Oligonucleotide"
                        name="hlatypingmethod"
                        type={'radio'}
                        value="Sequence Specific Oligonucleotide"
                    />
                    <Form.Check
                        inline
                        label="Serological"
                        id="Serological"
                        name="hlatypingmethod"
                        type={'radio'}
                        value="Serological"

                    />
                </div>
             </Form.Group>

             <Form.Group className="my-4 addShow" onChange={handleFormData}  controlId="pralevel" >
                <Form.Label 
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >PANEL REACTIVE ANTIBODY LEVEL(%)</Form.Label>
                <Form.Control type="numyer" placeholder="pralevel" name='pralevel' />
            </Form.Group>


            <Form.Group className="my-4 addShow" onChange={handleFormData}  name='hlaantigen'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >HLA ANTIGEN AGAINST WHICH ANTIBODIES ARE PRESENT </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="HLA-A"
                        value="HLA-A"
                        id="HLAHLA-A"
                        name="hlaantigen"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label="HLA-B"
                        id="HLAHLA-B"
                        name="hlaantigen"
                        type={'radio'}
                        value="HLA-B"
                    />
                    <Form.Check
                        inline
                        label="HLA-C"
                        id="HLAHLA-C"
                        name="hlaantigen"
                        type={'radio'}
                        value="HLA-C"
                    />
                    <Form.Check
                        inline
                        label="HLA-DPB1"
                        id="HLAHLA-DPB1"
                        name="hlaantigen"
                        type={'radio'}
                        value="HLA-DPB1"

                    />
                    <Form.Check
                        inline
                        label="HLA-DQB1"
                        id="HLAHLA-DQB1"
                        name="hlaantigen"
                        type={'radio'}
                        value="HLA-DQB1"
                    />

                    <Form.Check
                        inline
                        label="HLA-DRB1"
                        id="HLAHLA-DRB1"
                        name="hlaantigen"
                        type={'radio'}
                        value="HLA-DRB1"

                    />
                </div>
             </Form.Group>



             <Form.Group className="my-4 addShow" onChange={handleFormData}  name='pramethod'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >HLA TYPING METHOD </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="Single Antigen Bead"
                        value="Single Antigen Bead"
                        id="Single Antigen Bead"
                        name="pramethod"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label="Flow Cytometry"
                        id="Flow Cytometry"
                        name="pramethod"
                        type={'radio'}
                        value="Flow Cytometry"
                    />
                    <Form.Check
                        inline
                        label="Complement Dependent Cytotoxicity"
                        id="Complement Dependent Cytotoxicity"
                        name="pramethod"
                        type={'radio'}
                        value="Complement Dependent Cytotoxicity"
                    />
                </div>
             </Form.Group>


             <Form.Group className="my-4 addShow" onChange={handleFormData}  name='sensitizationreason'>
              <Form.Label
                            style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
              >SENSITIZATION REASON </Form.Label>
                <div className="my-3">
                    <Form.Check
                        inline
                        label="Previous Transplantation"
                        value='Previous Transplantation'
                        id='Previous Transplantation'
                        name="sensitizationreason"
                        type={'radio'}

                    />
                    <Form.Check
                        inline
                        label='Pregnancy'
                        id='Pregnancy'
                        name="sensitizationreason"
                        type={'radio'}
                        value='Pregnancy'
                    />
                    <Form.Check
                        inline
                        label='Blood Transfusion'
                        id='Blood Transfusion'
                        name="sensitizationreason"
                        type={'radio'}
                        value='Blood Transfusion'
                    />
                    <Form.Check
                        inline
                        label='NA'
                        id='NA'
                        name="sensitizationreason"
                        type={'radio'}
                        value='NA'
                    />
                </div>
             </Form.Group>


             <Form.Group className="my-4 addShow" controlId="height" onChange={handleFormData}>
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >HEIGHT(in cm)</Form.Label>
                <Form.Control type="number" placeholder="height" name='height' />
            </Form.Group>

            <Form.Group className="my-4 addShow" controlId="weight" onChange={handleFormData}>
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >WEIGHT(in kg)</Form.Label>
                <Form.Control type="number" placeholder="weight" name='weight' />
            </Form.Group>

            <Form.Group className="my-4 addShow" onChange={handleFormData} controlId="surgicalevaluationremarks">
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >SURGICAL EVALUATION REMARKS</Form.Label>
                <Form.Control as="textarea" type="textarea" placeholder="surgical evaluation remarks" name='surgicalevaluationremarks' />
            </Form.Group>

            <Form.Group className="my-4 addShow" onChange={handleFormData} controlId="otherdetails">
                <Form.Label
                              style={{
                                color:'#fe452d92',
                                fontWeight:'1000',
                            }}
                >OTHER DETAILS</Form.Label>
                <Form.Control
                 as="textarea"
                  type="textarea"
                   placeholder="otherdetails" 
                   name='otherdetails' />
            </Form.Group>

     



          
            <Button variant="primary"
                          style={{
                            fontWeight:'1000',
                        }}
            type="button" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
</div>
  )

  
}


export default HoscreateOrganRequest;