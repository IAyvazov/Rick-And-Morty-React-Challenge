export const getOne = (url) => {

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const getAll = (url = 'https://rickandmortyapi.com/api/location') => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

