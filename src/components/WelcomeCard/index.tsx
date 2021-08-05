import React from 'react';
import { useRouter } from 'next/router';
import { WelcomeCardContainer } from './styles';

export function WelcomeCard() {
  const router = useRouter();

  const { locale = 'pt-BR' } = router;

  const title =
    locale !== 'en'
      ? 'Olá, sou o Cleber Galves Bordin!'
      : 'Hello, I am Cleber Galves Bordin!';

  const excerpt =
    locale !== 'en'
      ? `Minha paixão e trabalho se dividem entre criatividade e lógica: Código e Motion Design.`
      : `My passion and work lives between creativity and logic: Code & Motion Design_`;

  return (
    <WelcomeCardContainer>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </WelcomeCardContainer>
  );
}
