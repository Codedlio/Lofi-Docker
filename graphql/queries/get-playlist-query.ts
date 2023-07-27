import { gql } from "@apollo/client";

const getPlaylistQuery = gql`
  query Playlist($playlistId: String!) {
    playlist(id: $playlistId) {
      title
      imageUrl
      tracks {
        title
        url
        artist {
          name
        }
      }
    }
  }
`;
export default getPlaylistQuery;
