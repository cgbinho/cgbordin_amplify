import React from 'react';
import { useRouter } from 'next/router';
import { AepzeraCard } from '../../pages/aepzera/styles';
import { AepzeraLogo } from '../Logos/aepzera_logo';
import { VideoPlyr } from '../VideoPlyr';
import Button from '../Form/Button';

export function AepzeraComponent() {
  const router = useRouter();
  return (
    <>
      <AepzeraCard>
        <AepzeraLogo />
        <VideoPlyr {...{ src: 'ysz5S6PUM-U' }} />
        <aside>
          <p>
            Aepzera ajuda a manter sua pipeline de produção organizada no After
            Effects e agiliza o seu workflow.
          </p>
          <Button
            primary
            width="100%"
            height="1rem"
            padding=".8rem 2rem"
            onClick={() => router.push('/aepzera')}
          >
            Saiba mais
          </Button>
        </aside>
      </AepzeraCard>
    </>
  );
}
