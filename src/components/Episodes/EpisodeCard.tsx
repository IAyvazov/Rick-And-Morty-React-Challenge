import { Link } from "react-router-dom";
import { Col, Card } from 'react-bootstrap';
import { FC } from "react";
import { IEpisodeProps } from "../../interfaces/interfaces";

const EpisodeCard: FC<IEpisodeProps> = ({ episode }) => {

    return (
        <Link key={episode.name + episode.air_date} style={{ textDecoration: 'none' }} to={`/episode/details/${episode.name}`} >
            <Col style={{ display: 'flex', flexDirection: 'row' }}>
                <Card className=" bg-dark text-white" style={{ flex: 1 }}>
                    <Card.Body>
                        <Card.Title>Episode: {episode.name}</Card.Title>
                        <Card.Text>
                            {episode.air_date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
}

export default EpisodeCard;