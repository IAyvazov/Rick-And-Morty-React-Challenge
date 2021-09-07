import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const AuthForm = (props) => {
    return (
        <Container className="border mt-5 mb-5 ml-5 mr-5 w-50 bg-dark text-white">
            <h1 color='white'>{props.formName}</h1>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Form method="post" onSubmit={props.OnSubmitHandler}>
                        <Form.Group className="mr-5 ml-5 text-center black" >
                            <Form.Label >Username</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Username" onChange={props.onChangeName} />
                        </Form.Group>
                        <Button className="mt-3 mb-3" variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AuthForm;