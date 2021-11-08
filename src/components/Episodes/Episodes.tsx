import { useState } from "react";
import { Row, Spinner } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GetAllEpisodes } from '../../graphql/queries/episodesQueries';
import EpisodeCard from './EpisodeCard';
import CustomPagination from '../CustomPagination/CustomPagination';
import { IEpisodeProps } from "../../interfaces/interfaces";

const Episodes = () => {

    const [page, setPage] = useState(1);


    const { loading, error, data } = useQuery(GetAllEpisodes, {
        variables: { page },
    });


    const onClickNext = () => {
        if (data.episodes.info.next == null) {
            return;
        }
        setPage(data.episodes.info.next)
    }

    const onClickPrev = () => {
        if (data.episodes.info.prev == null) {
            return;
        }
        setPage(data.episodes.info.prev)
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
                    <h1>Episodes: {data.episodes?.info.count}</h1>
                </div>
                <h1>Error : {error}</h1>
            </>
        )
    }


    return (
        <>
            <br />
            <div className="bg-dark text-white mt-5 text-center ">
                <h1>Episodes: {data.episodes?.info.count}</h1>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                {
                    data.episodes?.results.map((episode: IEpisodeProps['episode']) => {
                        return (
                            <EpisodeCard key={episode.name + episode.air_date} episode={episode} />
                        )
                    })
                }
            </Row>
            <CustomPagination onClickNext={onClickNext} onClickPrev={onClickPrev} />
        </>
    );
};

export default Episodes;