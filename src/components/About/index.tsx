import React from 'react';
import { AboutCard } from './AboutCard';
import { SiJavascript, SiReact, SiAdobeaftereffects } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export function AboutComponent() {
  return (
    <section className="content">
      <h3 id="about">Sobre</h3>
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: SiJavascript,
        }}
      />
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: FaNodeJs,
        }}
      />
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: SiReact,
        }}
      />
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: SiAdobeaftereffects,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam,
        nisi non senectus sagittis, tortor et euismod.
      </p>
      <p>cleber@cgbordin.com</p>
    </section>
  );
}
