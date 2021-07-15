import React from 'react';
import { AboutCard } from './AboutCard';
import { SiJavascript, SiReact, SiAdobeaftereffects } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { ExtendScriptLogo } from '../Logos/extendscript_logo';
import { AboutContainer } from './styles';

export function AboutComponent() {
  return (
    <AboutContainer>
      <h3 id="about">Sobre</h3>
      <p>
        Meu nome é Cleber Galves Bordin, sou de São Paulo, Capital – Brasil.
        <br />
        Sou formado em Desenho Industrial com especialização em Programação
        Visual pela Universidade Presbiteriana Mackenzie. <br />
        Trabalho com computação gráfica desde 2003, diretamente com criação de
        personagens, cenários e animação para o mercado publicitário brasileiro.
        No Mercado Publicitário tive o prazer de trabalhar com diversas
        produtoras, usando minhas ferramentas principais: o Adobe After Effects
        e o Autodesk 3dsMax. <br />
        Durante a pré-produção e a produção dos projetos, eu faço uma pesquisa e
        desenvolvimento de algumas idéias que podem acelerar a produção. <br />
        Esta prática me levou ao primeiro contato com programação em
        ExtendScript / Javascript , com o intuito de automatizar tarefas e
        acelerar a entrega do trabalho. <br />
        Em 2011, criei a Pictovalley Studio, uma empresa de vídeos animados
        explicativos e institucionais direcionada a empresas que queiram
        explicar suas idéias e compartilha-las na internet e por meio da
        Pictovalley Studio. Desde então esta base de conhecimento de Javascript
        me abriu maiores possibilidades de aprendizado em Node.js e React,
        quando resolvi expandir meu conhecimento para desenvolvimento web.
        <br />
        Este website é um reflexo do meu estudo em desenvolvimento web, onde
        criei sua base em React com o framework Next.js. <br />
        Compartilharei aqui algumas dessas idéias e scripts para quem sabe,
        inspirar e também trocar experiências entre nós artistas de computação
        gráfica.
      </p>
      <h4>ExtendScript</h4>

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
          text: 'Adobe ExtendScript',
          icon: ExtendScriptLogo,
        }}
      />
      <AboutCard
        {...{
          text: 'Node.js - ',
          icon: FaNodeJs,
        }}
      />
      <AboutCard
        {...{
          text: 'React',
          icon: SiReact,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam,
        nisi non senectus sagittis, tortor et euismod.
      </p>
      <p>cleber@cgbordin.com</p>
    </AboutContainer>
  );
}
