import { Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = (props) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        setCharacter(props.value.character)
    }, [props.value.character])

    return (
        <Col key={character?.name} className='mt-3 mb-3 ml-3 mr-3' style={{ display: 'flex', flexDirection: 'row' }}>
            <Card className=" bg-dark text-white" style={{ flex: 1 }}>
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>Name: {character?.name}</Card.Title>
                    <Card.Text>
                        {character?.status === 'unknown' ? '' : "Status: " + character?.status}
                    </Card.Text>
                    <Card.Text>
                        {character?.species === 'unknown' ? '' : 'Species: ' + character?.species}
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={`/character/origin/${character?.origin.name}`} >
                            {character?.origin.name === 'unknown' ? '' : "Origin: " + character?.origin.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={`/character/location/${character?.location.name}`}>
                            {character?.location.name === 'unknown' ? '' : 'Location: ' + character?.location.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        {character?.gender === 'unknown' ? '' : 'Gender: ' + character?.gender}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DetailsCard;