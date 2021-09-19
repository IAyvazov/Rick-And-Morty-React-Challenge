import { gql } from "@apollo/client";

export const GetOne = gql`
query Locations($name: String!) {
    locations(filter:{name: $name}) {
        results{
          name
          type
          dimension
          residents{
            name
            status
            species
            type
            gender
            image
            location{
              name
            }
            origin{
              name
            }
          }
        }
      }
}
`;

export const GetAll = gql`
query Locations($page: Int!) {
    locations(page: $page) {
        info{
            count
            next
            prev
          }
        results{
          id
          name
          type
          dimension
        }
      }
}
`;

// export const getOne = (url) => {

//     return fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }

// export const getAll = (url = 'https://rickandmortyapi.com/api/location') => {
//     return fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err));
// }

