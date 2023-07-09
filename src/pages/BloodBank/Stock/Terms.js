import { useState, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { envs } from "../../../utils/endpoint";
import { toast } from "react-toastify";
import './BloodBankAppointmentUpcoming.scss';
import { useNavigate } from "react-router-dom";



const baseURL = envs.endpoint;
export const Terms = () => {

  const [oneOverlay, setOneOverLay] = useState(false);
  const [twoOverlay, setTwoOverlay] = useState(false);
  const [permanentBanReason, setPermanentBanReason] = useState();
  const [tempBanDate, setTmpBanDate] = useState();

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    
  }

  async function callApi() {


    console.log()
    // try {
    //     await axios
    //         .put(`${baseURL}/bloodbank/stock/new/permanentban/`)
    //         .then((response) => {
    //             console.log(response.status)
    //             if (response.status === 200) {
    //                 toast.success(``, {
    //                     toastId: 'blood bank '
    //                 })
    //                 setOneOverLay(true)
    //             }
    //             else {
    //                 toast.error(``, {
    //                     toastId: 'blood bank '
    //                 })
    //                 throw Error;
    //             }
    //         })
    // }
    // catch (e) {
    //     console.log(e);
    // }

  callApi();
}

  const handleRadio = ()=>{


  }

  const handelrCloseOneOverlay = ()=>{
    setOneOverLay(false);
  }

  const permanentBanReasonSubmit = ()=>{
    async function callApi() {
          try {
              await axios
                  .put(`${baseURL}/bloodbank/stock/new/permanentban/${localStorage.getItem('stock_details_id')}`,{
                    'permanentbanreason':permanentBanReason,
                  })
                  .then((response) => {
                      console.log(response.status)
                      if (response.status === 200) {
                          toast.success(`Succesfully verfied `, {
                              toastId: 'blood bank register'
                          })
                          navigate('bloodbank/stock')
                      }
                      else {
                          toast.error(`unable to verify`, {
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
      setTimeout(()=>{
        setOneOverLay(false);
      }, 6000);
  }

  const handleTempBan = ()=>{
    async function callApi() {
      try {
          await axios
              .put(`${baseURL}/bloodbank/stock/new/temporaryban/${localStorage.getItem('stock_details_id')}`,{
                'eligibledate':tempBanDate,
              })
              .then((response) => {
                  console.log(response.status)
                  if (response.status === 200) {
                      toast.success(`Succesfully verfied `, {
                          toastId: 'blood bank register'
                      })
                      navigate('/bloodbank/stock')
                  }
                  else {
                      toast.error(`unable to verify`, {
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
  setTimeout(()=>{
    setTwoOverlay(false);
  }, 6000);

  }

  const handleCloseTwoOverlay = ()=>{
    setTwoOverlay(false);
  }

  return (
    <Fragment>
      {
        oneOverlay && <>

        <div className='card_insert'>
        <div className='box'>
            <div className='header'>
            <h4>Permanent Ban Reason</h4>
            <span onClick={handelrCloseOneOverlay} >X</span>
            </div>
            <div className='img-dis'>
              <lable id='getPermanentBanReason'></lable>
            <input id='getPermanentBanReason'type='text'  onChange={(e)=>{setPermanentBanReason(e.target.value)}}></input>
            <button className='btn btn-success rounded' onClick={permanentBanReasonSubmit}>Submit</button>
            </div>
           
        </div>
    </div> </>
      }

      {
          twoOverlay && <>

                <div className='card_insert ' >
                <div className='box w-50'>
                    <div className='header my-2 p-2'>
                    <h2 className="text-center w-100">Temporary Ban</h2>
                    <span onClick={handleCloseTwoOverlay}>X</span>
                    </div>
                   
                    <div className='img-dis'>
                   
                      <lable id='getPermBan' className='mt-5'>Eligible Date</lable>
                    <input id='getPermBan' type='date' onChange={(e)=>{setTmpBanDate(e.target.value)}}></input>
                    <button className='btn btn-success rounded my-3' onClick={handleTempBan}>Submit</button>
                    </div>
                   
                </div>
            </div> </>
      }


      <div className="mx-5 px-5 my-5">
        <h4>{"You’re Not Eligible To Donate Permanently If:"}</h4>
        <ol>
          <li>
            {
              "You have HIV or AIDS history or tested positive for syphilis, gonorrhea, or other sexually transmitted infections."
            }
          </li>
          <li>{"You used needles to take drugs, including steroids."}</li>
          <li>
            {
              "You ever had hepatitis B or C or have an active hepatitis infection."
            }
          </li>
          <li>{"You ever had cancer, including leukemia and lymphoma."}</li>
          <li>{"You ever had a heart attack or stroke."}</li>
          <li>
            {"You ever had an organ transplant or bone marrow transplant."}
          </li>
          <li>
            {
              "You ever had a positive test for the Zika virus or Chagas disease or Creutzfeldt-Jakob disease (CJD) or variant CJD."
            }
          </li>
          <li>
            {
              "You don’t satisfy the age limit criterion ->  Minimum 18 Years and Maximum 65 Years."
            }
          </li>
          <li>
            {"You don’t satisfy the weight limit criterion -> Minimum 50 kgs."}
          </li>
        </ol>

        <h4>
          {
            "You’re Not Eligible To Donate Blood Temporarily For A Certain Period Of Time If:"
          }
        </h4>
        <ol>
          <li>
            You have diabetes and took insulin or other medications 24 hours
            prior to the time of donation and have complications such as
            retinopathy, neuropathy, or nephropathy.
          </li>
          <li>
            You have Hypertension and have a headache, dizziness, or chest pain
            related to high Blood Pressure at the time of donation.
          </li>
          <li>
            You have taken harmful medications at the time of donation such as
            Antibiotics (To Treat Active Infections), Blood thinners (Warfarin,
            Heparin, Aspirin), Immunosuppressants, Accutane (6 Months Gap
            Required), Intravenous drug use (Recreational drugs), Herbal
            supplements.
          </li>
          <li>
            You have taken harmful vaccines such as Covid-19 Vaccine, Hepatitis
            B Vaccine (7 days prior), Measles, Mumps and Rubella (MMR) Vaccine
            (4 Weeks prior) and Varicella (Chickenpox) Vaccine (4 Weeks prior).
          </li>
          <li>
            You have traveled to areas with highly infectious diseases such as
            Malaria (12 Months prior), Zika (28 Days prior), Mad Cow (6 Months
            prior) and HIV or Hepatitis-B or Hepatitis-C.
          </li>
          <li>
            You have had sex with a partner injected with drugs or has HIV,
            Hepatitis-B or C, or is a commercial sex worker, or with more than
            one partner in the last 6 months, or if you have a history of
            Sexually Transmitted Infections (STI).
          </li>
          <li>
            You had access to intravenous drugs (injected to veins - 6 months
            prior) or recreational drugs (Non-prescribed drugs – 48 hours prior)
            or took medications not prescribed by a doctor or prescribed to
            someone else.
          </li>
          <li>
            (For Women) You had a successful delivery in the last 6 months or
            had a miscarriage/abortion in the last 3 months.
          </li>
          <li>
            You don’t have clean Lifestyle Habits - Had alcohol, tobacco, or any
            other nicotine products 24 Hours prior to the donation time or had a
            tattoo or piercing 6 months prior or had surgeries 6 months prior to
            the donation time.
          </li>
          <li>
            You don’t have your Blood Sugar Level between 70 and 180 mg/dL.
          </li>
          <li>
            Your hemoglobin level at the time of donation is not at least
            12.5g/dL (grams per deciliter) if you’re a woman or not at least
            13.5 g/dL if you’re a man.
          </li>
          <li>
            Your Blood Pressure Level is not in the range of 100/60 to 160/100
            mmHg.
          </li>
        </ol>

        <h4>{"Various Other Tests To Be Conducted:"}</h4>
        <ol>
          <li>
            Antibody Screening: Detects Antibodies In The Donor’s Blood That May
            Cause Transfusion Reactions In The Recipient.
          </li>
          <li>
            Infectious Diseases Screening: Screens Donated Blood For Infectious
            Diseases Such As HIV, Hepatitis B and C, Syphilis, West Nile Virus
            and Zika Virus and Malaria.
          </li>
          <li>
            Clotting Factor / Coagulation Test: Measures The Ability Of The
            Donor’s Blood To Clot, Which Can Help Determine If The Blood Is
            Suitable For Transfusion In Certain Medical Conditions.
          </li>
        </ol>

        <h4>{"Results/Conclusions From The Tests Conducted:"}</h4>
        {/* <div> */}
            <div>
              <Form className="d-flex column">

        
          <Form.Check // prettier-ignore
            type='radio'
            id={`Permanent`}
            label={`Permanent Ban`}
            style={{margin:"0px 20px 0px 0px"}}
            name='ban'
            value={'perBan'}
            onChange={handleRadio}
            onClick={()=> setOneOverLay(true)}
          />

          <Form.Check
            type='radio'
            label={`Temporary`}
            id={`Temporary Ban`}
            style={{margin:"0px 0px 0px 20px"}}
            name='ban'
            value={'tempBan'}
            onChange={handleRadio}
            onClick={()=> setTwoOverlay(true)}

          />
          <Form.Check
            type='radio'
            label={`Eligible`}
            id={`eligible`}
            style={{margin:"0px 0px 0px 20px"}}
            name='ban'
            value={'eligible'}
            onChange={handleRadio}
            onClick={()=>{
              navigate('/bloodbank/eligible-stock')
            }}
          />
    
    </Form>
    <Button className="my-5" variant="primary" onClick={handleSubmit}>submit</Button>
    </div>
        
      </div>
    </Fragment>
  );
};
