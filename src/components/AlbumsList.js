import List from "./List";
import "../css/List.css";
import Navbar from "./Navbar";

const AlbumsList = (props) => {
  const { albums } = props;
  return (
    <>
      <Navbar />
      <div className="albums-list">
        {albums.map((album) => {
          return <List album={album} key={album.id} />;
        })}
      </div>
    </>
  );
};

export default AlbumsList;
