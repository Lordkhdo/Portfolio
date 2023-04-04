import styled from "styled-components";

export const MainHabilites = styled.div`
  padding-top: 70px;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h3 {
    margin-bottom: 20px;
  }
`;
export const Container = styled.div`
  max-width: 600px;
  
  background-color: #75757524;
  display: flex;
  gap: 20px;
  color: white;
  flex-wrap: wrap;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  div{
    height: 60px;
    width: 60px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   span {
    .AllSpan {
      width: 50px;
      height: 50px;
      transition: all linear .1s;
      margin: 10px;
    }
    .AllSpan:hover{
      width: 60px;
      height: 60px;
    }
    .js {
      background-color: #f0dc4e;
      color: white;
    }
    .React {
      color: #61dafb;
    }
    .ts {
      color: #007acc;
    }
    .html {
      color: #e44f26;
    }
    .css {
      color: #0074BE;
    }
    .style {
      color: #FFCD42;
    }
    .sass {
      color: #CD669A;
    }

  }


`;
