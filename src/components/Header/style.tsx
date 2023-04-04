import styled from "styled-components";
import "../../../GlobalStyle";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--Border);
  user-select: none;
  z-index: 1000;
`;
export const Dropdow = styled.div`
  background-color: var(--ColorBack);
  width: 100%;
  flex: 1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeadProfile = styled.div`
  background-color: var(--ColorBack);
  width: 100%;
  flex: 7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TestDiv = styled.div`
  background-color: var(--whitecolor);
  width: var(--CubeBoxM);
  height: var(--CubeBoxM);
  cursor: pointer;
`;

interface MeucomponentsProps {
  Prop: boolean;
}
export const Div = styled.div<MeucomponentsProps>`
  width: 150px;
  visibility: ${(props) => (props.Prop ? "hidden" : "visible")};
  color: ${(props) => (props.Prop   ? " rgba(0,0,0,.1)" : "black")};
  top: ${(props) => (props.Prop ? "60px" : "60px")};
  right: ${(props) => (props.Prop ? "0" : "20px")};
  background-color: ${(props) => (props.Prop ? "rgba(0,0,0,.1)" : "white")};
  position: absolute;
  border-radius: 5px;
  transition: all 0.25s;
`;
export const Li = styled.li`

  padding-left: 5px;
  padding: 6px;
  list-style: none;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Span = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 &>a{
    padding:  5px 0 5px 0;
    text-decoration: none;
    color: black;
    width: 100%;
    height: 130%;
    padding-left: 10px;
  }

`;
export const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`;