import React from 'react';
import { Container } from './styles';
import { CgbordinIcon } from './cgbordin_icon';
import { CgbordinText } from './cgbordin_text';

export default function Logo() {
  return (
    <Container>
      <CgbordinIcon />
      <CgbordinText />
    </Container>
  );
}
