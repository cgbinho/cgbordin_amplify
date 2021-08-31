import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from '../../styles/home';
import { VideoPlyr } from '../VideoPlyr';
import { ProjectsContent } from './styles';
import { VideoCard } from './VideoCard';

export function ProjectsComponent({ content }) {
  return (
    <ProjectsContent>
      <h1 id="projects">{content.title}</h1>
      <div className="projects_list">
        <section>
          <Link href={`/articles/chocoanimato`}>
            <a>
              <img
                src="images/articles/chocoanimato/chocoanimato_cover.jpg"
                alt={'Choco Animato Cover'}
                width="100%"
              />
            </a>
          </Link>
          <aside>
            <h4>Choco Animato</h4>
            <p>{content.chocoanimato.description}</p>
            <p>{content.chocoanimato.tools}</p>
          </aside>
        </section>
        <section>
          <Link href={`/aepzera`}>
            <a>
              <img
                src="images/aepzera/aepzera_cover.jpg"
                alt={'Aepzera Cover'}
                width="100%"
              />
            </a>
          </Link>
          <aside>
            <h4>Aepzera</h4>
            <p>{content.aepzera.description}</p>
            <p>{content.aepzera.tools}</p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: 'deIBIR3sxcU' }} />
          <aside>
            <h4>Bayer</h4>
            <p>{content.bayer.description}</p>
            <p>{content.bayer.tools}</p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: '6UjcFtj92eU' }} />
          <aside>
            <h4>Huawei</h4>
            <p>{content.huawei.description}</p>
            <p>{content.huawei.tools}</p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: 'j4FyLNfmpM4' }} />
          <aside>
            <h4>Skoland</h4>
            <p>{content.skoland.description}</p>
            <p>{content.skoland.tools}</p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: '-pXMLx54Qk0' }} />
          <aside>
            <h4>Hostfiber</h4>
            <p>{content.hostfiber.description}</p>
            <p>{content.hostfiber.tools}</p>
          </aside>
        </section>
      </div>
    </ProjectsContent>
  );
}
