import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { VideoContainer } from './styles';

export function VideoPlyr({ src }) {
  return (
    <VideoContainer>
      <Plyr
        source={{
          type: 'video',
          sources: [
            {
              src,
              provider: 'youtube',
            },
          ],
        }}
        options={{
          controls: [
            'play',
            'progress',
            'settings',
            'volume',
            'duration',
            'fullscreen',
          ],
        }}
      />
    </VideoContainer>
  );
}
