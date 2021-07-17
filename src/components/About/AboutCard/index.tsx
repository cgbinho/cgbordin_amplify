import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { AboutCardContainer } from './styles';

export function AboutCard({ text, icon: Icon }) {
  return (
    <AboutCardContainer>
      <Icon size={28} />
      <p>{text}</p>
    </AboutCardContainer>
  );
}
