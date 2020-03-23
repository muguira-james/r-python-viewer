
import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap'



const CreateCard = (title, description, data, media, button) => {
    // console.log("store->", store)s
    return (
        <tbody>
        <Card>
            <Container>
                <Row>
                    <Col xs="6">
                        <CardBody>
                            <CardTitle>{title}</CardTitle>

                            <CardText>{description}</CardText>
                            <CardText>{data}</CardText>
                            <Button id="name" onClick={() => button()} >Edit</Button>
                        </CardBody>
                    </Col>
                    <Col xs="6">
                        <img top width="30%" height="60%" src={media} alt="Card image cap" />
                    </Col>
                </Row>
            </Container>
        </Card>
        </tbody>
    )
}

export default CreateCard
