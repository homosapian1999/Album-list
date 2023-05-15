import React from "react";
import "../css/List.css";

// useHistory has been replaced with useNavigate
import { Link, useNavigate } from "react-router-dom";

const List = ({ album, onDelete }) => {
  const navigate = useNavigate();
  if (!album) {
    return;
  }
  const handleClick = () => {
    navigate(`/update-album/${album.id}`);
  };

  return (
    <div className="list">
      <h3>{album.title}</h3>
      <div className="button-group">
        <Link to={`update-album/${album.id}`}>
          <button className="update-btn" onClick={handleClick}>
            Update
          </button>
        </Link>
        <button
          className="delete-btn"
          onClick={() => {
            onDelete(album.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
