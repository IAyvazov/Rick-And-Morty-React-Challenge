import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className = "border mt-5 mb-5 ml-5 mr-5 w-50 ">
            <Row>
                <Col md="6">
                    <Form>
                        <Form.Group className="mr-5 ml-5 text-center" controlId="formBasicEmail">
                            <Form.Label >Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
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

export default Login;