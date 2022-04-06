import React from "react";
import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  color:white;
 

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const BoldTextList = styled.p`
 font-weight: bold;
`
const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`;

function ListaDePessoas(props) {
  return (
    <ListItemContainer>
      <Avatar src={props.profile.photo} alt="Imagem da pessoa" />
      <BoldTextList>{props.profile.name}</BoldTextList>
       
    </ListItemContainer>
  );
}

export default ListaDePessoas;