import React from 'react';
import Button from '../Form/Button';
import { AepzeraLogo } from '../Logos/aepzera_logo';
import { VideoPlyr } from '../VideoPlyr';

export function AepzeraComponent() {
  return (
    <section className="content">
      <AepzeraLogo />
      <VideoPlyr {...{ src: 'ysz5S6PUM-U' }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam,
        nisi non senectus sagittis, tortor et euismod.
      </p>
      <Button primary width="40%" height="40px" padding="1.2rem 0rem">
        Comprar
      </Button>
    </section>
  );
}
