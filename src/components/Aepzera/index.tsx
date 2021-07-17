import React from 'react';
import { useRouter } from 'next/router';
import { AepzeraCard } from '../../styles/aepzera';
import { AepzeraLogo } from '../Logos/aepzera_logo';
import { VideoPlyr } from '../VideoPlyr';
import Button from '../Form/Button';

export function AepzeraComponent() {
  const router = useRouter();

  const { locale } = router;

  const description =
    locale !== 'en'
      ? 'Aepzera ajuda a manter sua pipeline de produção organizada no After Effects e agiliza seu workflow.'
      : 'Aepzera helps you to keep your After Effects pipeline organized while boosting your workflow.';

  const learnMore = locale !== 'en' ? 'Saiba Mais' : 'Learn More';

  return (
    <>
      <AepzeraCard>
        <AepzeraLogo />
        <VideoPlyr {...{ src: 'ysz5S6PUM-U' }} />
        <aside>
          <p>{description}</p>
          <Button
            primary
            width="100%"
            height="1rem"
            padding=".8rem 2rem"
            onClick={() => router.push('/aepzera')}
          >
            {learnMore}
          </Button>
        </aside>
      </AepzeraCard>
    </>
  );
}
