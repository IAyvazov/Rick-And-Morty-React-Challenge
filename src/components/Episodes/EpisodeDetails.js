import { Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import * as episodesService from '../../services/episodesService';
import DetailsCard from '../DetailsCard';


const EpisodeDetails = (props) => {

    const [episode, setEpisode] = useState();

    useEffect(() => {
        episodesService.getOne(props.match.params.id)
            .then(res => setEpisode(res))
    }, [props.match.params.id])

    return (
        <>
            <div  className = "bg-dark text-white mt-5 text-center ">
            <h1>Episode: {episode?.name}</h1>
            <h2>Date: {episode?.air_date}</h2>
        </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={4} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    episode?.characters.map(character => <DetailsCard value={{character}}/>)
                }
            </Row>
        </>
    );
}

export default EpisodeDetails;