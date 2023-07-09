import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * bbName,
 * bbLoc,
 * bbNumber,
 * comp,
 * bloodGroup,
 * expiryDate,
 * plateletCount,
 * haemoglobinLvl,
 * rbcCnt,
 * report,
 * trsnplatPurpose,
 * PatName,
 * patPhone} props 
 * @returns 
 */
const  Delivered = (props)=> {


  return (
    <Card style={{
       width: '100%',
        margin:"0px 0px 0px 0px",
      }}>
    <Card.Body>
      <Card.Text><span>BLOOD BANK NAME:</span> {props.bbName}</Card.Text>
      <Card.Text><span>BLOOD BANK LOCATION:</span>{props.bbLoc}</Card.Text>
      <Card.Text><span>BLOOD BANK NUMBER:</span> {props.bbNumber}</Card.Text>
      <Card.Text><span>COMPONENT:</span> {props.comp}</Card.Text>
      <Card.Text><span>BLOOD GROUP:</span> {props.bloodGroup}</Card.Text>
      <Card.Text><span>EXPIRY DATE:</span> {props.expiryDate}</Card.Text>
      <Card.Text><span>PLATELET COUNT:</span> {props.plateletCount}</Card.Text>
      <Card.Text><span>HAEMOGLOBIN LEVEL:</span> {props.haemoglobinLvl}</Card.Text>
      <Card.Text><span>RED BLOOD CELL COUNT:</span> {props.rbcCnt}</Card.Text>
      <Card.Text><span>REPORT:</span> {props.report}</Card.Text>
      <Card.Text><span>TRANSFUSION PURPOSE</span>: {props.trsnplatPurpose}</Card.Text>
      <Card.Text><span>PATIENT NAME:</span> {props.PatName}</Card.Text>
      <Card.Text><span>PATIENT PHONE No:</span>{props.patPhone}</Card.Text>
    </Card.Body>
  </Card>
  )


}


export default Delivered;
