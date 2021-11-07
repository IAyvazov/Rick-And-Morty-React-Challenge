import { gql } from "@apollo/client";

export const GetOneLocation = gql`
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

export const GetAllLocations = gql`
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