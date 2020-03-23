import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap'

const CreateData = () => {
    return (
        <tbody>
            <Card>
                <Row>
                    <Col xs="6">
                        <CardBody>
                            <CardTitle>Our Data</CardTitle>

                            <div>
                                <input type='file'
                                    id='file'
                                    className='input-file'
                                    accept='.js'
                                    onChange={this.OpenFile}
                                />
                            </div>

                        </CardBody>
                    </Col>
                </Row>

            </Card>

        </tbody>
    )
}

export default CreateData