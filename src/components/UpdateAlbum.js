import React from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

import "../css/UpdateAlbum.css";

const UpdateAlbum = ({ albums }) => {
  const { id } = useParams();
  const updateData = () => {
    let updateTitle = document.getElementById("title-inp").value;
    let updateId = document.getElementById("userId-inp").value;

    const updatedAlbum = {
      title: updateTitle,
      userId: updateId,
    };

    // Fetch call to update the data;
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedAlbum),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
    albums[id - 1] = {
      title: updatedAlbum.title,
      userId: updatedAlbum.userId,
    };
  };

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
          <Link to="/">
            <button type="submit" onClick={updateData} className="save-btn">
              Save
            </button>
            <button type="submit" className="exit-btn">
              Exit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
