const url = 'https://rickandmortyapi.com/api/episode';

export const getAll = async (page) => {
  const urlForPage = url + '?page=' + page;
  return await fetch(urlForPage)
    .then(res => res.json())
    .catch(err => console.log(err))
};

export const getOne = async (id) => {
  const urlForOne = url + '/' + id;
  return await fetch(urlForOne)
    .then(res => res.json())
    .catch(err => console.log(err))
}