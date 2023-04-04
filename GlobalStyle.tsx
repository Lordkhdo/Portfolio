import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
      --ColorBack:#13131F;
      --whitecolor:#fff ;
      --CubeBoxM:40px;
      --Border:#8257E6;
      --DarkBorder:#512da3;

      --HeightHeader: 65px;

    }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
  }
    body::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
    }
  body::-webkit-scrollbar-track {
    background: var(--ColorBack);        /* color of the tracking area */
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--Border);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid var(--ColorBack);  /* creates padding around scroll thumb */
  }
  .Tudo,html,body,#root{
    scroll-behavior: smooth; 
    
  }

  body{
    background-color: var(--ColorBack);
    
  }
`;

export default GlobalStyle;
