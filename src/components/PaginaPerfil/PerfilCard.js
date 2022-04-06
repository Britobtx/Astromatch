import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
  margin: 16px;
  border: 1px solid white;
  max-height: 650px;
  `

const ImagemPerfil = styled.img`
    width: 70%;
    box-shadow: inset 0 0 1em white, 0 0 1em ;
    display: block;
    margin:auto;
    height: 70%;
   
  
`;

const PerfilInfo = styled.div`
  padding: 16px;
  color:white;
  
`;
const BoldText = styled.p`
 font-weight: bold;
`

function PerfilCard(props) {
  return (
    <CardContainer>
      <ImagemPerfil src={props.profile.photo} alt="Imagem da pessoa" />
      <PerfilInfo>
        <BoldText >
          {props.profile.name}, {props.profile.age}
        </BoldText >
        <p>{props.profile.bio}</p>
      </PerfilInfo>
      </CardContainer>
  );
}

export default PerfilCard;
