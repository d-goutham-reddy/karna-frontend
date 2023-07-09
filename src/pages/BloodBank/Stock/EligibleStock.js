import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { envs } from "../../../utils/endpoint";
import { toast } from "react-toastify";
import axios from "axios";
import "./BloodBankAppointmentUpcoming.scss";
import ok from "../../../assests/correct.png";
import wrong from "../../../assests/wrong.png";
import { Navigate, useNavigate } from "react-router-dom";

const baseURL = envs.endpoint;

const EligibleStock = () => {
  const navigate = useNavigate();

  const [bloodGroup, setBloodGroup] = useState("");
  const [platletCount, setPlateletCount] = useState(0);
  const [haemoglobin, setHaemoglobin] = useState(0);
  const [rbcCount, setRbcCount] = useState(0);
  const [report, setReport] = useState("");
  const [separationType, setSeprationType] = useState("");
  const [formValues, setFormValues] = useState("");

  // responseObj
  const [wholeResponse, setWholeResponse] = useState({
    _id: "6481dbe113cf2167219c5891",
    separationType: "whole",
    expiryDate: "2023-05-23T13:47:13.926Z",
    availablestatus: true,
    bloodDonationDetails: {
      _id: "6481da345e3b7244d25a2e7d",
      bloodgroup: "A+",
      location: "BB Blood Collectors",
      appdate: "2022-09-09T00:00:00.000Z",
      time: "09:30",
      status: "Completed",
      arriveStatus: true,
      donorDetails: "6479968c0c740919ca6772e5",
      bloodbankDetails: "6475aa9a147a82fa6164cf61",
      createdAt: "2023-06-08T13:40:04.268Z",
      updatedAt: "2023-06-08T13:47:13.752Z",
      __v: 0,
      haemoglobinLevel: "16 g/dL",
      plateletCount: "240,000 platelets/mcL",
      rbcCount: "5.5 million cells/µL",
      report:
        "keep it up..blood is absolutely healthy..no defects at all..good health",
    },
    createdAt: "2023-06-08T13:47:13.934Z",
    updatedAt: "2023-06-08T13:47:13.934Z",
    __v: 0,
  });

  const [BloodComponentResponse, setBloodComponentResponse] = useState([
    {
      _id: "648f3745851a2006f17a281a",
      separationType: "",
      expiryDate: "2023-07-23T16:56:37.070Z",
      availablestatus: true,
      bloodDonationDetails: {
        _id: "648eff2627a6ac947f55ca71",
        bloodgroup: "A-",
        location: "BB Blood Collectors",
        appdate: "2023-09-21T00:00:00.000Z",
        time: "09:30",
        status: "Completed",
        arriveStatus: true,
        donorDetails: "6479968c0c740919ca6772e5",
        bloodbankDetails: "6475aa9a147a82fa6164cf61",
        createdAt: "2023-06-18T12:57:10.971Z",
        updatedAt: "2023-06-18T16:56:36.904Z",
        __v: 0,
        RFID: "i am not gay okay!",
        haemoglobinLevel: "34534 g/dL",
        plateletCount: "235 platelets/mcL",
        rbcCount: "345345 cells/uL",
        report: "sdfg est ser srdf ",
      },
      createdAt: "2023-06-18T16:56:37.071Z",
      updatedAt: "2023-06-18T16:56:37.071Z",
      __v: 0,
    },
  ]);

  // overlays Whole
  const [wholeOverlayOne, setWholeOverlayOne] = useState(false);
  const [wholeSuccessOverlay, setWholeSuccessOverlay] = useState(false);

  const [ComponentRbcOverlay, setComponentRbcOverlay] = useState(false);
  const [ComponentRbcOkOverlay, setComponentRbcOkOverlay] = useState(false);

  const [ComponentPlateletsOverlay, setComponentPlateletsOverlay] =
    useState(false);
  const [ComponentPlateletsOkOverlay, setComponentPlateletsOkOverlay] =
    useState(false);

  const [ComponentPlasmaOverlay, setComponentPlasmaOverlay] = useState(false);
  const [ComponentPlasmaOkOverlay, setComponentPlasmaOkOverlay] =
    useState(false);

  const onChangeBloodGRoupHandler = (e) => {
    console.log(e.target.value);
    setBloodGroup(e.target.value);
  };
  const onChangePlateletHandler = (e) => {
    console.log(e.target.value);
    setPlateletCount(e.target.value);
  };
  const onChangeHaemoglobinHandler = (e) => {
    console.log(e.target.value);
    setHaemoglobin(e.target.value);
  };
  const onChangeRbcCountHandler = (e) => {
    console.log(e.target.value);
    setRbcCount(e.target.value);
  };
  const onChangeReportHandler = (e) => {
    console.log(e.target.value);
    setReport(e.target.value);
  };
  const onChangeSeparationTypeHandler = (e) => {
    console.log(e.target.value);
    setSeprationType(e.target.value);
  };

  useEffect(() => {
    setFormValues(() => {
      return {
        bloodgroup: bloodGroup,
        plateletCount: platletCount.toString() + " platelets/mcL",
        haemoglobinLevel: haemoglobin.toString() + " g/dL",
        rbcCount: rbcCount.toString() + " cells/uL",
        report: report,
        separationType: separationType,
      };
    });
  }, [bloodGroup, haemoglobin, rbcCount, report, separationType]);

  const handleWholeRequests = () => {
    setFormValues((prev) => {
      return {
        ...prev,
      };
    });
    async function callApi() {
      try {
        await axios
          .put(
            `${baseURL}/bloodbank/stock/new/create/${localStorage.getItem(
              "stock_details_id"
            )}`,
            {
              ...formValues,
              separationType: "whole"
            
            }
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              toast.success(`Succesfully `, {
                toastId: "blood bank register",
              });
              setWholeResponse(response.data[0]);
              setWholeOverlayOne(true);
            } else {
              toast.error(`unable to process`, {
                toastId: "blood bank register",
              });
              throw Error;
            }
          });
      } catch (e) {
        toast.error(`unable to process`, {
          toastId: "blood bank register",
        });
        console.log(e);
      }
    }
    callApi();
  };

  const handleComponentsRequests = () => {
    const componentsForms = {
      bloodgroup: bloodGroup,
      plateletCount: platletCount.toString() + " platelets/mcL",
      haemoglobinLevel: haemoglobin.toString() + " g/dL",
      rbcCount: rbcCount.toString() + " cells/uL",
      report: report,
      separationType: "components",
    };

    console.log(formValues);
    async function callApi() {
      try {
        await axios
          .put(
            `${baseURL}/bloodbank/stock/new/create/${localStorage.getItem(
              "stock_details_id"
            )}`,
            {
              ...componentsForms,
              separationType: "components"
            }
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              toast.success(`Succesfully verfied `, {
                toastId: "blood bank register",
              });
              setBloodComponentResponse(response.data);
              setComponentRbcOverlay(true);
            } else {
              toast.error(`unable to verify`, {
                toastId: "blood bank register",
              });
              throw Error;
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
    callApi();
  };

  const HandleWholeInsert = () => {
    async function callApi() {
      try {
        await axios
          .get(
            `${baseURL}/bloodbank/stock/new/create/insertdata/${wholeResponse._id}`
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              toast.success(`Succesfully ! `, {
                toastId: "blood bank register",
              });
              setWholeOverlayOne(false);
              setWholeSuccessOverlay(true);
            } else {
              toast.error(`unable to verify`, {
                toastId: "blood bank register",
              });
              throw Error;
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
    callApi();
  };

  console.log(formValues);

  const CallInserts = (insertID, typer) => {
    async function callApi() {
      try {
        await axios
          .get(`${baseURL}/bloodbank/stock/new/create/insertdata/${insertID}`)
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              toast.success(`Succesfully verfied `, {
                toastId: "blood bank register",
              });
              if(typer === 'rbc'){
                setComponentRbcOkOverlay(true);
              }
              else if(typer === 'platelets'){
                setComponentPlateletsOkOverlay(true);
              }
              else if(typer === 'plasma'){
                setComponentPlasmaOkOverlay(true);
              }
              // setComponentRbcOverlay(false);
            } else {
              toast.error(`unable to verify`, {
                toastId: "blood bank register",
              });
              throw Error;
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
    callApi();
  };

  return (
    <Fragment>
      {wholeOverlayOne && (
        <>
          <div className="card_insert">
            <div className="box">
              <div className="header">
                <span onClick={() => setWholeOverlayOne(false)}>X</span>
              </div>
              <h4 className="my-4 mx-3">
                Details About To Be Written Into The RFID Tag are
              </h4>
              <div className="img-dis my-3">
                <div>
                  <p>
                    Blood Group: {wholeResponse.bloodDonationDetails.bloodgroup}
                  </p>
                  <p>Separation Type: {wholeResponse.separationType}</p>
                  <p>Expiry Date: {wholeResponse.expiryDate}</p>
                  {/* <p>Available Status: {wholeResponse.availablestatus}</p> */}
                  <p>
                    Platelet Count:{" "}
                    {wholeResponse.bloodDonationDetails.plateletCount}
                  </p>
                  <p>
                    Haemoglobin Level:{" "}
                    {wholeResponse.bloodDonationDetails.haemoglobinLevel}
                  </p>
                  <p>
                    Red Blood Cell Count:{" "}
                    {wholeResponse.bloodDonationDetails.rbcCount}
                  </p>
                  <p>Report: {wholeResponse.bloodDonationDetails.report}</p>
                </div>
                <button
                  className="btn btn-success rounded my-3"
                  onClick={HandleWholeInsert}
                >
                  Insert
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {wholeSuccessOverlay && (
        <>
          <div className="card_insert">
            <div className="box">
              <div className="header">
                <span onClick={() => setWholeOverlayOne(false)}>X</span>
              </div>
              <div className="img-dis my-3 mx-4 p-4">
                <h4>Details Inserted Successfully</h4>
                <img src={ok} alt="" height={70} width={70} />
                <button
                  className="btn btn-success rounded my-3 px-5 py-2"
                  onClick={() => {
                    navigate("/bloodbank/stock");
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {ComponentRbcOverlay ? (
        <>
          {ComponentRbcOkOverlay ? (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <img src={ok} alt="ok img" height={100} width={100}/>
                    <h4 className="my-5">Details Inserted Succesfully</h4>
                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      style={{fontSize:'25px', fontWeight:'900'}}
                      onClick={() => {
                        setComponentRbcOverlay(false);
                        setComponentPlateletsOverlay(true);
                      }}
                    >
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="header">
                    {/* <span onClick={() => setWholeOverlayOne(false)}>X</span> */}
                  </div>
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <h4 className="my-5">
                      Details About to be written into the RFID The are
                    </h4>
                    <p>
                      Blood GroupL{" "}
                      {
                        BloodComponentResponse[0].bloodDonationDetails
                          .bloodgroup
                      }
                    </p>
                    <p>
                      Sepration Type {BloodComponentResponse[0].separationType}
                    </p>
                    <p>
                      Expiry Date :{" "}
                      {BloodComponentResponse[0].expiryDate.slice(0, 10)}
                    </p>
                    <p>
                      Platelet Count:{" "}
                      {
                        BloodComponentResponse[0].bloodDonationDetails
                          .plateletCount
                      }
                    </p>
                    <p>
                      Haemoglobin Level:{" "}
                      {
                        BloodComponentResponse[0].bloodDonationDetails
                          .haemoglobinLevel
                      }
                    </p>
                    <p>
                      Red Blood Cell Count:{" "}
                      {BloodComponentResponse[0].bloodDonationDetails.rbcCount}
                    </p>
                    <p>
                      Report:{" "}
                      {BloodComponentResponse[0].bloodDonationDetails.report}
                    </p>

                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      onClick={() => {
                        CallInserts(BloodComponentResponse[0]._id, 'rbc');
                        // setComponentRbcOkOverlay(true);
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}

      {ComponentPlateletsOverlay ? (
        <>
          {ComponentPlateletsOkOverlay ? (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <img src={ok} alt="ok img" width={100} height={100}/>
                    <h4 className="my-5">Details Inserted Succesfully</h4>
                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      style={{fontSize:'25px', fontWeight:'900'}}
                      onClick={() => {
                        setComponentPlateletsOverlay(false);
                        setComponentPlasmaOverlay(true);
                      }}
                    >
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="header">
                    {/* <span onClick={() => setWholeOverlayOne(false)}>X</span> */}
                  </div>
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <h4 className="my-5">
                      Details About to be written into the RFID The are
                    </h4>
                    <p>
                      Blood GroupL{" "}
                      {
                        BloodComponentResponse[1].bloodDonationDetails
                          .bloodgroup
                      }
                    </p>
                    <p>
                      Sepration Type {BloodComponentResponse[1].separationType}
                    </p>
                    <p>
                      Expiry Date :{" "}
                      {BloodComponentResponse[1].expiryDate.slice(0, 10)}
                    </p>
                    <p>
                      Platelet Count:{" "}
                      {
                        BloodComponentResponse[1].bloodDonationDetails
                          .plateletCount
                      }
                    </p>
                    <p>
                      Haemoglobin Levele:{" "}
                      {
                        BloodComponentResponse[1].bloodDonationDetails
                          .haemoglobinLevel
                      }
                    </p>
                    <p>
                      Red Blood Cell Count:{" "}
                      {BloodComponentResponse[1].bloodDonationDetails.rbcCount}
                    </p>
                    <p>
                      Report:{" "}
                      {BloodComponentResponse[1].bloodDonationDetails.report}
                    </p>

                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      onClick={() => {
                        CallInserts(BloodComponentResponse[1]._id, 'platelets');
                        
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}

      {ComponentPlasmaOverlay ? (
        <>
          {ComponentPlasmaOkOverlay ? (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <img src={ok} alt="ok img" width={100} height={100}/>
                    <h4 className="my-5">Details Inserted Succesfully</h4>
                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      style={{fontSize:'25px', fontWeight:'900'}}
                      onClick={() => {
                        // setComponentPlasmaOverlay(false);
                        navigate("/bloodbank/stock");
                      }}
                    >
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card_insert">
                <div className="box">
                  <div className="header">
                    {/* <span onClick={() => setWholeOverlayOne(false)}>X</span> */}
                  </div>
                  <div className="img-dis my-3 mx-4 p-4 text-center">
                    <h4 className="my-5">
                      Details About to be written into the RFID The are
                    </h4>
                    <p>
                      Blood GroupL{" "}
                      {
                        BloodComponentResponse[2].bloodDonationDetails
                          .bloodgroup
                      }
                    </p>
                    <p>
                      Sepration Type {BloodComponentResponse[2].separationType}
                    </p>
                    <p>
                      Expiry Date :{" "}
                      {BloodComponentResponse[2].expiryDate.slice(0, 10)}
                    </p>
                    <p>
                      Platelet Count:{" "}
                      {
                        BloodComponentResponse[2].bloodDonationDetails
                          .plateletCount
                      }
                    </p>
                    <p>
                      Haemoglobin Levele:{" "}
                      {
                        BloodComponentResponse[2].bloodDonationDetails
                          .haemoglobinLevel
                      }
                    </p>
                    <p>
                      Red Blood Cell Count:{" "}
                      {BloodComponentResponse[2].bloodDonationDetails.rbcCount}
                    </p>
                    <p>
                      Report:{" "}
                      {BloodComponentResponse[2].bloodDonationDetails.report}
                    </p>

                    <button
                      className="btn btn-success rounded my-3 px-5 py-2"
                      onClick={() => {
                        CallInserts(BloodComponentResponse[2]._id, 'plasma');
                        
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}

      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h3 className="my-5">Enter the Following Values</h3>
        <Form className="border  w-lg-75 w-sm-100 rounded p-3 w-75 ">
          <Form.Group
            className="mb-3"
            onChange={onChangeBloodGRoupHandler}
            name="bloodgroup"
          >
            <Form.Label>Blood group</Form.Label>

            <div className="mb-3">
              <Form.Check
                inline
                label="A+"
                value="A+"
                id="A+"
                name="bloodgroup"
                type={"radio"}
              />
              <Form.Check
                inline
                label="B+"
                id="B+"
                name="bloodgroup"
                type={"radio"}
                value="B+"
              />
              <Form.Check
                inline
                label="AB+"
                id="AB+"
                name="bloodgroup"
                type={"radio"}
                value="AB+"
              />
              <Form.Check
                inline
                label="O+"
                id="O+"
                name="bloodgroup"
                type={"radio"}
                value="O+"
              />
              <Form.Check
                inline
                label="A-"
                id="A-"
                name="bloodgroup"
                type={"radio"}
                value="A-"
              />
              <Form.Check
                inline
                label="B-"
                id="B-"
                name="bloodgroup"
                type={"radio"}
                value="B-"
              />
              <Form.Check
                inline
                label="AB-"
                id="AB-"
                name="bloodgroup"
                type={"radio"}
                value="AB-"
              />
              <Form.Check
                inline
                label="O-"
                id="O-"
                name="bloodgroup"
                type={"radio"}
                value="O-"
              />
            </div>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="plateletCount"
            onChange={onChangePlateletHandler}
          >
            <Form.Label>Platelet Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Eg. 240, 000 platelets/mcL"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="haemoglobin"
            onChange={onChangeHaemoglobinHandler}
          >
            <Form.Label>Haemoglobin Level</Form.Label>
            <Form.Control type="number" placeholder="Eg. 16 g/dL" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="rbc"
            onChange={onChangeRbcCountHandler}
          >
            <Form.Label>Red Blood Cells</Form.Label>
            <Form.Control
              type="number"
              placeholder="Eg. 5.5 million cells/uL"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="report"
            onChange={onChangeReportHandler}
          >
            <Form.Label>Report</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg.blood has no Diseases. It is Healthy"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            // onChange={onChangeSeparationTypeHandler}
            name="separationType"
          >
            <Form.Label>Sepration Type</Form.Label>
            <div className="mb-3">
              <Form.Check
                inline
                label="whole"
                value="whole"
                name="separationType"
                type={"radio"}
                id="compoennetsWhole"
                onClick={handleWholeRequests}
              />
              <Form.Check
                inline
                label="components"
                name="separationType"
                type={"radio"}
                value="components"
                id="componentsComponents"
                onClick={handleComponentsRequests}
              />
            </div>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default EligibleStock;
