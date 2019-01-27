import React from 'react';
import { storiesOf } from '@storybook/react';
import VideoPlayer from '../src/VideoPlayer';

storiesOf('VideoPlayer', module)
  .add('Fails CORS OR does not show thumbnail', () => <VideoPlayer videoUrl={'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'} snapshotAt={10} />)
  .add('Shows thumbnail', () => <VideoPlayer videoUrl={'https://archive.org/download/mov-bbb/mov_bbb.mp4'} snapshotAt={10} />);
