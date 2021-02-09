import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from './styles';

export const Header: React.FC = ({children}) => (
  <Container>
    <Link to="/">{children}</Link>
  </Container>
);
