import List from "./List";
import "../css/List.css";
import Navbar from "./Navbar";

const AlbumsList = ({ albums, onDelete }) => {
  const handleDelete = (id) => {
    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <>
      <Navbar />
      <div className="albums-list">
        {albums &&
          albums.map((album) => {
            return (
              <List album={album} key={album.id} onDelete={handleDelete} />
            );
          })}
      </div>
    </>
  );
};

export default AlbumsList;
