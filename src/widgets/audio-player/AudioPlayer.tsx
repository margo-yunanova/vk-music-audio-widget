import {
  Icon16MoreVertical,
  Icon20CopyOutline,
  Icon20GraphOutline,
  Icon20PauseCircle,
  Icon20PlayCircle,
  Icon20ShareOutline,
  Icon20ThumbsDownOutline,
} from '@vkontakte/icons';
import { Group, Image, SimpleCell, Tappable } from '@vkontakte/vkui';
import { FC, useEffect, useMemo, useState } from 'react';
import { PopoverWithAllTriggers } from '../popover-with-all-triggers';
import styles from './AudioPlayer.module.css';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

export interface ISong {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: number;
  src: string;
}

export const AudioPlayer: FC<ISong> = ({
  id,
  title,
  artist,
  cover,
  src,
  duration,
}) => {
  const [playerIsHovered, setPlayerIsHovered] = useState(false);
  const { load, playing, paused, togglePlayPause, getPosition } =
    useGlobalAudioPlayer();

  const [currTime, setCurrTime] = useState(duration);

  const formattedSec = Math.floor(currTime % 60)
    .toString()
    .padStart(2, '0');
  const formattedTime = `${Math.floor(currTime / 60)}:${formattedSec}`;

  const playingButton = () => {
    if (!paused && !playing) {
      load(src, {
        autoplay: true,
        html5: true,
      });
      return;
    }

    togglePlayPause();
  };

  const button = useMemo(() => {
    const contentForPopover = [
      { title: 'Скопировать ссылку', icon: <Icon20CopyOutline /> },
      { title: 'Поделится', icon: <Icon20ShareOutline /> },
      { title: 'Не нравится', icon: <Icon20ThumbsDownOutline /> },
    ];
    return (
      <PopoverWithAllTriggers
        content={contentForPopover}
        button={<Icon16MoreVertical onClick={(e) => e.stopPropagation()} />}
      />
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPosition = getPosition();
      if (currentPosition > 0) {
        setCurrTime(currentPosition);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [getPosition]);

  return (
    <Tappable activeMode="background">
      <Group mode="plain">
        <SimpleCell
          after={button}
          subtitle={artist}
          before={
            <Image size={40} src={cover}>
              {playing && (
                <Image.Overlay
                  aria-label="Изображение эквалайзера"
                  visibility="always"
                >
                  <Icon20GraphOutline className={styles['image-equalizer']} />
                </Image.Overlay>
              )}
              {playing && (
                <Image.Overlay
                  aria-label="Кнопка Пауза"
                  visibility={playerIsHovered ? 'always' : 'on-hover'}
                >
                  <Icon20PauseCircle />
                </Image.Overlay>
              )}
              {!playing && (
                <Image.Overlay
                  aria-label="Кнопка Играть"
                  visibility={playerIsHovered ? 'always' : 'on-hover'}
                >
                  <Icon20PlayCircle />
                </Image.Overlay>
              )}
            </Image>
          }
          onClick={playingButton}
          onMouseOver={() => setPlayerIsHovered(true)}
          onMouseOut={() => setPlayerIsHovered(false)}
          indicator={formattedTime}
        >
          {title}
        </SimpleCell>
      </Group>
    </Tappable>
  );
};
