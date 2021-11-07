import { gql } from "@apollo/client";

export const GetAllEpisodes = gql`
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

export const GetOneEpisode = gql`
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