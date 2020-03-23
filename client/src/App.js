import React from 'react';
import logo_R from './R.png'
import logo_Python from './Python.png'


import CreateCard from './CreateCard'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap'


import {

    Table,
     Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


const fs = require('fs')

var ttheData = null

var cards = [
    {
        title: "R descriptive statistics",
        description: "Provide the mean, median, standard Dev",
        data: "",
        media: logo_R
    },
    {
        title: "Python regression",
        description: "Provide linear regression info",
        data: "",
        media: logo_Python
    }
]

const FileSelector = (props) => {
    return (
        <div>
            <input type="file" onChange={(e) => props.handleChange(e.target.files)} />
        </div>
    )

}


async function postData(url = '', data = {}) {
    console.log("---P--->", data)
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
    });
    return await response.json(data); // parses JSON response into native JavaScript objects
}


async function getData(url = '') {

    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin

    });
    return await response // parses JSON response into native JavaScript objects
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            fileName: "",
            data: "",
            card1_title: "R descriptive statistics",
            card1_description: "Provide the mean, median, standard Dev",
            card1_data: "",
            card1_media: logo_R,


            card2_title: "Python regression",
            card2_description: "Provide linear regression info",
            card2_data: "",
            card2_media: logo_Python


        }
    }


    toggle = () => { this.setState({ modal: !this.state.modal }) }



    handleFile = (e) => {
        //
        // first we hit python
        //
        let d = e.target.result
        let urlPy = "https://pycompute.herokuapp.com/stats/regression"
        // let url = "http://127.0.0.1:5000/stats/describe"
        postData(urlPy, d).then((data) => {
            let it = `slope = ${data.slope} intercept = ${data.intercept} r_value = ${data.r_value} p_value = ${data.p_value}`
            this.setState({ card2_data: it })
        })

        this.setState({ card1_data: d })
        this.setState({ data: e.target.result })

        //
        // then R
        //
        // let urlR = 'http://localhost:8090/describe?v={ "v": [1,2,3,4,5,6,7,8,9,0,23,43,6,5,76,12,31,22,21,18,17 ]  }'
        let urlR = 'http://rcompute.herokuapp.com/describe?v={ "v": [1,2,3,4,5,6,7,8,9,0,23,43,6,5,76,12,31,22,21,18,17 ]  }'
        fetch(urlR).then((response) => { return response.json() }).then((data) => {
            console.log("--RR-->", data[0])

            this.setState({ card1_data: data[0] })
        })
    }
    OpenFile = (e) => {
        console.log("--4-->", e.target.files[0].name)
        var input = e.target;


        var reader = new FileReader();

        reader.onload = this.handleFile
        reader.onloadend = this.hendleFile
        reader.readAsText(input.files[0]);


    }

    render() {
        console.log("--R->", this.state.data)
        return (
            <div>
       
                <div >
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            {this.state.card1_data}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Table>
                    <tbody>
            <Card>
                <Container>
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
                            <CardText>{this.state.data}</CardText>
                        </CardBody>
                    </Col>
                </Row>
                </Container>
            </Card>

        </tbody>
                      
                        {
                            CreateCard(
                                this.state.card1_title,
                                this.state.card1_description,
                                this.state.card1_data,
                                this.state.card1_media,
                                this.toggle
                            )
                        }
                        {
                            CreateCard(
                                this.state.card2_title,
                                this.state.card2_description,
                                this.state.card2_data,
                                this.state.card2_media,
                                this.toggle
                            )
                        }
                    </Table>
                </div>
            </div>
        );
    }
}
export default App;

/*
<FileSelector handleChange={(e) => this.getFile(e)}  >Choose file</FileSelector>
*/
