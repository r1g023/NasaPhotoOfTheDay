import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <h1> Nasa Photo of the Day</h1>
      <CardList />
    </div>
  );
}

export default App;
