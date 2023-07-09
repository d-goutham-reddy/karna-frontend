import React from 'react';
import classes from "./BloodDonation.module.css";
import { Fragment } from 'react';
import bloodThree from "../../../../assests/bloodSaveThree.jpg";

const BloodDonation = () => {
  return (
    <Fragment>
      <div className={classes['dis-det']}>
        <p>
          Blood donation is the process of giving blood,
           either voluntarily or for medical treatment.
            It is a crucial part of modern healthcare as
             it helps save lives and improve the health of
              patients who require blood transfusions due 
              to injury, illness, or surgery. Here are some 
              key things to know about blood donation:
        </p>
        {/* <h3>Types of organ donation:</h3> */}
        <p>
          <span>Who can donate blood ?</span>  <br />
          Anyone who is in good health, is at least 17 years old (in most countries),
          and meets the donation criteria can donate blood. The criteria vary by country,
          but generally include factors such as weight, hemoglobin level, recent travel history,
          and medical conditions.
        </p>
        <p>
          <span>What types of blood donations are there?</span> <br />
          There are two main types of blood donations:
          whole blood donation and apheresis donation.
          Whole blood donation involves giving a pint of whole blood,
          which is then separated into its various components
          (red blood cells, plasma, and platelets) for transfusion.
          Apheresis donation involves a machine that collects specific
          blood components (usually platelets, plasma, or red blood cells)
          and returns the rest of the blood to the donor.
        </p>
      </div>
      <div className={classes['blood-three']}>
        <img src={bloodThree} alt='blood donation logo'></img>
      </div>


      <div className={classes['dis-det']}>
        {/* <h3>Process of organ donation</h3> */}
        <p>
          <span>What happens during a blood donation?</span> <br />
          During a blood donation, a healthcare professional
          will ask you some questions about your medical history,
          take your vital signs, and perform a quick physical exam
          to ensure you are healthy enough to donate.
          They will then clean an area on your arm, insert a needle, 
          and begin the donation process, which usually takes about 10-15 
          minutes for whole blood donation and up to 2 hours for apheresis donation.
        </p>
        <p>
          <span>What are the benefits of donating blood?</span><br />
          Donating blood has many benefits, both for the donor and 
          the recipient. For the donor, it can help reduce the risk of 
          heart disease and cancer, as well as provide a sense of 
          satisfaction and fulfillment knowing they are helping someone 
          in need. For the recipient, blood transfusions can help save 
          lives and improve health outcomes for a variety of conditions.
        </p><p>
          <span>How often can you donate blood?</span><br />
           The frequency of blood donation depends on the type of 
           donation and local regulations. Whole blood donors can 
           typically donate every 8-12 weeks, while apheresis donors 
           may be able to donate more frequently. It is important to 
           follow the guidelines of your local blood donation center 
           and to speak with a healthcare professional if you have any concerns.
        </p>
      </div>
    </Fragment>
  )
}


export default BloodDonation;
