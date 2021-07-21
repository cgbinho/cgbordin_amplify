import React from 'react';
import { useRouter } from 'next/router';
import { WelcomeCardContainer } from './styles';

export function WelcomeCard() {
  const router = useRouter();

  const { locale } = router;

  const title =
    locale !== 'en'
      ? 'Olá, sou o Cleber Galves Bordin!'
      : 'Hello, I am Cleber Galves Bordin!';

  const excerpt =
    locale !== 'en'
      ? `Formado em desenho industrial com foco em programação visual, meu
  trabalho se divide entre criatividade e lógica: programação dentro de
  softwares criativos como por exemplo o Adobe After Effects.`
      : `Graduated in industrial design with a focus on visual programming, my
      work is divided between creativity and logic: programming within
      creative software such as Adobe After Effects.`;

  return (
    <WelcomeCardContainer>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </WelcomeCardContainer>
  );
}
