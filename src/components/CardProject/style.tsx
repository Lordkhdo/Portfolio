import styled from "styled-components";

type itens = {
  image:string
}

export const Card = styled.div<itens>`

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 200px;
    border-radius: 6px;
    overflow: hidden;
    max-height: 200px;
  }
  .card {
    background-image: linear-gradient(#000000, #380e74);
    cursor: pointer;
  }
  .card:hover{
    background-image: linear-gradient(#672abf, #380e74)
  }
  .card .image{
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
    transition: all .2s;
  }
  .card:hover .image{
    opacity: 1;
    width: 300px;
  }
  .content{
    margin: 0;
    height: 2px;
    transition: all linear .2s;
    text-align: center;
  }

  .card:hover .content{
    height: 2rem;
    padding: 10px 0px;
    padding-bottom: 30px;
  }
`;
