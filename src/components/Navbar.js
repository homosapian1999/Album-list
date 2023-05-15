import React from "react";
// import { Link } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h2>
          <span className="first-half">ALBUMS </span>
          <span className="second-half">LIST</span>
        </h2>
        {/* <Link to="/add-album"> */}
        <button>Add-Album</button>
        {/* </Link> */}
      </div>
    );
  }
}

export default Navbar;
