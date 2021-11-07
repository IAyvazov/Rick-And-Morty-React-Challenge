import { gql } from "@apollo/client";

export const GetAllCharacters = gql`
query Characters($page: Int!,$name: String!,$status: String!,$species: String!,$type: String!,$gender: String!) {
  characters(page :$page,filter:{name: $name, status: $status, species: $species,type: $type,gender: $gender}) {
    info{
        next
        prev
      }
      results{
        id
        name
        status
        species
        type
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
`;