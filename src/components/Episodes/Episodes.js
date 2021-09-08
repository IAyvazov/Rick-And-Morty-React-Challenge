import { Card, Row, Col, Pagination } from 'react-bootstrap';

import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import * as episodesService from '../../services/episodesService';

const Episodes = () => {

    const [episodes, setEpisodes] = useState();
    const [page, setPage] = useState({
        count: 1
    });

    const authContext = useContext(AuthContext);

    useEffect(() => {
        episodesService.getAll(page.count)
            .then(res => setEpisodes(res));
    }, [page])

    return (
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
            {
                episodes?.results.map(episode => {
                    return (
                        <Col key={episode.name}>
                            <Card style={{ width: '18rem' }} className=" bg-dark text-white ">
                                <Card.Body>
                                    <Card.Title>Episode: {episode.name}</Card.Title>
                                    <Card.Text>
                                        {episode.air_date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
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