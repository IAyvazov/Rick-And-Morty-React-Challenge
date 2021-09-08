import {Row} from 'react-bootstrap';
import { useEffect, useState } from "react";
import * as episodesService from '../../services/episodesService';
import EpisodeDetailsCard from '../EpisodeDetailsCard';


const Details = (props) => {

    const [episode, setEpisode] = useState();

    useEffect(() => {
        episodesService.getOne(props.match.params.id)
            .then(res => setEpisode(res))
    }, [props.match.params.id])

    return (
        <>
            <h1>Episode: {episode?.name}</h1>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
            {
                 episode?.characters.map(character => {
                     console.log(character);
                  return  <EpisodeDetailsCard  name={character}>
                    </EpisodeDetailsCard>
                })
            }
            </Row>
        </>
    );
}

export default Details;