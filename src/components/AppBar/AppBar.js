import React from "react";
import styled from "styled-components";
import {RiUserHeartFill} from 'react-icons/ri'
import {CgUserList} from 'react-icons/cg'

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`;

const BotoesAppBar = styled.button`
background-color:#65DDCE;
border-radius: 50%;
transition: 300ms ease;
    :hover {
      box-shadow: 2px 2px 6px gray;
    }

`

function AppBar(props) {
  return (
    <AppBarContainer>
      <BotoesAppBar onClick={() => props.goToChooseProfilePage()}>
      <RiUserHeartFill/>
      </BotoesAppBar>
      <img src={"https://i.postimg.cc/YqhqPHxZ/Labeddit-6.png"}/>
      <BotoesAppBar onClick={() => props.goToMatchListPage()}>
      <CgUserList/>
      </BotoesAppBar>
      
    </AppBarContainer>
  );
}

export default AppBar;
