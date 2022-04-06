import React, { useState } from "react";
import styled from "styled-components";
import ResetButton from "../ResetButton/ResetButton";
import AppBar from "../AppBar/AppBar";
import PaginaPerfil from "../PaginaPerfil/PaginaPerfil";
import MatchListPage from "../MatchListPage/MatchListPage";


const MainContainer = styled.div`
  background-image: linear-gradient(180deg, #000235, #0039a7);
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 400px;
  height: 800px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  
`;
const PosicaoReset = styled.div`
display:flex;
margin-top: 50px;
justify-content:center;

`
function Main() {
  const [selecionarPagina, setSelecionarPagina] = useState("escolherPerfil");

  const renderSelectedPage = () => {
    switch (selecionarPagina) {
      case "escolherPerfil":
        return <PaginaPerfil/>;
      case "match-list":
        return <MatchListPage />;
      default:
        return <PaginaPerfil/>;
    }
  };

  const goToChooseProfilePage = () => {
    setSelecionarPagina("escolherPerfil");
  };

  const goToMatchListPage = () => {
    setSelecionarPagina("match-list");
  };

  return (
    <MainContainer>
      <AppBar
        goToChooseProfilePage={goToChooseProfilePage}
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
      <PosicaoReset>
       <ResetButton/>
      </PosicaoReset>
    </MainContainer>
  );
}

export default Main;
