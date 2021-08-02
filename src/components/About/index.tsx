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

export function AboutComponent({ content }) {
  return (
    <AboutContainer>
      <h1 id="about">{content.title}</h1>
      <section className="about_description">
        <p>{content.description}</p>
        <img
          className="about_img"
          src="/images/cgbordin_profile.jpg"
          alt="Cleber Galves Bordin"
        />
      </section>
      <h4>{content.experience.title}</h4>
      <p>{content.experience.description_01}</p>
      <p>{content.experience.description_02}</p>
      <p>{content.experience.description_03}</p>
      <p>{content.experience.description_04}</p>
      <p>{content.experience.description_05}</p>
      <h4>{content.technologies.title}</h4>
      <div className="about_tecnologies">
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
            text: 'Javascript',
            icon: SiJavascript,
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
      </div>
      <p>{content.technologies.description}</p>
      <p>
        Cleber Galves Bordin - <i>cleber@cgbordin.com</i>
      </p>
    </AboutContainer>
  );
}
