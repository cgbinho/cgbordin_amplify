import React from 'react';
import { AboutCard } from './AboutCard';
import { SiJavascript } from 'react-icons/si';

export function AboutComponent() {
  return (
    <section className="content">
      <h3>Sobre</h3>
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: SiJavascript,
        }}
      />
      <AboutCard
        {...{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
          icon: SiJavascript,
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
