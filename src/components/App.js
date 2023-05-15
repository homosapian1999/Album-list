import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AlbumsList from "./AlbumsList";
import UpdateAlbum from "./UpdateAlbum";
import { useState, useEffect } from "react";
import AddAlbum from "./AddAlbum";

function App() {
  // Setting up the react hook
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

  // Function for delete
  const handleDeleteAlbum = (id) => {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "DELETE",
    });
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
  };

  // Function to add Items;
  const addItemsToAlbum = (userId, title) => {
    const data = {
      userId: userId,
      title: title,
    };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Data added successfully");
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AlbumsList albums={albums} onDelete={handleDeleteAlbum} />
            }
          ></Route>
          <Route
            path="/update-album/:id"
            element={<UpdateAlbum albums={albums} />}
          ></Route>
          <Route
            path="/add-album"
            element={<AddAlbum albums={albums} addToList={addItemsToAlbum} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
