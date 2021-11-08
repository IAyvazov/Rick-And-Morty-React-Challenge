import { FC } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { IAuthFormProps } from '../../interfaces/interfaces';


const AuthForm: FC<IAuthFormProps> = ({ formName, OnSubmitHandler, OnChangeName }) => {
    return (
        <div className='mt-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container className="border w-25 bg-dark text-white shadow-lg p-3 mb-5 rounded h-25">
                <h1 color='white'>{formName}</h1>
                <Row className="justify-content-md-center ">
                    <Col md="6">
                        <Form method="post" onSubmit={OnSubmitHandler}>
                            <Form.Group className="mr-5 ml-5 text-center black" >
                                <Form.Label >Username</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Username" onChange={OnChangeName} />
                            </Form.Group>
                            <Button className="mt-3 mb-3" variant="outline-light" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AuthForm;