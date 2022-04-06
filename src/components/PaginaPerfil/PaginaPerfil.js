import React, { useEffect, useState } from "react";
import axios from "axios";

import EscolherBotao from "./EscolherBotao";
import PerfilCard from "./PerfilCard";

function PaginaPerfil() {
  const [profileToChoose, setProfileToChoose] = useState("");

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
      )
      .then((res) => {
        setProfileToChoose(res.data.profile);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      id: profileToChoose.id,
      choice: choice
    };
    setProfileToChoose("");
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        getProfileToChoose();
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNao = () => {
    chooseProfile(false);
  };

  const onClickSim = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <PerfilCard profile={profileToChoose} />
          <EscolherBotao onClickNao={onClickNao} onClickSim={onClickSim} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default PaginaPerfil;
