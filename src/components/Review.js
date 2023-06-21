import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Review({ reviews }) {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            {
                                reviews.map(i=>
                                    <ListGroup.Item>
                                        <p>Name: {i.name}</p>
                                        <h5>Date: {i.date}</h5>
                                        <h5>Rating: {i.rating}</h5>
                                        <h5>Comments: {i.comments}</h5>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default Review