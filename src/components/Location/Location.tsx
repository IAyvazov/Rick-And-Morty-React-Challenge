import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GetAllLocations } from '../../graphql/queries/locationsQueries';
import CustomPagination from '../CustomPagination/CustomPagination';
import { ILocationProps } from "../../interfaces/interfaces";

const Location = () => {

    const [page, setPage] = useState(1);

    const { loading, error, data } = useQuery(GetAllLocations, {
        variables: { page },
    });


    const onClickNext = () => {
        if (data?.locations.info.next == null) {
            return;
        }
        setPage(data?.locations.info.next)
    }

    const onClickPrev = () => {
        if (data?.locations.info.prev == null) {
            return;
        }
        setPage(data?.locations.info.prev)
    }

    if (loading) {
        return (
            <>
                <br />
                <div className="bg-dark text-white mt-5 text-center ">
                    <h1>Loading... <Spinner animation="border" variant="success" /></h1>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <br />
                <div className="bg-dark text-white mt-5 text-center ">
                    <h1>Error: {error}</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <br />
            <div className="bg-dark text-white mt-5 text-center ">
                <h1>Locations: {data?.locations?.info.count}</h1>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    data?.locations?.results.map((location: ILocationProps['location']) => {
                        return (
                            <Link key={location.name + location.id} style={{ textDecoration: 'none' }} to={`/character/location/${location.name}`} >
                                <Col style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Card style={{ width: '18rem', flex: 1 }} className=" bg-dark text-white" >
                                        <Card.Body>
                                            <Card.Title>Location: {location.name}</Card.Title>
                                            {
                                                location.type === 'unknown' ? null :
                                                    <Card.Text>
                                                        Type: {location.type}
                                                    </Card.Text>
                                            }
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
            <CustomPagination onClickNext={onClickNext} onClickPrev={onClickPrev} />
        </>
    );
}

export default Location;