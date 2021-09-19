import { gql } from "@apollo/client";

export const GetAll = gql`
query Episodes($page: Int!) {
  episodes(page :$page) {
    info{
      count
      pages
      prev
      next
    }
    results{
      id
      name
      air_date
      episode
      created
  
    }
  }
}
`;

export const GetOne = gql`
query Episode($name: String!) {
  episodes(filter:{name: $name}) {
    results{
      id
      name
      air_date
      characters{
        name
        status
        species
        gender
        image
        origin{
          name
        }
        location{
          name
        }
      }
    }
  }
}
`;

// const url = 'https://rickandmortyapi.com/api/episode';

// export const getAll = async (url = 'https://rickandmortyapi.com/api/episode') => {
//   return await fetch(url)
//     .then(res => res.json())
//     .catch(err => console.log(err))
// };

// export const getOne = async (id) => {
//   const urlForOne = url + '/' + id;
//   return await fetch(urlForOne)
//     .then(res => res.json())
//     .catch(err => console.log(err))
// }