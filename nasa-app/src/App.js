import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList";
import Loader from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1> Nasa Photo of the Day</h1>
      {loading ? (
        <Loader
          className="loader-spinner"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <CardList />
      )}
    </div>
  );
}

export default App;
