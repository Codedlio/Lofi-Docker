import { gql } from "@apollo/client";

const getTopArtists = gql`
  query GetArtists {
    Artists {
      name
    }
  }
`;
export default getTopArtists;
