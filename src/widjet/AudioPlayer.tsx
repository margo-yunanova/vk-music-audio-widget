import { Icon16MoreVertical } from '@vkontakte/icons';
import {
  Group,
  IconButton,
  Image,
  SimpleCell,
  Tappable,
} from '@vkontakte/vkui';
import { FC } from 'react';

interface ISong {
  title: string;
  artist: string;
  cover: string;
  time: string;
}

export const AudioPlayer: FC<ISong> = ({ title, artist, cover, time }) => {
  return (
    <Tappable
      onClick={() => console.log('песня играет')}
      activeMode="background"
      hasActive
    >
      <Group mode="plain">
        <SimpleCell
          after={
            <IconButton label="Всплывающее меню" onClick={() => {}}>
              <Icon16MoreVertical />
            </IconButton>
          }
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
