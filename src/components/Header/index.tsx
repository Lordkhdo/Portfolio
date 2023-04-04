import { useState } from "react";
import { DiCode } from "react-icons/di";
import { BiMenu } from "react-icons/bi";
import { BiInfoSquare } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";

import * as C from "./style";

const Header = () => {
  const [openDrop, setOpenDrop] = useState(true);
  return (
    <C.Header>
      <C.HeadProfile>
        <C.H3>Portifólio</C.H3>
      </C.HeadProfile>
      <C.Dropdow>
        <BiMenu
          onClick={() => setOpenDrop(!openDrop)}
          style={{
            cursor: "pointer",
            margin: "10px",
            width: "26px",
            height: "26px"
          }}
        />
        <C.Div Prop={openDrop}>
          {" "}
          <ul>
            <C.Li>
              <BiInfoSquare />
              <C.Span onClick={() => setOpenDrop(!openDrop)}>
                {" "}
                <a href="#Sobre">Sobre</a>{" "}
              </C.Span>
            </C.Li>
            <C.Li>
              <DiCode style={{ width: "20px", height: "20px" }} />
              <C.Span onClick={() => setOpenDrop(!openDrop)}>
                <a href="#Habilidades">Habilidades</a>
              </C.Span>
            </C.Li>
            <C.Li>
              <BiLayout />
              <C.Span onClick={() => setOpenDrop(!openDrop)}>
                <a href="#Projetos">Projetos</a>
              </C.Span>
            </C.Li>
            <C.Li>
              <IoMdContact />
              <C.Span onClick={() => setOpenDrop(!openDrop)}>
                <a href="#Contatos">Contatos</a>
              </C.Span>
            </C.Li>
          </ul>{" "}
        </C.Div>
      </C.Dropdow>
    </C.Header>
  );
};

export default Header;
