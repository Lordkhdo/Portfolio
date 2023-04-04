import { useEffect, useState } from "react";
import GlobalStyle from "../../../GlobalStyle";
import MainHabilites  from "../../components/Habilidades/index";
import Header from "../../components/Header";
import MapPages from "../../components/MapPages";
import Projetos from "../../components/Projetos";
import Sobre from "../../components/Sobre";
import { RootObject } from "../../instance/Api";
import { Apis } from "../../instance/Api";

import * as C from "./style";
import Footer from "../../components/Footer";

const Home = () => {
    const [repos, setRepos] = useState<RootObject[] | undefined>([]);

    const ApiResponse = Apis()
    
    useEffect(() => {
      // Array Dos meus Repositorios
        ApiResponse.then((item: RootObject[]) => setRepos(item));
      }, []);
    const Url = (NameProjectUrl: string) => {
        const win = window.open(`https://lordkhdo.github.io/${NameProjectUrl} `, "_blank");
        win?.focus();
      };



  return (
    <>  
    <Header />
    <Sobre />
    <MainHabilites/>
    <Projetos />
    <Footer />
    {/* <MapPages repo={repos} Url={Url} /> */}
    </>
  );
};

export default Home;
