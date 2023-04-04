import styled from "styled-components";

export const BackModal = styled.div`
  position: fixed;
  background-color: #0000006e;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #16162c;
  height: 280px;
  width: 700px;
  border-radius: 5px;
`;
export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  margin: 0 5px 0 5px;
`;
export const Button = styled.button`
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-weight: 800;
  background: none;
  border: none;
  color: var(--Border);
  padding-right: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const H2 = styled.h2``;
export const ContainerModal = styled.div`
  display: flex;
  height: 80%;
  
`;
export const FotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;

`;
export const TextoDiv = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  >p{
    color: gray;
    text-align: center;
  }
`;
export const Img = styled.img`
  height: 180px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
export const DivButton = styled.div`
  
`;
export const ButtonFoto = styled.button`
  cursor: pointer;
  margin-right: 20px;
  width: 80px;
  border: none;
  padding: 5px;
  
`;