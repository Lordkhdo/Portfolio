import * as C from "./style";

type modalProps = {
  OpenModal: () => void;
  ModalValue: {
    imagem: string;
    nome: string;
    descriçao: string;
    repositorio: string
    projeto:string
  };
};

const Modal = ({ OpenModal, ModalValue }: modalProps) => {


  const Url = (NameProjectUrl: string) => {
    const win = window.open(`${NameProjectUrl}`, "_blank");
    win?.focus();
  };

  const ClickOutside = (e: string) => {
    if (e == "Outside") {
      OpenModal();
    }
  };

  return (
    <C.BackModal
      id="Outside"
      onClick={(e) => ClickOutside((e.target as HTMLElement).id)}
    >
      <C.Modal>
              <C.HeaderModal>
                    <C.Title>
                          <C.H2>{ModalValue.nome}</C.H2>  
                    </C.Title>
                    <C.Button onClick={() => OpenModal()}>
                          <h3>X</h3>
                    </C.Button>
              </C.HeaderModal>
        <C.ContainerModal>
            <C.FotoDiv>
                  <C.Img src={ModalValue.imagem} alt="" />{" "}
                  <C.DivButton>
                        <C.ButtonFoto onClick={() => Url(ModalValue.repositorio)}>Repositorio</C.ButtonFoto>
                        <C.ButtonFoto onClick={() => Url(ModalValue.projeto)}>Projeto</C.ButtonFoto>
                  </C.DivButton>
            </C.FotoDiv>
          <C.TextoDiv>
              <p>
              {ModalValue.descriçao}
              </p>
          </C.TextoDiv>
        </C.ContainerModal>
      </C.Modal>
    </C.BackModal>
  );
};

export default Modal;
