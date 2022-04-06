import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}

export default App;
