import React, { Fragment } from 'react'
import classes from "./OrganDonation.module.css";
import regis from "../../../../assests/register.png"
import competence from "../../../../assests/competence.png"
import consent from "../../../../assests/donor-consent-form.png"
import recovery from "../../../../assests/recovery.png"
import heart from "../../../../assests/heart.png"


const OrganDonation = () => {
    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <p>
                    Organ donation
                    is the process of
                    giving an organ or
                    tissue from one person
                    (the donor) to another person
                    (the recipient) who needs a transplant.
                    The donated organ or tissue can save or
                    improve the life of the recipient. Here is
                    some information on organ donation:
                </p>
                <h3>Types of organ donation:</h3>
                <p>
                    <span>Living donation :</span>  This occurs when a
                    living person donates an organ or tissue. Examples
                    include donating a kidney or a portion of the liver.
                </p>
                <p>
                <span> Deceased donation :</span>  This occurs when organs or tissues are removed from a deceased person for transplant purposes.

                Nearly 12,000 individuals die every day due to
                    lack of quality blood
                </p>
            </div>
            <div className={classes['dis-det']}>
                <h3>Process of organ donation</h3>

            <div className="container">
            <div className="row w-100 gy-5">


                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={regis} alt="register" width={90} height={90}/>
                <p className='text-center'>
                <span>Registering</span></p>
                <p className='text-center'>People can register to become organ donors by signing up online or through their state's Department of Motor Vehicles.
                </p>
                </div>


                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={competence} alt="register" width={90} height={90}/>
                <p className='text-center'>
                <span>Determination of eligibility</span></p>
                <p className='text-center'>After someone passes away, medical professionals will evaluate the organs to determine if they are suitable for donation.
                </p>
                </div>


                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={consent} alt="register" width={90} height={90}/>
                <p className='text-center'>
                <span>Consent</span></p>
                <p className='text-center'>The donor's family will be asked for consent before any organs are removed.
                </p>
                </div>


                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={recovery} alt="register" width={90} height={90}/>
                <p className='text-center'>
                <span>Recovery</span></p>
                <p className='text-center'>After consent is given, organs are removed from the donor's body in a surgical procedure.
                </p>
                </div>


                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={heart} alt="register" width={90} height={90}/>
                <p className='text-center'>
                <span>Transplantation</span></p>
                <p className='text-center'> The recovered organs are then transported to the recipient, who will undergo a surgical procedure to receive the donated organ.
                </p>
                </div>


            </div>  
            </div>
         
               
                {/* <p>
                <span>Determination of eligibility</span> After someone passes away, medical professionals will evaluate the organs to determine if they are suitable for donation.
                </p><p>
                <span>Consent :</span> The donor's family will be asked for consent before any organs are removed.
                </p><p>
               <span> Recovery :</span> After consent is given, organs are removed from the donor's body in a surgical procedure.
                </p> <p>
                <span>Transplantation :</span> The recovered organs are then transported to the recipient, who will undergo a surgical procedure to receive the donated organ.
                </p> */}
            </div>
            <div className={classes['dis-det']}>
                <h3>What organs can I donate after I die?</h3>
                    
                        <ul>
                        <li>Kidneys (2)</li>
                        <li> Lungs (2)</li>
                        <li>Intestines </li>
                        <li>Hands and Face</li>
                        <li>Heart</li>
                        <li>Liver</li>
                        <li>Pancreas</li>
                    </ul>
                    
                </div>
        </Fragment>
    )
}

export default OrganDonation;
