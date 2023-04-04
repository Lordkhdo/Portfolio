import styled, { keyframes } from "styled-components";

export const About = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh);
`;
export const Container = styled.div`
  width: 1200px;
  min-width: 300px;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Myprofile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MyprofileContainer = styled.div`

  border-radius: 8px;
  color: white;
  height: 400px;
  @media (max-width: 600px) {
    height: 270px;
  }
`;
export const ContainerProfiler = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 250px;
  margin-top: 20px;
  border-radius: 50%;
  border: 1px solid var(--DarkBorder);
  transition: all 0.2s cubic-bezier(0.01, 1.04, 0.58, 1)  ;
  &:hover{
    width: 270px;
  }
  @media (max-width: 600px) {
    margin-top: 80px;
  }
`;

export const Pesentation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
export const PesentationContainer = styled.div`
  width: 300px;
  height: 250px;
  `;
export const H2 = styled.h2`
  font-size: 2rem;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
export const escrever = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
export const blinkCaret = keyframes`
    from, to { border-color: transparent }
  50% { border-color: white }
`;
export const Myname = styled.p`
  color: white;
  display: inline-block;
  font-size: 1.5em;
  background: linear-gradient(to left, var(--DarkBorder), var(--Border));
  overflow: hidden;
  color: white;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 0;
  letter-spacing: 0.15em;
  animation: ${escrever} 1.5s steps(20, end),
    ${blinkCaret} 0.75s step-end infinite;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;


export const StateName = styled.p`
  color: gray;
  font-size: 1.5rem ;
`;
export const Buton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: rgba(49, 49, 49, 0.582);
  border-radius: 5px;
  color: #ffffff92;
  border: none;
`;

export const Sobremim = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  >h3{
    color: white;
    text-align: center;
  }
  >p{
    color: gray;
    text-align: center;
    width: 600px;
  }
  @media (max-width: 600px) {
    >p{
      width: calc(100vw - 20px);
    }
  }

`;