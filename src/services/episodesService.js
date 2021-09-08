const url = 'https://rickandmortyapi.com/api/episode';

export const getAll = (page) => {
  const urlForPage = url + '?page=' + page;
  return fetch(urlForPage)
    .then(res => res.json())
    .catch(err => console.log(err))
};

export const getOne = (id) => {
  const urlForOne = url + '/' + id;
  return fetch(urlForOne)
    .then(res => res.json())
    .catch(err => console.log(err))
}