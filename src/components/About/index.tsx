import React from 'react';
import { AboutCard } from './AboutCard';
import {
  SiJavascript,
  SiReact,
  SiAdobeaftereffects,
  SiHtml5,
  SiCss3,
  SiAdobeillustrator,
} from 'react-icons/si';

import { FaNodeJs } from 'react-icons/fa';
import { ExtendScriptLogo } from '../Logos/extendscript_logo';
import { AboutContainer } from './styles';

export function AboutComponent() {
  return (
    <AboutContainer>
      <h3 id="about">Sobre</h3>
      <p>
        Meu nome é Cleber Galves Bordin, sou de São Paulo, Capital – Brasil. Sou
        formado em Desenho Industrial com especialização em Programação Visual
        pela Universidade Presbiteriana Mackenzie. <br />
      </p>
      <h4>Experiência</h4>
      <p>
        Trabalho com computação gráfica desde 2003, diretamente com criação de
        personagens, cenários e animação para o mercado publicitário brasileiro.
        No Mercado Publicitário tive o prazer de trabalhar com diversas
        produtoras, usando primariamente o pacote de softwares
        <strong> Adobe Photoshop</strong>, <strong>Adobe Illustrator</strong>,
        <strong>Adobe After Effects</strong> e também o
        <strong> Autodesk 3dsMax</strong>.
      </p>
      <p>
        Em 2011, criei a Pictovalley Studio, uma empresa de vídeos animados
        explicativos e institucionais direcionada a empresas que queiram
        explicar suas idéias e compartilha-las na internet. Durante a
        pré-produção e a produção dos projetos, eu faço uma pesquisa e
        desenvolvimento de algumas idéias que podem acelerar a produção.
      </p>
      <p>
        Esta prática me levou ao primeiro contato com programação em
        ExtendScript / Javascript, com a criação de ferramentas que auxiliam
        abrir, salvar arquivos, enviar renders para o Adobe Media Encoder, criar
        rigs de personagens, cenários, luzes e acelerar o fluxo de trabalho em
        geral. Impulsionado com esta base de conhecimento de Javascript, me
        abriu maiores possibilidades de aprendizado em Node.js e React, quando
        resolvi expandir meu conhecimento para
        <strong> desenvolvimento web</strong>.
      </p>
      <blockquote>
        Desde então meu trabalho envolve uma mistura de lógica de programação e
        criatividade artística.
      </blockquote>
      <p>
        Este website é um reflexo do meu estudo em desenvolvimento web, onde
        criei sua base em React com o framework Next.js, com uso do Aws Amplify
        e o Aws Cognito.
      </p>

      <h4>Tecnologias</h4>
      <div className="about_tecnologies">
        <AboutCard
          {...{
            text: 'Html',
            icon: SiHtml5,
          }}
        />
        <AboutCard
          {...{
            text: 'Css',
            icon: SiCss3,
          }}
        />
        <AboutCard
          {...{
            text: 'Javascript',
            icon: SiJavascript,
          }}
        />
        <AboutCard
          {...{
            text: 'Adobe After Effects',
            icon: SiAdobeaftereffects,
          }}
        />
        <AboutCard
          {...{
            text: 'Adobe Illustrator',
            icon: SiAdobeillustrator,
          }}
        />
        <AboutCard
          {...{
            text: 'Adobe ExtendScript',
            icon: ExtendScriptLogo,
          }}
        />
        <AboutCard
          {...{
            text: 'React',
            icon: SiReact,
          }}
        />
        <AboutCard
          {...{
            text: 'Node.js',
            icon: FaNodeJs,
          }}
        />
      </div>
      <p>
        Estou sempre em busca de novas propostas e projetos, aprendendo,
        estudando e buscando evoluir meus conhecimentos, sendo inspirado e quem
        sabe inspirar outros profissionais promovendo a troca de experiências.
      </p>
      <p> Se o meu trabalho te interessou, entre em contato comigo.</p>
      <p>
        Cleber Galves Bordin - <i>cleber@cgbordin.com</i>
      </p>
    </AboutContainer>
  );
}
