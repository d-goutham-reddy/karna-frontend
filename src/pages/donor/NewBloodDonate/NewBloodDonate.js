import React, { Fragment, useEffect, useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { envs } from '../../../utils/endpoint';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const baseURL = envs.endpoint;



const NewBloodDonate = () => {

    const [bloodDonationLocation, setBloodDonationLocation] = useState([{}]);
    const [selectedLocation, setSelectedLocation] = useState();
    const [dattt, setDattt] = useState();
    const [timeee, setTimeee]  = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function callUpcoming() {
            try {
                await axios
                    .get(`${baseURL}/donor/newblooddonation/location`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setBloodDonationLocation(response.data);
                        }
                        else {
                            console.log("response")

                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)

            }
        }
        callUpcoming()
    }, []);


    const handleBook = () => {
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/donor/newblooddonation/${localStorage.getItem('donor_id')}/${selectedLocation}`, {
                        "appdate": dattt,
                        "time": timeee,
                    })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success("New Appointmented Created Successfully :)", {
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


    console.log(bloodDonationLocation)
    console.log(selectedLocation)
    return (
        <Fragment>
            <div className='m-5 p-5 border border-dark d-flex justify-content-center align-items-center flex-column'>
                <h1 >NEW BLOOD DONATION</h1>
                <div className='my-4'>
                    <h5 style={{ fontWeight: "bolder" }}>Location</h5>
                    <DropdownButton
                        className='addShow bg-light'
                        id="dropdown-basic-button"
                        title={`Choose The Location Where You Wish To Donate  `}
                        drop={'bottom'}>
                        <div style={{ height: "180px", width: "100%", overflowY: 'scroll' }}>
                            {
                                bloodDonationLocation.map((ele, index) => {
                                    return (
                                        <Dropdown.Item 
                                        className='addShow bg-light'
                                        key={index} onClick={(e) => {
                                            setSelectedLocation(ele._id)
                                        }}>{ele.name}</Dropdown.Item>
                                    )
                                })
                            }
                        </div>
                    </DropdownButton>
                    <Form.Group className="mb-3 my-4 addShow" controlId="DOB" onChange={(e)=> setDattt(e.target.value)}  >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date of birth" name='DOB' />
                    </Form.Group>
                    <Form.Group className="mb-3 my-4 addShow" controlId="DOB" onChange={(e)=> setTimeee(e.target.value)}  >
                        <Form.Label>Date Time</Form.Label>
                        <Form.Control type="time" placeholder="Date of birth" name='DOB' />
                    </Form.Group>
                </div>
                <h4 className='my-4 mt-2'
                     style={{ color: '#FE472D', fontSize:'25px'}}
                >You’re Not Eligible To Donate Permanently If</h4>
                <p className='my-4 mt-2'
                
                >1. You have HIV or AIDS history or tested positive for syphilis, gonorrhea, or other sexually transmitted infections.<br></br>
                    2. You used needles to take drugs, including steroids.<br></br>
                    3. You ever had hepatitis B or C or have an active hepatitis infection.<br></br>
                    4. You ever had cancer, including leukemia and lymphoma.<br></br>
                    5. You ever had a heart attack or stroke.<br></br>
                    6. You ever had an organ transplant or bone marrow transplant.<br></br>
                    7. You ever had a positive test for the Zika virus or Chagas disease or Creutzfeldt-Jakob disease (CJD) or variant CJD.<br></br>
                    8. You don’t satisfy the age limit criterion  Minimum 18 Years and Maximum 65 Years.<br></br>
                    9. You don’t satisfy the weight limit criterion  Minimum 50 kgs.</p>

                <h4 className='my-4 mt-2'
                     style={{ color: '#FE472D', fontSize:'25px'}}
                >You’re Not Eligible To Donate Blood Temporarily For A Certain Period Of Time If</h4>
                <p className='my-4 mt-2'>
                    1. You have diabetes and took insulin or other medications 24 hours prior to the time of donation and have complications such as retinopathy, neuropathy or nephropathy.<br></br>
                    2. You have Hypertension and have headache, dizziness or chest pain related to high Blood Pressure at the time of donation.<br></br>
                    3. You have taken harmful medications at the time of donation such as Antibiotics (To Treat Active Infections), Blood thinners (Warfarin, Heparin, Aspirin), Immunosuppressants, Accutane (6 Months Gap Required), Intravenous drug use (Recreational drugs), Herbal supplements.<br></br>
                    4. You have taken harmful vaccines such as Covid-19 Vaccine, Hepatitis B Vaccine (7 days prior), Measles, Mumps and Rubella (MMR) Vaccine (4 Weeks prior) and Varicella (Chickenpox) Vaccine (4 Weeks prior).<br></br>
                    5. You have travelled to areas with highly infectious diseases such as Malaria (12 Months prior), Zika (28 Days prior), Mad Cow (6 Months prior) and HIV or Hepatitis-B or Hepatitis-C.<br></br>
                    6. You have had sex with a partner injected with drugs or has HIV, Hepatitis-B or C, or is a commercial sex worker, or with more than one partners in last 6 months, or if you have a history of Sexually Transmitted Infections (STI).<br></br>
                    7. You had access to intravenous drugs (injected to veins - 6 months prior) or recreational drugs (Non prescribed drugs – 48 hours prior) or took medications not prescribed by a doctor or prescribed to someone else.<br></br>
                    8. (For Women) You had a successful delivery in last 6 months or had miscarriage/abortion in last 3 months.<br></br>
                    9. You don’t have clean Lifestyle Habits  Had alcohol, tobacco or any other nicotine products 24 Hours prior to the donation time or had tattoo or piercing 6 months prior or had surgeries 6 months prior to the donation time.<br></br>
                    10. You don’t have your Blood Sugar Level between 70 and 180 mg/dL.<br></br>
                    11. Your hemoglobin level at the time of donation is not at least 12.5g/dL (grams per deciliter) if you’re a woman or not at least 13.5 g/dL if you’re a man.<br></br>
                    12. Your Blood Pressure Level is not in the range of 100/60 to 160/100 mmHg.</p>


                <Form.Check
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='checkbox'
                    className='addShow mx-3 w-100 d-flex justify-content-center mx-3 px-3'
                    label='I Hereby Confirm That I Have Read All the Eligibilty Criterion And That I Am Eligible To The Best Of My Knowledge'

                />
                <button type='button' onClick={handleBook} className='btn btn-success my-4 px-5 py-2'>Book</button>
            </div>


        </Fragment>
    )
}


export default NewBloodDonate;
