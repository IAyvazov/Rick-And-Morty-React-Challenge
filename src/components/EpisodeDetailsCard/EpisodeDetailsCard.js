import {Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import * as charactersService from '../../services/charactersService';

const EpisodeDetailsCard = (props) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        console.log(props.name);
        charactersService.getOne(props.name)
            .then(res => setCharacter(res));
    }, [props.name])

    return (
        <Col >
            <Card>
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>{character?.name}</Card.Title>
                    <Card.Title>{character?.status}</Card.Title>
                    <Card.Title>{character?.species}</Card.Title>
                    <Card.Title>{character?.origin}</Card.Title>
                    <Card.Title>{character?.location}</Card.Title>
                    <Card.Title>{character?.geder}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EpisodeDetailsCard;