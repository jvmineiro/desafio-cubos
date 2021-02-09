import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.header`
  background-color: ${colors.azulEscuro};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  a {
    color: ${colors.azulClaro};
    font-size: 30px;
    text-decoration: none;
  }
`;
