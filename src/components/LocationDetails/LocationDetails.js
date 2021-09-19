import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Row, Spinner } from 'react-bootstrap';
import DetailsCard from '../DetailsCard';
import * as locationsService from '../../services/locationsService';

const LocationDetails = (props) => {

    const [name, setName] = useState();

    const { loading, error, data } = useQuery(locationsService.GetOne, {
        variables: { name },
    });

    useEffect(() => {
        setName(props.match.params.name)
    }, [props.match.params.name])


    if (loading) {
        return (
            <div className='mb-5'>
                <br />
                <div className="bg-dark text-white mt-5 text-center ">
                    <h1>Loading... <Spinner animation="border" variant="success" /></h1>
                </div>
                <br />
            </div>
        )
    }

    if (error) {
        return (
            <div className='mb-5'>
                <br />
                <p>Error: {error}</p>
            </div>
        )
    }

    return (
        <div className='mb-5'>
            <br />
            <div className="bg-dark text-white mt-5 text-center ">
                <h1>Location: {data?.locations?.results[0].name}</h1>
                <h2>Type: {data?.locations?.results[0].type}</h2>
                <h2>Dimension: {data?.locations?.results[0].dimension}</h2>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    data?.locations?.results[0].residents.map(character => {
                        return <DetailsCard key={character.name + character.image} value={{ character }}>
                        </DetailsCard>
                    })
                }
            </Row>
        </div>
    );
}

export default LocationDetails;