import { Link } from "react-router-dom";
import { Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from "react";
import * as locationsService from '../../services/locationsService';
import CustomPagination from '../CustomPagination/CustomPagination';

const Location = () => {

    const [locations, setLocaiions] = useState();
    const [page, setPage] = useState();


    useEffect(() => {
        locationsService.getAll(page)
            .then(res => setLocaiions(res));
    }, [page])

    const onCklickNext = () => {
        if (locations.info.next == null) {
            return;
        }
        setPage(locations.info.next)
    }

    const onClickPrev = () => {
        if (locations.info.prev == null) {
            return;
        }
        setPage(locations.info.prev)
    }

    return (
        <>
        <br/>
            <div className="bg-dark text-white mt-5 text-center ">
                <h1>Locations: {locations?.info.count}</h1>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    locations?.results.map(location => {
                        return (
                            <Link key={location.name + location.id} style={{ textDecoration: 'none' }} to={{
                                pathname: `/character/location/${location.name}`,
                                state: { locationUrl: location.url }
                            }} >
                                <Col style={{display: 'flex', flexDirection: 'row'}}>
                                    <Card style={{ width: '18rem',flex: 1 }} className=" bg-dark text-white" >
                                        <Card.Body>
                                            <Card.Title>Location: {location.name}</Card.Title>
                                            <Card.Text>
                                                Type: {location.type}
                                            </Card.Text>
                                            {
                                                location.dimension === 'unknown' ? null :
                                                    <Card.Text>
                                                        Dimension: {location.dimension}
                                                    </Card.Text>
                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Link>
                        )
                    })
                }
            </Row >
            <CustomPagination onCklickNext={onCklickNext} onClickPrev={onClickPrev} />
        </>
    );
}

export default Location;