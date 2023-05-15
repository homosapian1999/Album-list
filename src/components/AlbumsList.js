import { useEffect, useState } from "react";
import List from "./List";
import "../css/List.css";

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();
        setAlbums(data);
        // console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="albums-list">
      {albums.map((album) => {
        return <List album={album} key={album.id} />;
      })}
      {/* {console.log(albums)} */}
    </div>
  );
};

export default AlbumsList;
