import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import { Link } from "react-router-dom";
import {Col ,Card } from 'react-bootstrap';

const EpisodeCard = (props)=>{

    const user = useContext(AuthContext);

    return(
        <Link key={props.episode.name} style={{ textDecoration: 'none' }}  to= { user ? `/episode/details/${props.episode.id}` : '/login'} >
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