import styled from "styled-components";

export const Fondo = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f9ffea;
  font-family: "Noto Sans", sans-serif;
`;

export const PresentacionBase = styled.div`
  display: grid;
  justify-content: center;

  p {
    text-align: center;
    font-size: 16px;
    font-weight: 900;
  }

  img {
    width: 200px;
  }

  hr {
    width: 150px;
    height: 8px;
    background-color: #10375c;
    border-radius: 15px;
    opacity: 0.3;
  }

  @media only screen and (min-width: 310px) {
    p {
      font-size: 20px;
      font-weight: 900;
    }

    img {
      width: 300px;
    }

    hr {
      width: 200px;
    }
  }
  @media only screen and (min-width: 480px) {
    p {
      font-size: 29px;
      font-weight: 900;
    }

    img {
      width: 400px;
    }

    hr {
      width: 300px;
    }
  }
  @media only screen and (min-width: 768px) {
    p {
      font-size: 29px;
      font-weight: 900;
    }

    img {
      width: 600px;
    }

    hr {
      width: 600px;
    }
  }
  @media only screen and (min-width: 1024px) {
    p {
      text-align: center;
      font-size: 40px;
      font-weight: 900;
    }

    img {
      width: 900px;
    }

    hr {
      width: 900px;
      height: 8px;
      background-color: #10375c;
      border-radius: 15px;
      opacity: 0.3;
    }
  }
`;

export const GrupoContactos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  justify-items: center;
  width: 50%;

  img {
    width: 30px;
    margin: 50px 0px;
  }

  @media only screen and (min-width: 480px) {
    img {
      width: 40px;
    }
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 50px;
    }
  }
  @media only screen and (min-width: 1024px) {
    img {
      width: 60px;
      margin: 50px 0px;
    }
  }
`;

export const ResponsiveBase = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 100px 0;

  div {
    &.letras {
      display: grid;
      align-items: center;
    }
  }

  p {
    justify-items: center;
    font-size: 16px;
    text-align: center;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 310px) {
    p {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 480px) {

    p {
      font-size: 24px;
      width: 70%;
      
    }
  }
  @media only screen and (min-width: 768px) {
    p {
      font-size: 30px;
      text-align: justify;
      width: 90%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

export const ResponsiveImagenes = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;

  img {
    width: 60px;
    align-self: center;
  }


  @media only screen and (min-width: 310px) {
    img {
    width: 80px;
    
  }
  }
  @media only screen and (min-width: 480px) {
    img {
    width: 100px;
    
  }
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 30%);
    img {
    width: 100px;
    
  }
  }
  @media only screen and (min-width: 1024px) {
    
    img {
    width: 200px;
  }
  }
 
`
export const IdeasBase = styled.div`
  background-color: #3b6978;
  margin: 100px 0;
  font-family: "Viga", sans-serif;
  font-size: 16px;

  p {
    text-align: center;
    color: #f4f6ff;
    padding: 50px 0;

    &.titulo {
      font-size: 33px;
    }
  }

  @media only screen and (min-width: 310px) {
  }
  @media only screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

export const IdeasImagenes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-items: center;

  

  div {
    display: grid;
    justify-items: center;
    align-self: center;
  }

  img {
    width: 60px;
  }

  @media only screen and (min-width: 310px) {

    img {
    width: 80px;
  }
  }
  @media only screen and (min-width: 480px) {
    img {
    width: 100px;
  }
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (min-width: 1024px) {
  
    img {
      width: 160px;
    }
  }

`;

export const TecnologiasBase = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-evenly;
  text-align: center;
  font-size: 15px;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 40%);
    font-size: 19px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    text-align: justify;
  }
`;

export const TecnologiasLenguaje = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  justify-content: space-evenly;
  text-align: center;
  font-size: 15px;

  div {
    &.externo {
      border: 1px solid #3b6978;
      box-shadow: 1px 0 5px black;
      border-radius: 15px;
      background-color: #f1f3f4;
    }
  }

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 40%);
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const LenguajeBase = styled.div`
  display: grid;
  justify-content: center;
  border: 5px solid #30475e;
  margin: 3px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  padding: 5px;
  height: 140px;
  font-size: 12px;
  font-weight: 800;
  background-color: #f9ffea;

  img {
    width: 60px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 310px) {}

  @media only screen and (min-width: 480px) {
    padding: 5px;
    height: 180px;
    font-size: 9px;

    img {
      width: 55px;
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 5px;
    height: 180px;
    font-size: 15px;

    img {
      width: 90px;
    }
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const CEOBase = styled.div`
  background-color: #3b6978;
  display: grid;
  color: white;
  justify-content: center;
  margin-top: 50px;
  padding: 50px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  p{
    margin-top: 0;
  }
  img{
    width: 100px;
    justify-self: center;
  }


  

  @media only screen and (min-width: 310px) {
    font-size: 20px;
  font-weight: 500;
  img{
    width: 100px;
   
  }
  
  }
  @media only screen and (min-width: 480px) {

    img{
    width: 150px;
   
  }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

export const GrupoContactosCEO = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-self: center;
  gap: 10px;

  img {
    width: 30px;

  }

  @media only screen and (min-width: 310px) {
  }
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
