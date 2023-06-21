import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../restAction';

function Home() {
    //object for useSelector
const result=useSelector(state=>state.reducer1)
const {restList}=result
//
//const[restList,setRestList]=useState([])
//api function
// const getRest=async()=>{
//     //store response
//     const result=await fetch('/restaurants.json')
//     //convert data into js    
//     result.json().then(data=>{
//         //store data in store
//         setRestList(data.restaurants);
//     })
// }
//console.log(restList);
const dispatch=useDispatch()
useEffect(()=>{
    // getRest()
    dispatch(getData)
},[])
  return (
    <Row>
       {
        restList.map(i=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Link to={`viewrest/${i.id}`}style={{textDecoration:'none'}}>
            <Card id='d' className='m-4 p-3' style={{ width: '18rem' }}>
            <Card.Img className='w-100' variant="top" src={i.photograph} />
            <Card.Title className='mt-4 text-center'><strong>{i.name}</strong></Card.Title>
            <Card.Body>
              <Card.Text>
               {i.address}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          </Col>
        ))
       }
    </Row>
  )
}

export default Home