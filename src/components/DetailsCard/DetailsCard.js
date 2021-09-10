import { Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as charactersService from '../../services/charactersService';

const DetailsCard = (props) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        charactersService.getOne(props.value.character)
            .then(res => setCharacter(res));
    }, [props.value])

    return (
        <Col key={character?.name} className= 'mt-3 mb-3 ml-3 mr-3'>
            <Card className=" bg-dark text-white">
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>Name: {character?.name}</Card.Title>
                    {character?.status === 'unknown' ? null : <Card.Text>Status: {character?.status}</Card.Text>}
                    {character?.species === 'unknown' ? null : <Card.Text>Species: {character?.species}</Card.Text>}
                    {character?.origin.name === 'unknown' ? null : <Card.Text> <Link style={{ textDecoration: 'none' }} to={{
                        pathname: `/character/origin/${character?.origin.name}`,
                        state: { locationUrl: character?.origin.url }
                    }} > Origin: {character?.origin.name} </Link> </Card.Text>}
                    {character?.location.name === 'unknown' ? null : <Card.Text> <Link style={{ textDecoration: 'none' }} to={{
                        pathname: `/character/location/${character?.location.name}`,
                        state: { locationUrl: character?.location.url }
                    }}>  Location: {character?.location.name} </Link> </Card.Text>}
                    {character?.gender === 'unknown' ? null : <Card.Text>Gender: {character?.gender}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DetailsCard;