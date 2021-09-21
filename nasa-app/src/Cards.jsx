import React from "react";

const Cards = (props) => {
  console.log(props);

  return (
    <>
      <div>
        <h1>Title: {props.title}</h1>
        <h2>Date: {props.date}</h2>
        <img src={props.hdurl} alt="Nasa" />
      </div>

      <div>
        <h3>Description:</h3>
        <p>{props.explanation}</p>
        <p>Copyright: {props.copyright}</p>
      </div>
    </>
  );
};

export default Cards;
