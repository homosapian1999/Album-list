import React from "react";
import "../css/List.css";
import { Link } from "react-router-dom";

const List = ({ album }) => {
  if (!album) {
    // console.log("EMpty");
    return;
  }
  return (
    <div className="list">
      <h3>{album.title}</h3>
      <div className="button-group">
        <Link to={"/update-album"}>
          <button className="update-btn">Update</button>
        </Link>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default List;
