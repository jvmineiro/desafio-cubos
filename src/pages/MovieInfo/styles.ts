import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 521px;
  background-color: #f2f2f2;
  @media screen and (max-width: 1123px) {
    margin-top: 0;
    height: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e6e6;
  padding: 10px;

  span {
    font-size: 18px;
  }

  h1 {
    color: ${colors.azulEscuro};
    padding-left: 20px;
    font-family: abel;
    font-weight: 400;
    font-size: 40px;
  }
  span {
    color: ${colors.data};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 1123px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.aside`
  display: flex;
  img {
    max-width: 350px;
    max-height: 450px;
    @media screen and (max-width: 1123px) {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 50px;
  padding-left: 30px;
  width: 100%;
  h3 {
    font-family: lato;
    font-weight: 400;
    font-size: 25px;
    color: ${colors.azulEscuro};
    border-bottom: 1px solid ${colors.azulClaro};
    margin-bottom: 20px;
    margin-top: 20px;
  }
  p {
    font-size: 17px;
    max-width: 1500px;
  }
  ul {
    display: flex;
    @media screen and (max-width: 1123px) {
      flex-direction: column;
    }
    li {
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1123px) {
        margin-top: 20px;
      }
      span {
        color: ${colors.azulEscuro};
        font-size: 25px;
      }
      strong {
        font-weight: 400;
      }
    }
  }
`;

export const TagContainer = styled.div`
  ul {
    display: flex;
    align-items: bottom;
    flex-wrap: wrap;
    justify-content: bottom;
    padding-top: 30px;
    @media screen and (max-width: 1123px) {
      position: relative;
      flex-direction: row;
      margin-top: -90px;
      margin-bottom: 20px;
      padding-top: 90px;
    }

    li {
      font-family: abel;
      box-shadow: 0 0 0 1pt ${colors.azulEscuro};
      color: ${colors.azulEscuro};
      list-style-type: none;
      padding: 3px 10px;
      background-color: #fff;
      border-radius: 15px;
      margin-right: 10px;
      margin-right: 10px;
    }
  }

  div {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 25px;
    background-color: ${colors.azulEscuro};
    height: 90px;
    width: 90px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 5px solid ${colors.azulClaro};
    box-shadow: 0 0 0 2.5pt ${colors.azulEscuro};
    @media screen and (max-width: 1123px) {
      bottom: 120px;
    }

    span {
      color: ${colors.azulClaro};
      font-size: 30px;
    }
  }
`;

export const VideoContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  iframe {
    @media screen and (max-width: 1123px) {
      height: 300px;
    }
  }
`;
