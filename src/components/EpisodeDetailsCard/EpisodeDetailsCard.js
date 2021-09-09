import {Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import * as charactersService from '../../services/charactersService';

const EpisodeDetailsCard = (props) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        charactersService.getOne(props.value.character)
            .then(res =>  setCharacter(res));
    }, [props.value])

    return (
        
        <Col key={character?.name}>
            <Card className=" bg-dark text-white">
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>Name: {character?.name}</Card.Title>
                    <Card.Text>Status: {character?.status}</Card.Text>
                    <Card.Text>Species: {character?.species}</Card.Text>
                    <Card.Text>Origin: {character?.origin.name}</Card.Text>
                    <Card.Text>Location: {character?.location.name}</Card.Text>
                    <Card.Text>Gender: {character?.gender}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EpisodeDetailsCard;