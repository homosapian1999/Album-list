import "../css/AddAlbum.css";

import { Link } from "react-router-dom";

const AddAlbum = ({ albums, addToList }) => {
  const getData = () => {
    const userId = document.getElementById("inp-userId").value;
    const title = document.getElementById("inp-title").value;
    addToList(userId, title);
  };
  return (
    <>
      <div className="add-album-container">
        <div className="add-album-form">
          <h4>Enter new Album Details</h4>
          <div className="inp-container">
            <span>Enter User Id</span>
            <input type="text" id="inp-userId" />
          </div>
          <div className="inp-container">
            <span>Enter Album Title</span>
            <input type="text" id="inp-title" />
          </div>
          <div>
            <Link to={"/"}>
              <button className="add-btn" onClick={getData}>
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
