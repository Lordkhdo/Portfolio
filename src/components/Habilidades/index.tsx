import * as C from "./style";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Habilidades = () => {
  type Tec = [
    {
      name: string;
      icon: JSX.Element;
    }
  ];

  const Tecnologies = [
    { name: "Js", icon: <IoLogoJavascript className="AllSpan js" /> },
    { name: "React", icon: <IoLogoReact className="AllSpan React" /> },
    { name: "Typescript", icon: <SiTypescript className="AllSpan ts" /> },
    { name: "Html", icon: <ImHtmlFive className="AllSpan html" /> },
    { name: "Css3", icon: <IoLogoCss3 className="AllSpan css" /> },
    { name: "StyledComponents", icon: <SiStyledcomponents className="AllSpan style" /> },
    { name: "Sass", icon: <FaSass className="AllSpan sass" /> }
  ];

  return (
    <C.MainHabilites id="Habilidades">
        <h3>Tecnologias</h3>
      <C.Container>
      {
      Tecnologies.map((item, key) => <div key={key}><span key={key}>{item.icon}</span></div> )
    }
      </C.Container>
    </C.MainHabilites>
  );
};

export default Habilidades;
