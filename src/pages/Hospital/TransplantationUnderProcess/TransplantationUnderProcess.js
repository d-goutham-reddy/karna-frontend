import { useEffect, useState } from "react";
import { envs } from "../../../utils/endpoint";
import axios from "axios";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const baseURL = envs.endpoint;

const TransplantationUnderProcess = () => {


  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../../assests/marker-icon-2x.png'),
    iconUrl: require('../../../assests/marker-icon.png'),
    shadowUrl: require('../../../assests/marker-shadow.png')
  });


  const navigate = useNavigate();
  const [kidneyTransplant, setKidneyTransplant] = useState([
    {
      _id: "647c361d9de65d6005d2431e",
      status: "Booked",
      name: "Suja",
      address: "Andhrahalli Pakka, Bglore",
      phone: 8998989877,
      sex: "Male",
      DOB: "1999-06-24T12:00:00.734Z",
      bloodgroup: "O-",
      diabetes: true,
      priororgantransplant: true,
      dialysisDate: "2015-02-16T12:00:00.734Z",
      kidneydisease: "Chronic Kidney Disease",
      hlatype: "HLA-A",
      hlatypingmethod: "Polymerase Chain Reaction",
      pralevel: 5,
      hlaantigen: "HLA-A",
      pramethod: "Single Antigen Bead",
      sensitizationreason: "Previous Transplantation",
      height: 171,
      weight: 88,
      surgicalevaluationremarks: "all good bro np",
      otherdetails: "no probelm dude chill",
      rawepts: 1.9045193071995095,
      epts: 33,
      toHospital: {
        _id: "6478f4cb7e56ffe321a6044f",
        verificationStatus: "Verified",
        name: "Apollo",
        email: "hospital@gmail.com",
        password:
          "$2b$10$AMDaPGYxbv5qv7WZnOGFyuvtp9puS.wzAcGishB3n9RnGFpWr7FsG",
        address: "bglore banashankari",
        phone: 9999900000,
        hospitalregnum: "554567123478384294",
        role: "Hospital",
        createdAt: "2023-06-01T19:43:07.824Z",
        updatedAt: "2023-06-01T19:43:24.317Z",
        __v: 0,
      },
      createdAt: "2023-06-04T06:58:37.584Z",
      updatedAt: "2023-06-09T12:33:22.758Z",
      __v: 0,
      donorDetails: {
        familyPermission: false,
        _id: "6478f50a7e56ffe321a60453",
        fname: "Goutham",
        mname: "D",
        lname: "Reddy",
        email: "donor5@gmail.com",
        password:
          "$2b$10$sTJPexDaP8rV3T.x82VJveQ0DDd06hTZGeGymbmZsEF9oXR8yl3Y.",
        address: "K.R Puram,Kodigehalli",
        phone: 8861861428,
        sex: "Male",
        DOB: "2001-08-07T00:00:00.000Z",
        age: 52,
        bloodgroup: "A+",
        aadharId: 551675114222,
        emergencycontactname: "Sisters name",
        emergencycontactphone: 8296339964,
        role: "Donor",
        dead: true,
        permanentbanreason: "false",
        eligibledate: "2023-08-24T19:49:33.926Z",
        livessavedmeter: 0,
        points: 100,
        badge: "Enthusiast",
        volunteer: true,
        createdAt: "2023-06-01T19:44:10.191Z",
        updatedAt: "2023-06-06T19:28:20.771Z",
        __v: 0,
        lastdonationdate: "2023-06-01T19:49:33.926Z",
        organRequest: true,
        causeOfDeath: "Cerebrovascular Accident",
        creatinine: 1.7,
        dcd: true,
        diabetes: false,
        ethnicity: "Hispanic",
        hcv: false,
        height: 183,
        hypertension: true,
        weight: 81,
        kdpi: 68,
        kdrimed: 1.1970958469566073,
        feedback:
          "The Flawless Interface Between Blood and Organ Donation Removes The Complexity, Amazing Website",
      },
      fromHospital: {
        _id: "647c55313255a1264aab171e",
        verificationStatus: "Verified",
        name: "Pro Med",
        email: "hospital1@gmail.com",
        password:
          "$2b$10$U0/tYM/b422YdyXtiOac0.h7P7qFRrRboNsDLTaUXmcmCfpafVVSm",
        address: "bglore banashankari",
        phone: 9999900000,
        hospitalregnum: "554567123478384294",
        role: "Hospital",
        createdAt: "2023-06-04T09:11:13.313Z",
        updatedAt: "2023-06-04T09:11:37.756Z",
        __v: 0,
      },
      "lat": "16.557589",
      "long": "438.992166",
      "position": "35.43",
      "speed": "50"
    },
  ]);

  const [lon, setLon] = useState(13.007517);
  const [lat, setLan] = useState(77.491970);
  const [sp, setSp] = useState(0);


  let position = [13.007517, 77.491970]
  let speed = 50
  //geoData.lat, geoData.lng

  const handleArrived = () => {
    async function callApi() {
      try {
        await axios
          .put(`${baseURL}/hospital/transplantations/arrived/${kidneyTransplant[0]._id}/${localStorage.getItem('hospital_id')}`)
          .then((response) => {
            console.log(response.status)
            if (response.status === 200) {
              toast.success(`Succesfully `, {
                toastId: 'blood baner'
              })
              // props?.callForApiCallRerender();

            }
            else {
              toast.error(`unable to process `, {
                toastId: 'blood gister'
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
  }
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function callBloodApi() {
      try {
        await axios
          .get(
            `${baseURL}/hospital/transplantations/${localStorage.getItem("hospital_id")}`
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              console.log(response?.data);
              setKidneyTransplant(response?.data);
              setLon(Number(response.data[0].long));
              setLan(Number(response.data[0].lat));
              setSp(Number(response.data[0].speed));
              setEmpty(true)
              // Transplantation under progress 176
              // setLon(response?.data[0].lon);
              // setLan(response?.data[0].lat);
              // setSp(response?.data[0].sp);

            } else {
        setEmpty(false)

              console.log("response");
            }
          });
      } catch (e) {
        setEmpty(false)
        console.log(e);
      }
    }
    callBloodApi();
  }, []);

  // console.log(kidneyTransplant);
  console.log(lat, 'latitude')
  console.log(lon, 'longitude')
  console.log(sp, 'speed')


  return (
    <div className="mx-5 px-5 my-5  rounded">
      <h1 style={{
        color: '#fe452d92',
        fontWeight: '1000'
      }}>Kidney Transplantation</h1>
      <div className="mx-3 my-2">
        <div className="container">
          <div className="row gx-5">
            <div className="my-5 col" style={{
              boxShadow: '0px 0px 8px #fe452d92',
              fontWeight: '1000'
            }}>
              <h4 className="mt-4 mb-4" style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>
                Donor Details
              </h4>

              {/* {kidneyTransplant.map((ele) => {
            return ( */}
              <>
                {
                  empty ? <>           <p>
                  <span style={{
                    color: '#fe452d92',
                    fontWeight: '1000'
                  }}>{`Name:  `}</span>
                  {kidneyTransplant[0]?.name}
                </p>
                <p>
                  <span style={{
                    color: '#fe452d92',
                    fontWeight: '1000'
                  }}>
                    {`Blood Group: `}{" "}
                  </span>
                  {kidneyTransplant[0]?.bloodgroup}
                </p>
                <p>
                  <span style={{
                    color: '#fe452d92',
                    fontWeight: '1000'
                  }}>{`Phone No: `}</span>
                  {kidneyTransplant[0]?.phone}
                </p></>:<><p >No DATA<span style={{
                    color: '#fe452d92',
                    fontWeight: '1000'
                  }}>{`:(`}</span>
                   </p></>
                }
     
              </>
              {/* );
          })} */}
            </div>

            <div className="my-5 col" style={{
              boxShadow: '0px 0px 8px #fe452d92',
              fontWeight: '1000'
            }}>
              <h4 className="mt-4 mb-4" style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>
                From Hospital Details
              </h4>

              {/* {kidneyTransplant.map((ele) => {
            return (*/}
              <>
              {
                empty ? <><p>
                <span style={{
                  color: '#fe452d92',
                  fontWeight: '1000'
                }}>{`Name: `}</span>
                {kidneyTransplant[0]?.fromHospital.name}
              </p>
              <p>
                <span style={{
                  color: '#fe452d92',
                  fontWeight: '1000'
                }}>{`Address: `}</span>
                {kidneyTransplant[0]?.fromHospital.address}
              </p></>:<><p >No DATA<span style={{
                  color: '#fe452d92',
                  fontWeight: '1000'
                }}>{`:(`}</span>
                 </p></>
              }
                
              </>
              {/* );
          })} */}
            </div>

            <div className="my-5 col" style={{
              boxShadow: '0px 0px 8px #fe452d92',
              fontWeight: '1000'
            }}>
              <h4 className="mt-3 mb-4" style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>
                To Hospital Details
              </h4>

              {/* {kidneyTransplant.map((ele) => {
            return ( */}

            {
              empty? <><p>
              <span style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>{`Name: `}</span>
              {kidneyTransplant[0]?.toHospital.name}
            </p>
            <p>
              <span style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>{`Address: `}</span>
              {kidneyTransplant[0]?.toHospital?.address}
            </p></>:<><p >No DATA<span style={{
                color: '#fe452d92',
                fontWeight: '1000'
              }}>{`:(`}</span>
               </p></>
            }
              <>
                
              </>
              {/* //   );
          // })} */}
            </div>
          </div>
        </div>



      </div>
      <h1 className="mt-5" style={{
        color: '#fe452d92',
        fontWeight: '1000'
      }}>Live Location:</h1>
      <div className="my-3 mx-5 px-5">
        <MapContainer
          center={[lon, lat]}
          // center={['85.506525', '89.965645']}

          zoom={12}
          scrollWheelZoom={true}
          style={{ height: '40vh', width: "100%", }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[lat, lon]}

          >
            {/* <span>XX</span> */}
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            {/* <Popup>Speed: {sp}</Popup> */}
          </Marker>

        </MapContainer>
      </div>
      <div className="container d-flex justify-content-center my-5"><button className="btn btn-danger" onClick={handleArrived}>Arrived</button></div>
    </div>
  );
};

export default TransplantationUnderProcess;
