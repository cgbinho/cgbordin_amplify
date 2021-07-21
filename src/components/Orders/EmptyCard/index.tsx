import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { EmptyOrderCardContainer } from './styles';

export function EmptyCard({ content }) {
  return (
    <EmptyOrderCardContainer>
      <RiErrorWarningLine size={40} />
      <p>{content.empty_card.title}</p>
    </EmptyOrderCardContainer>
  );
}
