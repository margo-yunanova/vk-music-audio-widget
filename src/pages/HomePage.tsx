import { FC } from 'react';
import { AudioPlayer, ISong } from '../widgets/audio-player/AudioPlayer';

interface ISongs {
  songs: ISong[];
}

export const HomePage: FC<ISongs> = ({ songs }) => (
  <div>
    {songs.map((song, i) => (
      <AudioPlayer key={i} {...song} />
    ))}
  </div>
);
