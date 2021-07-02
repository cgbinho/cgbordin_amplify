import React from 'react';
import { ProjectsContainer } from './styles';
import { VideoCard } from './VideoCard';

export function ProjectsComponent() {
  return (
    <section className="content">
      <h3>Projetos</h3>
      <ProjectsContainer>
        <VideoCard
          {...{
            src: 'ysz5S6PUM-U',
            title: 'Huawei',
            description: 'Texto descritivo sobre o vídeo',
          }}
        />
        <VideoCard
          {...{
            src: 'ysz5S6PUM-U',
            title: 'Huawei',
            description: 'Texto descritivo sobre o vídeo',
          }}
        />
        <VideoCard
          {...{
            src: 'ysz5S6PUM-U',
            title: 'Huawei',
            description: 'Texto descritivo sobre o vídeo',
          }}
        />
        <VideoCard
          {...{
            src: 'ysz5S6PUM-U',
            title: 'Huawei',
            description: 'Texto descritivo sobre o vídeo',
          }}
        />
      </ProjectsContainer>
    </section>
  );
}
