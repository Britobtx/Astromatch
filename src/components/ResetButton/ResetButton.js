import axios from "axios";
import React from "react";
import styled from "styled-components";

const BotaoResetStyle = styled.button`
  width: 200px;
  height:25px;
  padding: 15px;
  cursor: pointer;
  background-image: linear-gradient(180deg, #2561A8,#E038BE);
  border: 1px solid #72E4DC;
  border-radius: 5px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color:white;
  }
`
function ResetButton() {
  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear"
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <BotaoResetStyle  onClick={onClickReset}>Resetar curtidas e matches</BotaoResetStyle >
    </div>
  );
}

export default ResetButton;
