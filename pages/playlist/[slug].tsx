import { Playlist } from "@lib/player/types";
import PlaylistView from "@components/Playlist/PlaylistView";
import { getAllPlaylistsQuery, getPlaylistQuery } from "@graphql/queries";
import { GetStaticPropsContext } from "next";
import { client } from "@lib/apollo";

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug;
  //console.log("Slug:", slug);

  const { data } = await client.query({
    query: getPlaylistQuery,
    variables: {
      playlistId: slug,
    },
  });
  //console.log("Playlist Data:", data);

  return {
    props: {
      data,
    },
  };
}
const playlistSlugs = [
  {
    id: "playlist-1",
    slug: "playlist-1",
    title: "Playlist 1",
    imageUrl: "/playlist-1.jpg",
  },
  {
    id: "playlist-2",
    slug: "playlist-2",
    title: "Playlist 2",
    imageUrl: "/playlist-2.jpg",
  },
  // Agrega más playlists con sus slugs aquí
];

export async function getStaticPaths() {
  return {
    paths: [], // Devuelve un arreglo vacío para indicar que no se generarán rutas estáticas
    fallback: false,
  };
}
const Playlist = (props: { playlist: Playlist; data: any }) => {
  const { playlist, data, ...rest } = props;

  return (
    <>
      <PlaylistView playlist={data.playlist}></PlaylistView>
    </>
  );
};

export default Playlist;
