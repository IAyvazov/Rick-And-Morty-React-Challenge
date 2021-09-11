import { Row, Col, Pagination } from 'react-bootstrap';

import { useEffect, useState } from "react";
import * as episodesService from '../../services/episodesService';
import EpisodeCard from './EpisodeCard';
import CustomPagination from '../CustomPagination/CustomPagination';

const Episodes = () => {

    const [episodes, setEpisodes] = useState();
    const [page, setPage] = useState();


    useEffect(() => {
        episodesService.getAll(page)
            .then(res => setEpisodes(res));
    }, [page])

    const onCklickNext = () => {
        if (episodes.info.next == null) {
            return;
        }
        setPage(episodes.info.next)
    }

    const onClickPrev = () => {
        if (episodes.info.prev == null) {
            return;
        }
        setPage(episodes.info.prev)
    }

    return (
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
            {
                episodes?.results.map(episode => {
                    return (
                        <EpisodeCard episode={episode} />
                    )
                })
            }
            <CustomPagination onCklickNext={onCklickNext} onClickPrev={onClickPrev} />
        </Row>
    );
};

export default Episodes;