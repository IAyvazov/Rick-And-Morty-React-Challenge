
const url = 'https://rickandmortyapi.com/api/episode?page=';

export const getAll = (page) => {
  return  fetch(url+page)
    .then(res=>res.json())
    .catch(err => console.log(err))
};

