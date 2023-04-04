import * as C from "./style";
import imagemdefaut from "../../img/imagemdefaut.jpg";
import Other from "../../img/8bee9a0f5485ac940546c6009bfb679e.jpg";

const Sobre = () => {
  return (
    <>
      <C.About id="Sobre">
        <C.Container>
          <C.Myprofile>
            <C.MyprofileContainer>
              <C.ContainerProfiler>
                <C.Img src={Other} alt="imagemdefaut" />
              </C.ContainerProfiler>
            </C.MyprofileContainer>
          </C.Myprofile>
          <C.Pesentation>
            <C.PesentationContainer>
              <C.H2>Olá sou o</C.H2>
              <C.Myname>Gabriel Dos Santos</C.Myname>
              <C.StateName>Desenvolvedor front end</C.StateName>
            </C.PesentationContainer>
          </C.Pesentation>
        </C.Container>
      </C.About>
      <C.Sobremim>
        <h3>Sobre mim</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia
          harum consequatur? Et molestiae omnis dignissimos neque quia quidem.
          Error distinctio fugiat eaque assumenda facere tenetur sed, sapiente
          sit consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Sed reiciendis a fuga omnis unde similique quos mollitia
          explicabo, laborum velit delectus quo dolor dolorem voluptatum nulla
          repellat debitis architecto ipsum?
          
        </p>
      </C.Sobremim>
    </>
  );
};

export default Sobre;
