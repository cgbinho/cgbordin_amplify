import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { AboutCardContainer } from './styles';

export function AboutCard({ text, icon: Icon }) {
  return (
    <AboutCardContainer>
      <Icon size={40} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam,
        nisi non senectus sagittis, tortor et euismod.
      </p>
    </AboutCardContainer>
  );
}
