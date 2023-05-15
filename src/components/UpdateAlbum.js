import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import "../css/UpdateAlbum.css";

const UpdateAlbum = ({ albums }) => {
  return (
    <>
      <Navbar path="/" page="Home" />
      <div className="update-album">
        <div className="form-container">
          <h4>{albums.title}</h4>
          <div className="inp-container">
            <span>Enter New Title </span>{" "}
            <input type="text" id="title-inp" placeholder="Enter Title" />
          </div>

          <h4>
            <span className="id-span">User ID: </span>
            {albums.userId}
          </h4>
          <div className="inp-container">
            <span>Enter New UserId </span>{" "}
            <input type="text" id="userId-inp" placeholder="Enter new ID" />
          </div>
          {/* <Link to="/">
            <button type="submit" onClick={updateData}>
              Save
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
