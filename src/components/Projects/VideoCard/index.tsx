import React from 'react';
import { VideoPlyr } from '../../VideoPlyr';
import { VideoCardContainer } from './styles';

export function VideoCard({ src, title, description }) {
  return (
    <VideoCardContainer>
      <VideoPlyr {...{ src }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </VideoCardContainer>
  );
}
