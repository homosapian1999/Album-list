import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AlbumsList from "./AlbumsList";
import UpdateAlbum from "./UpdateAlbum";
import { useState, useEffect } from "react";

function App() {
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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AlbumsList albums={albums} />}></Route>
          <Route
            path="/update-album/:id"
            element={<UpdateAlbum albums={albums} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
