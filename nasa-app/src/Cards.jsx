import React, { useState } from "react";
import styled from "styled-components";
//
const CardContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;
  padding: 30px;
`;

const NasaImage = styled.img`
  width: 50%;
`;

const Button = styled.button`
  width: 150px;
  display: inline-block;
  padding: 8px 11px;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 5px;
  letter-spacing: 2px;
  outline: none;
  background-color: #4dd0e1;
  background-image: linear-gradient(to right, #962f85, #e71ed0);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const Cards = (props) => {
  const [like, setLike] = useState(0);
  function likePhoto() {
    setLike(like + 1);
  }

  function unlikePhoto() {
    setLike(() => {
      setLike(like - 1);
    });
  }
  return (
    <CardContainer>
      <div>
        <h1>Title: {props.title}</h1>
        <h2>Date: {props.date}</h2>
        <NasaImage src={props.hdurl} alt="Nasa" />
      </div>

      <div>
        <h3>Description:</h3>
        <p>{props.explanation}</p>
        <p>Copyright: {props.copyright}</p>
      </div>
      <Button onClick={likePhoto}>Like Photo</Button>
      <Button onClick={unlikePhoto}>Unlike Photo</Button>
      <h2>Likes: {like}</h2>
    </CardContainer>
  );
};

export default Cards;
