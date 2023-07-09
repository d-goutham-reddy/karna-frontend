import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * 
 * } props 
 * ExpDate,
 * BldGrp,
 * PltCnt,
 * HmLvl,
 * Rbc,
 * Rp,
 * type
 * @returns 
 */

const StockBLd = (props)=> {

  const handleProvide = ()=>{

  }

  
  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>EXPIRY DATE : {props.ExpDate}</Card.Text>
      <Card.Text>BLOOD GROUP : {props.BldGrp}</Card.Text>
      <Card.Text>PLATELET COUNT : {props.PltCnt}</Card.Text>
      <Card.Text>HAEMOGLOBIN LEVEL :{props.HmLvl}</Card.Text>
      <Card.Text>RED BLOOD CELL COUNT : {props.Rbc}</Card.Text>
      <Card.Text>REPORT : {props.Rp}</Card.Text>
      {
        props.type && <button className='btn btn-rpimary' onClick={handleProvide}>provide</button>
      }
    </Card.Body>
  </Card>
  )

}

export default StockBLd;
