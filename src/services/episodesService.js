const url = 'https://rickandmortyapi.com/api/episode';

export const getAll = async (url='https://rickandmortyapi.com/api/episode') => {
  return await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
};

export const getOne = async (id) => {
  const urlForOne = url + '/' + id;
  return await fetch(urlForOne)
    .then(res => res.json())
    .catch(err => console.log(err))
}