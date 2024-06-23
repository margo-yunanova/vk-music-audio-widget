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
import useSound from 'use-sound';
import { PopoverWithAllTriggers } from '../popover-with-all-triggers';
import styles from './AudioPlayer.module.css';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerIsHovered, setPlayerIsHovered] = useState(false);
  const [play, { pause, sound }] = useSound(src);

  const [currTime, setCurrTime] = useState(duration);

  const formattedSec = Math.floor(currTime % 60)
    .toString()
    .padStart(2, '0');
  const formattedTime = `${Math.floor(currTime / 60)}:${formattedSec}`;

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
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
      const currentPosition = sound.seek([]);
      if (currentPosition > 0) {
        setCurrTime(currentPosition);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <Tappable activeMode="background">
      <Group mode="plain">
        <SimpleCell
          after={button}
          subtitle={artist}
          before={
            <Image size={40} src={cover}>
              {isPlaying && (
                <Image.Overlay
                  aria-label="Изображение эквалайзера"
                  visibility="always"
                >
                  <Icon20GraphOutline className={styles['image-equalizer']} />
                </Image.Overlay>
              )}
              {isPlaying && (
                <Image.Overlay
                  aria-label="Кнопка Пауза"
                  visibility={playerIsHovered ? 'always' : 'on-hover'}
                >
                  <Icon20PauseCircle />
                </Image.Overlay>
              )}
              {!isPlaying && (
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
