import CharacterSearch from "../CharacterSearch"
import { useEffect, useState } from 'react';
import * as charactersService from '../../services/charactersService';
import DetailsCard from "../DetailsCard";
import { Row } from 'react-bootstrap';
import CustomPagination from "../CustomPagination/CustomPagination";


const Characters = () => {

    const [page, setPage] = useState();
    const [characters, setCharacters] = useState({
        results: [],
        error: '',
    });
    const [search, setSearch] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
    });

    useEffect(() => {
        charactersService.getAll()
            .then(res => setCharacters(res));
    }, [])

    useEffect(() => {
        charactersService.getAll(page)
            .then(res => setCharacters(res));
    }, [page])

    const onSearch = {

        onChangeName: (e) => {
            setSearch(oldName => ({ ...oldName, name: e.target.value }))
        },

        onChangeStatus: (e) => {
            setSearch(oldStatus => ({ ...oldStatus, status: e.target.value }))
        },

        onChangeSpecies: (e) => {
            setSearch(oldSpecies => ({ ...oldSpecies, species: e.target.value }))
        },

        onChangeGender: (e) => {
            setSearch(oldGender => ({ ...oldGender, gender: e.target.value }))
        },

        onChangeType: (e) => {
            setSearch(oldType => ({ ...oldType, type: e.target.value }))
        },
    }


    const onSearchSubmitHandler = (e) => {
        e.preventDefault();

        charactersService.search(search)
            .then(res => {
                if (res.error) {
                    setCharacters({ error: res.error })
                }
                else {
                    setCharacters(res)
                }
            }
            );
    }

    const onCklickNext = () => {
        if (characters.info.next == null) {
            return;
        }
        setPage(characters.info.next)
    }

    const onClickPrev = () => {
        if (characters.info.prev == null) {
            return;
        }
        setPage(characters.info.prev)
    }

    return (
            <div className='mb-5 mt-5'>
                <br/>
                <CharacterSearch onSubmitHandler={onSearchSubmitHandler} onSearch={onSearch} />
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">
                    {
                        characters?.error ? <h1>{characters.error}</h1> :
                            characters?.results.map(character => <DetailsCard character={character} />)
                    }
                    {
                        characters?.error ? null : <CustomPagination onCklickNext={onCklickNext} onClickPrev={onClickPrev} />
                    }

                </Row>
            </div>
    )
}

export default Characters;