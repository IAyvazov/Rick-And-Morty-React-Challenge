import { Row, Col, Pagination } from 'react-bootstrap';

import { useEffect, useState } from "react";
import * as episodesService from '../../services/episodesService';
import EpisodeCard from './EpisodeCard';

const Episodes = () => {

    const [episodes, setEpisodes] = useState();
    const [page, setPage] = useState({
        count: 1
    });

    useEffect(() => {
        episodesService.getAll(page.count)
            .then(res => setEpisodes(res));
    }, [page])

    return (
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
            {
                episodes?.results.map(episode => {
                    return (
                       <EpisodeCard episode={episode}/>
                    )
                })
            }
            <Col xs={6} md={4} xl={2} lg={5} >
                <Pagination fluid='md'>
                    <Pagination.Item onClick={() => { { setPage(oldPage => ({ count: oldPage.count - 1 })) } }} className='ml-5 mr-5'>
                        {'<<'}
                    </Pagination.Item>
                    <Pagination.Item onClick={() => { { setPage(oldPage => ({ count: oldPage.count + 1 })) } }} className='ml-5 mr-5'>
                        {'>>'}
                    </Pagination.Item>
                </Pagination>
            </Col>
        </Row>
    );
};

export default Episodes;