import React, { useEffect, useState } from "react";
import ListaDePessoas from "./ListaDePessoas";
import styled from "styled-components";
import axios from "axios";



const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <ListaDePessoas profile={profile}/>;
      })}
       
    </ListContainer>
  );
}

export default MatchListPage;