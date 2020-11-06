import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 
class Footer extends Component {

    render() {
        return (

            <div>
                <Row style={{ 'marginTop': "20px" }}>
                    <Col>
                        <Button variant="success" onClick={() => this.props.popShow("Add")}>Add Money (+)</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={() => this.props.popShow()}>Spended Money (-)</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer