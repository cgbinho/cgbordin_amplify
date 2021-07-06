import React from 'react';
import { Container } from '../../styles/home';
import { VideoPlyr } from '../VideoPlyr';
import { ProjectsContent } from './styles';
import { VideoCard } from './VideoCard';

export function ProjectsComponent() {
  return (
    <ProjectsContent>
      <h3>Projetos</h3>
      <section>
        <VideoPlyr {...{ src: 'deIBIR3sxcU' }} />
        <aside>
          <h3>Bayer</h3>
          <p>Texto descritivo sobre o projeto da Huawei</p>
        </aside>
      </section>
      <section>
        <VideoPlyr {...{ src: '6UjcFtj92eU' }} />
        <aside>
          <h3>Huawei</h3>
          <p>Texto descritivo sobre o projeto da Huawei</p>
        </aside>
      </section>
      <section>
        <VideoPlyr {...{ src: 'j4FyLNfmpM4' }} />
        <aside>
          <h3>Skoland</h3>
          <p>Texto descritivo sobre o projeto da Skol</p>
        </aside>
      </section>
      <section>
        <VideoPlyr {...{ src: '-pXMLx54Qk0' }} />
        <aside>
          <h3>Hostfiber</h3>
          <p>Texto descritivo sobre o projeto da Hostfiber</p>
        </aside>
      </section>
    </ProjectsContent>
  );
}
