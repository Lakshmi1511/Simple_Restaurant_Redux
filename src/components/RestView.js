import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css'
import OperatingTime from './OperatingTime'
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../restAction';

function RestView() {

    //object for useSelector
    const result = useSelector(state => state.reducer1)
    const { restList } = result

    //create object for useDispatch hook
    const dispatch = useDispatch()
    //  console.log(allRest);

    //object for useParams hook
    const params = useParams()
    //find single product
    const singleRest = restList.find(i => i.id == params.id)
    console.log(singleRest);
    useEffect(() => {
        dispatch(getData)
    }, [])
    return (
        <>
            {
                singleRest ? (
                    <Row>
                        <Col lg={6} md={12} sm={12} xl={6}>
                            <Image className='w-75 p-5'
                                style={{ height: '650px' }}
                                src={singleRest.photograph} rounded />
                        </Col>
                        <Col lg={6} md={12} sm={12} xl={4}>
                            <h1>{singleRest.name}</h1>
                            <ListGroup className='fs-5 mt-5 text-start'>
                                <ListGroup.Item id='d' className='p-3 mt-2'>Neighborhood<strong className='text-warning'> {singleRest.neighborhood}</strong></ListGroup.Item>
                                <ListGroup.Item id='d' className='p-3 mt-2'>Address<strong className='text-warning'> {singleRest.address}</strong> </ListGroup.Item>
                                <ListGroup.Item id='d' className='p-3 mt-2'>Cuisine Type<strong className='text-warning'> {singleRest.cuisine_type}</strong></ListGroup.Item>
                                <ListGroup.Item id='d' className='p-3 mt-2'><OperatingTime timeData={singleRest.operating_hours} /></ListGroup.Item>
                                <ListGroup.Item className='p-3 mt-2'><Review reviews={singleRest.reviews} /></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                ) : 'null'}

        </>
    )
}

export default RestView