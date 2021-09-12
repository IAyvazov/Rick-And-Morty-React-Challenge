import { Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as charactersService from '../../services/charactersService';

const DetailsCard = (props) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        if (props.character) {
            setCharacter(props.character)
        }
        else {
            console.log(props.value.characte);
            charactersService.getOne(props.value.character)
                .then(res => setCharacter(res));
        }

    }, [props.value, props.character])

    return (
        <Col key={character?.name} className='mt-3 mb-3 ml-3 mr-3' style={{display: 'flex', flexDirection: 'row'}}>
            <Card className=" bg-dark text-white" style={{flex: 1}}>
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>Name: {character?.name}</Card.Title>
                    <Card.Text>
                        {character?.status === 'unknown' ? '' : "Status:" + character?.status}
                    </Card.Text>
                    <Card.Text>
                        {character?.species === 'unknown' ? '' : 'Species:' + character?.species}
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={{
                            pathname: `/character/origin/${character?.origin.name}`,
                            state: { locationUrl: character?.origin.url }
                        }} >
                            {character?.origin.name === 'unknown' ? '' : "Origin:" + character?.origin.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={{
                            pathname: `/character/location/${character?.location.name}`,
                            state: { locationUrl: character?.location.url }
                        }}>
                            {character?.location.name === 'unknown' ? '' : 'Location:' + character?.location.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        {character?.gender === 'unknown' ? '' : 'Gender:' + character?.gender}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DetailsCard;