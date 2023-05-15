import React from "react";
import "../css/List.css";

const List = ({ album }) => {
  if (!album) {
    // console.log("EMpty");
    return;
  }
  return (
    <div className="list">
      <h3>{album.title}</h3>
      <div className="button-group">
        <button className="update-btn">Update</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default List;
