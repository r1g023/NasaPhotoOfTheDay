import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./Cards";

function CardList() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        console.log("response data---->", response.data);
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Cards
        title={photo.title}
        date={photo.date}
        hdurl={photo.hdurl}
        explanation={photo.explanation}
        copyright={photo.copyright}
      />
    </div>
  );
}

export default CardList;
