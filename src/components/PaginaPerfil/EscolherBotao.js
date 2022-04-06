import React from "react";
import styled from "styled-components";


const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-around;
  `;
const Button = styled.button`
  width: 80px;
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
`;

function EscolherBotao(props){
  return (
    <ContainerBotao>
      <Button onClick={props.onClickNao}>Não</Button>
      <Button onClick={props.onClickSim}>Sim</Button>
    </ContainerBotao>
  );
}

export default EscolherBotao;