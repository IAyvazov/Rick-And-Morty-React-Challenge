import { Link } from "react-router-dom";
import {Col ,Card } from 'react-bootstrap';

const EpisodeCard = (props)=>{

    return(
        <Link key={props.episode.name} style={{ textDecoration: 'none' }}  to= {`/episode/details/${props.episode.id}`} >
        <Col >
            <Card style={{ width: '18rem' }} className=" bg-dark text-white">
                <Card.Body>
                    <Card.Title>Episode: {props.episode.name}</Card.Title>
                    <Card.Text>
                        {props.episode.air_date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Link>
    );
}

export default EpisodeCard;