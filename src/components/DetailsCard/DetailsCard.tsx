import { Col, Card } from 'react-bootstrap';
import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { ICharacterProps } from '../../interfaces/interfaces';

const DetailsCard: FC<ICharacterProps> = ({character}) => {

    const [currentCharacter, setCharacter] = useState(character);

    useEffect(() => {
        setCharacter(character)
    }, [character])

    return (
        <Col key={character?.name} className='mt-3 mb-3 ml-3 mr-3' style={{ display: 'flex', flexDirection: 'row' }}>
            <Card className=" bg-dark text-white" style={{ flex: 1 }}>
                <Card.Img variant="top" src={currentCharacter?.image} />
                <Card.Body>
                    <Card.Title>Name: {currentCharacter?.name}</Card.Title>
                    <Card.Text>
                        {currentCharacter?.status === 'unknown' ? '' : "Status: " + currentCharacter?.status}
                    </Card.Text>
                    <Card.Text>
                        {currentCharacter?.species === 'unknown' ? '' : 'Species: ' + currentCharacter?.species}
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={`/character/origin/${currentCharacter?.origin.name}`} >
                            {currentCharacter?.origin.name === 'unknown' ? '' : "Origin: " + currentCharacter?.origin.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        <Link style={{ textDecoration: 'none' }} to={`/character/location/${currentCharacter?.location.name}`}>
                            {currentCharacter?.location.name === 'unknown' ? '' : 'Location: ' + currentCharacter?.location.name}
                        </Link>
                    </Card.Text>
                    <Card.Text>
                        {currentCharacter?.gender === 'unknown' ? '' : 'Gender: ' + currentCharacter?.gender}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DetailsCard;