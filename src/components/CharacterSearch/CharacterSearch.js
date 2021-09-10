import { Form, Button, Col, Row } from 'react-bootstrap';

const CharacterSearch = () => {

    return (
        <div className='bg-dark text-white '>
            <Form>
                <Row>
                    <Col >
                        <Form.Group className="mr-5 ml-5 text-center black inline" >
                            <Form.Label >Character Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 text-center black inline" >
                            <Form.Label >Character Status</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Status" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 text-center black inline" >
                            <Form.Label >Character Species</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Species" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 text-center black inline" >
                            <Form.Label >Character Type</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Type" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 text-center black inline" >
                            <Form.Label >Character Gender</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Gender" />
                        </Form.Group>
                    </Col>
                        <Button className="mt-4 mb-3 d-grid gap-2" variant="outline-light" type="submit" size='lg'>
                            Search
                        </Button>
                </Row>
            </Form>
            {/* <Form method="post">
                <Form.Group className="mr-5 ml-5 text-center black inline" >
                    <Form.Label >Character Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" />
                </Form.Group>
               
                
               
               
            </Form > */}
        </div >
    );
}

export default CharacterSearch;