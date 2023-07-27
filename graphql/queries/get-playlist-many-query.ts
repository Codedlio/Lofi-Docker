import { gql } from "@apollo/client";

const getAllPlaylistsQuery = gql`
  query getPlaylistsAndArtists {
    playlists {
      title
      imageUrl
    }
    Artists {
      name
      imageUrl
    }
  }
`;
export default getAllPlaylistsQuery;
