import { Group, Image, SimpleCell, Tappable } from '@vkontakte/vkui';
import { FC, ReactNode } from 'react';

interface ISong {
  title: string;
  artist: string;
  cover: string;
  time: string;
  button: ReactNode;
}

export const AudioPlayer: FC<ISong> = ({
  title,
  artist,
  cover,
  time,
  button,
}) => {
  return (
    <Tappable
      onClick={() => console.log('песня играет')}
      activeMode="background"
      hasActive
    >
      <Group mode="plain">
        <SimpleCell
          after={button}
          subtitle={artist}
          before={<Image size={40} src={cover} />}
          onClick={() => {}}
          indicator={time}
        >
          {title}
        </SimpleCell>
      </Group>
    </Tappable>
  );
};
