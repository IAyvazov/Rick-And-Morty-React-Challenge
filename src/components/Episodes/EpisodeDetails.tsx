import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { GetOneEpisode } from '../../graphql/queries/episodesQueries';
import DetailsCard from '../DetailsCard';
import { useQuery } from '@apollo/client';
import { ICharacterProps } from '../../interfaces/interfaces';


const EpisodeDetails = (props: any) => {

    const [name, setName] = useState();


    const { loading, error, data } = useQuery(GetOneEpisode, {
        variables: { name },
    });


    useEffect(() => {
        setName(props.match.params.id)
    }, [props.match.params.id])


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
                    <h1>Error : {error}</h1>
                </div>
            </>
        )
    }
    return (
        <div className='mb-5'>
            <br />
            <div className="bg-dark text-white mt-5 text-center ">
                <h1>Episode: {data.episodes?.results[0].name}</h1>
                <h2>Date: {data.episodes?.results[0].air_date}</h2>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    data.episodes?.results[0].characters.map((currentCharacter: ICharacterProps['character']) => <DetailsCard key={currentCharacter.name} character={currentCharacter} />)
                }
            </Row>
        </div>
    );
}

export default EpisodeDetails;