import { Form, Button, Col, Row } from 'react-bootstrap';

const CharacterSearch = ({ onSearch, onSubmitHandler }) => {

    return (
        < >
        <div className='bg-dark text-white'>
            <Form onSubmit={onSubmitHandler}>
                <Row >
                    <Col >
                        <Form.Group className="mr-5 ml-5 mt-2 text-center black inline" >
                            <Form.Label >Character Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Rick Sanchez" onChange={onSearch.onChangeName} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 mt-2 text-center black inline" >
                            <Form.Label >Character Status</Form.Label>
                            <Form.Control name="status" type="text" placeholder="Alive" onChange={onSearch.onChangeStatus} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 mt-2 text-center black inline" >
                            <Form.Label >Character Species</Form.Label>
                            <Form.Control name="species" type="text" placeholder="Human" onChange={onSearch.onChangeSpecies} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 mt-2 text-center black inline" >
                            <Form.Label >Character Type</Form.Label>
                            <Form.Control name="type" type="text" placeholder="Human with antennae" onChange={onSearch.onChangeType} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mr-5 ml-5 mt-2 text-center black inline" >
                            <Form.Label >Character Gender</Form.Label>
                            <Form.Control name="gender" type="text" placeholder="Male" onChange={onSearch.onChangeGender} />
                        </Form.Group>
                    </Col>
                    <Button className="mt-4 mb-3 d-grid gap-2" variant="outline-light" type="submit" size='lg'>
                        Search
                    </Button>
                </Row>
            </Form>
        </div >
        </>
    );
}

export default CharacterSearch;