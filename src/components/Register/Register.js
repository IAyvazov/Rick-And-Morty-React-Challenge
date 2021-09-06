import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Register = () =>{
    return (
        <Container className = "border mt-5 mb-5 ml-5 mr-5 w-50 bg-dark text-white">
            <h1 color='white'>Register</h1>
            <Row className="justify-content-md-center">
                <Col  md="6">
                    <Form >
                        <Form.Group className="mr-5 ml-5 text-center black" controlId="formBasicEmail">
                            <Form.Label htmlFor="username" >Username</Form.Label>
                            <Form.Control  type="text" placeholder="Username" />
                        </Form.Group>
                        <Button className="mt-3 mb-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;