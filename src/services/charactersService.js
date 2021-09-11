
export const getOne = async (url) => {
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const search = async (search) => {

    const name = search.name ? 'name=' + search.name + '&' : '';
    const status = search.status ? 'status=' + search.status + '&' : '';
    const species = search.species ? 'name=' + search.species + '&' : '';
    const type = search.type ? 'name=' + search.type + '&' : '';
    const gender = search.gender ? 'name=' + search.gender + '&' : '';

    let url = `https://rickandmortyapi.com/api/character/?${name + status + species + type + gender}`;

    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const getAll = async (url = 'https://rickandmortyapi.com/api/character') => {
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

