import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    color: ${colors.azulEscuro};
    width: 90%;
    margin: 30px 0;
    background-color: ${colors.background};
    border: none;
    border-radius: 23px;
    height: 40px;
    padding: 15px;
    padding-left: 30px;
    font-size: 20px;
    &::placeholder {
      color: ${colors.azulEscuro};
      font-family: abel;
      font-size: 20px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

export const Movie = styled.div`
  display: flex;
  background-color: ${colors.background};
  flex: 1;
  position: relative;
  align-self: center;
  cursor: pointer;
  width: 100%;
  border: none;
  & + div {
    margin-top: 40px;
  }

  @media screen and (max-width: 1123px) {
    flex-direction: column;
    align-items: stretch;
    border-radius: 5px;
  }

  img {
    height: auto;
    max-width: 250px;
    width: 100%;

    @media screen and (max-width: 1123px) {
      margin: auto;
      max-width: 500px;
      width: 100%;
      height: auto;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    width: 100%;

    header {
      display: flex;
      flex-direction: row;
      background-color: ${colors.azulEscuro};
      width: 100%;
      h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        font: 36px 'Abel', sans-serif;
        color: ${colors.azulClaro};
        margin-left: 50px;
        padding-left: 30px;
        margin-top: 10px;
      }
      div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${colors.azulEscuro};
        border: 4px solid ${colors.azulClaro};
        margin-top: 22px;
        margin-left: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        box-shadow: 0 0 0 2.5pt ${colors.azulEscuro};
        span {
          font-size: 22px;
          font-family: abel;
          color: ${colors.azulClaro};
        }
      }
    }
    div.info {
      display: flex;
      flex-direction: column;
      padding: 40px;
      flex: 1;

      span {
        display: flex;
        margin: -36px 0px 30px 40px;
        font-size: 16px;
        font-family: abel;
        color: ${colors.data};
        @media screen and (max-width: 1123px) {
          margin: -30px 0px 10px 0px;
          justify-self: center;
          align-self: center;
        }
      }

      p {
        min-height: 30px;
        text-align: left;
        font-size: 16px;
        font-family: abel;

        @media screen and (max-width: 1123px) {
          font-size: 14px;
        }
      }

      ul {
        display: flex;
        align-items: bottom;
        justify-content: bottom;
        flex-wrap: wrap;
        padding-top: 30px;
        margin-top: 10px;
        margin-left: -5px;
        bottom: 12px;

        li {
          font-family: abel;
          box-shadow: 0 0 0 1pt ${colors.azulEscuro};
          color: ${colors.azulEscuro};
          list-style-type: none;
          margin: 8px;
          padding: 6px 12px;
          background-color: #fff;
          border-radius: 16px;
          @media screen and (max-width: 1123px) {
            border-radius: 12px;
            padding: 3px 3px;
          }
        }
      }
    }
  }
`;

export const Footer = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  button {
    margin-left: 20px;
    background-color: #fff;
    color: ${colors.azulClaro};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    &:focus {
      background-color: ${colors.azulEscuro};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border-color: ${colors.azulClaro};
      box-shadow: 0 0 0 2pt ${colors.azulEscuro};
      border: 2px solid;
      outline: none;
    }
  }
`;
