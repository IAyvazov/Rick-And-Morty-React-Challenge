import { Link } from "react-router-dom";
import { Col, Card } from 'react-bootstrap';

const EpisodeCard = (props : any) => {

    return (
        <Link key={props.episode.name + props.episode.air_date } style={{ textDecoration: 'none' }} to={`/episode/details/${props.episode.name}`} >
            <Col style={{ display: 'flex', flexDirection: 'row' }}>
                <Card className=" bg-dark text-white" style={{ flex: 1 }}>
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