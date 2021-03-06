import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Row, Spinner } from 'react-bootstrap';
import DetailsCard from '../DetailsCard';
import { GetOneLocation } from '../../graphql/queries/locationsQueries';
import { ICharacterProps, ILocationProps } from "../../interfaces/interfaces";

const LocationDetails: FC<ILocationProps> = ({location}) => {

    const [name, setName] = useState<string>();

    const { loading, error, data } = useQuery(GetOneLocation, {
        variables: { name },
    });

    useEffect(() => {
        setName(location.name)
    }, [location.name])


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
                    data?.locations?.results[0].residents.map((currentCharacter: ICharacterProps['character']) => {
                        return <DetailsCard key={currentCharacter.name + currentCharacter.image} character={currentCharacter}>
                        </DetailsCard>
                    })
                }
            </Row>
        </div>
    );
}

export default LocationDetails;