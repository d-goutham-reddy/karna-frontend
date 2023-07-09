// packages imoprt
import { Fragment } from "react";
import { Link } from "react-router-dom";

// Local imports
import doctor from "../../../assests/doctor.png";
import donor from "../../../assests/donor.png";
import why from "../../../assests/why-donate-blood.jpg";
import sec from "../../../assests/bbl.png";
import hospital from "../../../assests/hospital.png";
import subs from "../../../assests/subs.png";
import easy from "../../../assests/easy.png";
import community from "../../../assests/partners.png";
import ssss from "../../../assests/safe.png";
import better from "../../../assests/bettwer.png";
import asses from "../../../assests/profits.png";
import hand from "../../../assests/hand.png";

import classes from "./Home.module.css";

const Home = (props) => {


  


  return (
    <Fragment>
      <div className={classes["outer-cont"]}>
        <div className="row">
          <div className={`col-lg ${classes["cont-one"]}`}>
            <div className={` ${classes["box"]}`}>
              <h3>Hospital</h3>
              <img src={doctor} alt="docter img" />
              <div>
                <Link to="/hospital/login">
                  <button>login</button>
                </Link>
                <Link to="/hospital/register">
                  <button>signup</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg ${classes["cont-two"]}`}>
            <div className={` ${classes["box"]}`}>
              <h3>Donor</h3>
              <img src={donor} alt="donor img" />
              <div>
                <Link to="/donor/login">
                  <button>login</button>
                </Link>
                <Link to="/donor/register">
                  <button>signup</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg ${classes["cont-three"]}`}>
            <div className={` ${classes["box"]}`}>
              <h3>Blood Bank</h3>
              <img src={hospital} alt="blood bank img" />
              <div>
                <Link to="/bloodBank/login">
                  <button>login</button>
                </Link>
                <Link to="/bloodBank/register">
                  <button>signup</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["dis-det"]}>
        <h3>WHY SHOULD I DONATE ?</h3>
        <div className="container  mw-100 my-2">
          <div className="row">
            <div className="col-md-6 col-12 d-flex px-0 justify-content-center align-items-center ">
              <p className="w-75 text-left">
                Nearly 5 lakh people die a year due to organ scarcityAround 2
                lakh people die of liver disease, 50,000 die from heart disease,
                1,50,000 people await a kidney transplant but only 5,000 get
                one. Each day, 17 people die waiting for a life-saving organ
                transplant. New name is added to the transplant waiting list
                every 9 minutes. Currently, there are more than 100,000 people
                waiting for a second chance.
                <br />
                <br />
                Nearly 12,000 individuals die every day due to lack of quality
                blood
              </p>
            </div>
            <div className="col-md-6 col-12 d-flex px-5 justify-content-center ">
              <img src={why} alt="why-blood" width={"700"} height={"100%"} />

            </div>
          </div>
        </div>

        <div className="container mw-100  my-2">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
            <img src={sec} alt="why-blood" width={"300"} height={"300"} />
            
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-start align-items-center">
              <p className="w-75 text-left">
                India's annual blood requirement is around 1.5 crore units. In
                every two seconds, a patient in India needs blood and one out of
                every three people will need blood in their lifetime. A person
                has five to six liters of blood in his or her body and can
                donate blood every 90 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["dis-det"]}>
        <h3>IMPORTANCE</h3>

        <div className="container mw-100  px-5">
          <div className="row gy-5 gx-5">
            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">No Substitute for Blood</span>
              </p>
              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={subs} alt="" width={130} height={130} />
                </div>

                <p
                  className="w-100 px-3 py-2"
                  style={{ fontSize: "15px", wordSpacing: "0px" }}
                >
                  {" "}
                  Despite advances in medical science, there is no substitute
                  for human blood. Blood can only be obtained from donors,
                  making blood donation a critical part of healthcare.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">Easy and Safe Process</span>
              </p>

              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={ssss} alt="" width={130} height={130} />
                </div>

                <p
                  className="w-100 px-3 py-2"
                  style={{ fontSize: "15px", wordSpacing: "0px" }}
                >
                  {" "}
                  Blood donation is a safe and easy process that can be
                  completed in about an hour. Donors are screened for
                  eligibility, and the process is supervised by trained medical
                  professionals.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">Community Responsibility</span>
              </p>

              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={community} alt="" width={130} height={130} />
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column  ">
                  <p
                    className="w-100 px-3 py-2"
                    style={{ fontSize: "15px", wordSpacing: "0px" }}
                  >
                    {" "}
                    Blood donation is a community responsibility. It is a way
                    for people to come together and support one another by
                    providing a critical resource that is essential for
                    healthcare.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">Improved Health</span>
              </p>

              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={better} alt="" width={130} height={130} />
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column  ">
                  <p
                    className="w-100 px-3 py-2"
                    style={{ fontSize: "15px", wordSpacing: "0px" }}
                  >
                    {" "}
                    Donating blood can have health benefits for the donor, such
                    as reducing the risk of heart disease and stroke by lowering
                    blood viscosity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">Cost-Effective</span>
              </p>
              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={asses} alt="" width={130} height={130} />
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column  ">
                  <p
                    className="w-100 px-3 py-2"
                    style={{ fontSize: "15px", wordSpacing: "0px" }}
                  >
                    {" "}
                    Blood donation is cost-effective compared to the cost of
                    providing blood products to patients who need them. By
                    donating blood, donors can help reduce the cost of
                    healthcare for themselves and their community.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">
                  Honoring a loved one's legacy
                </span>
              </p>

              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={hand} alt="" width={130} height={130} />
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column  ">
                  <p
                    className="w-100 px-3 py-2"
                    style={{ fontSize: "15px", wordSpacing: "0px" }}
                  >
                    {" "}
                    For families of donors, organ donation can be a way to honor
                    the legacy of a loved one and help others. Knowing that
                    their loved one's organs have helped to save lives can bring
                    a sense of comfort and closure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <p className="text-left">
                <span className="leftBorder">Supporting medical research </span>
              </p>
              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center flex-column flex-fill ">
                  <img src={subs} alt="" width={130} height={130} />
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column  ">
                  <p
                    className="w-100 px-3 py-2"
                    style={{ fontSize: "15px", wordSpacing: "0px" }}
                  >
                    {" "}
                    In addition to transplantation, donated organs can also be
                    used for medical research, helping to advance our
                    understanding of diseases and develop new treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
