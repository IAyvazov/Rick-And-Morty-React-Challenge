import { useEffect, useState } from "react";

import { Row } from 'react-bootstrap';
import DetailsCard from '../DetailsCard';
import * as locationsService from '../../services/locationsService';

const LocationDetails = (props) => {

    const [location, setLocation] = useState();

    useEffect(() => {

        locationsService.getOne(props.location.state.locationUrl)
        .then(res=> setLocation(res))

    }, [props.location.state.locationUrl])

    return (
        <>
        <div  className = "bg-dark text-white mt-4 text-center ">
            <h1>Location: {location?.name}</h1>
            <h2>Type: {location?.type}</h2>
            <h2>Dimension: {location?.dimension}</h2>
        </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    location?.residents.map(character => {
                        return <DetailsCard value={{ character }}>
                        </DetailsCard>
                    })
                }
            </Row>
        </>
    );
}

export default LocationDetails;