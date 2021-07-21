import React from 'react';
import { useRouter } from 'next/router';
import { BsCheckCircle } from 'react-icons/bs';
import { SuccessCardContainer } from './styles';
import Button from '../../Form/Button';

export function SuccessCard({ content }) {
  const router = useRouter();
  return (
    <SuccessCardContainer>
      <BsCheckCircle size={40} />
      <h2>{content.description_01}</h2>
      <br />
      <p>{content.description_02}</p>
      <br />
      <p>{content.description_03}</p>
    </SuccessCardContainer>
  );
}
