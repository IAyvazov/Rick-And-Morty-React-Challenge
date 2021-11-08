import CharacterSearch from "../CharacterSearch"
import { useState } from 'react';
import { GetAllCharacters } from '../../graphql/queries/charactersQueries';
import DetailsCard from "../DetailsCard";
import { Row, Spinner } from 'react-bootstrap';
import CustomPagination from "../CustomPagination/CustomPagination";
import { useQuery } from "@apollo/client";
import { ICharacterProps } from "../../interfaces/interfaces";


const Characters = () => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
    });

    const { loading, error, data } = useQuery(GetAllCharacters, {
        variables: {
            page,
            name: search.name,
            status: search.status,
            species: search.species,
            type: search.type,
            gender: search.gender
        }
    })


    const onSubmitSearch = (e: any) => {
        e.preventDefault();
        setSearch(oldName => ({
            ...oldName,
            name: e.target.name.value,
            status: e.target.status.value,
            species: e.target.species.value,
            gender: e.target.gender.value,
            type: e.target.type.value
        }))
    }


    const onClickNext = () => {
        if (data?.characters?.info.next == null) {
            return;
        }
        setPage(data?.characters?.info.next)
    }

    const onClickPrev = () => {
        if (data?.characters?.info.prev == null) {
            return;
        }
        setPage(data?.characters?.info.prev)
    }

    if (loading) {
        return (
            <div className='mb-5 mt-5'>
                <br />
                <div className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                    <h1>Loading... <Spinner animation="border" variant="success" /></h1>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='mb-5 mt-5'>
                <br />
                <div className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                    <CharacterSearch onSubmitHandler={onSubmitSearch} />
                    <h1>{error.message}</h1>
                </div>
            </div>
        )
    }

    return (
        <div className='mb-5 mt-5'>
            <br />
            <CharacterSearch onSubmitHandler={onSubmitSearch} />
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">

                {
                    data?.characters?.results.map((currentCharacter: ICharacterProps['character']) => <DetailsCard key={currentCharacter.id + currentCharacter.name} character={currentCharacter} />)
                }

            </Row>
            <CustomPagination onClickNext={onClickNext} onClickPrev={onClickPrev} />
        </div>
    )
}

export default Characters;