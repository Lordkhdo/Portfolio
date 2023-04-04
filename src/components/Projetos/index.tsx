import * as C from "./style";
import Modal from "../Modal";
import imagemdefaut from "../../img/imagemdefaut.jpg";
import CardProject from "../CardProject/index";
import React, { useState } from "react";

const Projetos = () => {
  type ModalValues = {
    imagem: string;
    nome: string;
    descriçao: string;
    repositorio:string,
    projeto:string
  };

  const [ModalIsOpen, setModalisopen] = useState(false);
  const [ModalValue, setModalValue] = useState<ModalValues>({
    imagem: "",
    nome: "",
    descriçao: "",
    repositorio: "",
    projeto:""
  });
  const OpenModal = () => {
    setModalisopen(!ModalIsOpen);
  };
  return (
    <C.Container>
      <C.DivTitulo id="Projetos">
        <h3>projetos</h3>
      </C.DivTitulo>
      <C.BodyProjetos>
        {/* //////////// */}

        <C.ControlleProject onClick={() => OpenModal()}>
            <CardProject
              image={"src/img/ReobeProject.png"}
              nome={"Ester"}
              descriçao={"gabriel dasdsacxzc"}
              repositorio={'https://github.com/Lordkhdo/TrabalhoReobe-jogo-'}
              projeto={'https://lordkhdo.github.io/TrabalhoReobe-jogo-/'}
              setModalValue={setModalValue}
            />
        </C.ControlleProject>

        {/* //////////// */}
        <C.ControlleProject onClick={() => OpenModal()}>
            <CardProject
              image={"src/img/ToodoList.png"}
              nome={"Todoo Simples"}
              descriçao={"Nao e Gabriel dasd sad sadsads adsadsad sadsadsadsa dsadsadsa dsadsad asdasdasdadas d as"}
              repositorio={'https://github.com/Lordkhdo/TrabalhoReobe-jogo-'}
              projeto={'https://lordkhdo.github.io/Projeto_todoList_React/'}
              setModalValue={setModalValue}
            />
          </C.ControlleProject>
      </C.BodyProjetos>
      {ModalIsOpen ? (
            <Modal OpenModal={OpenModal} ModalValue={ModalValue} />
      ) : null}
    </C.Container>
  );
};

export default Projetos;
