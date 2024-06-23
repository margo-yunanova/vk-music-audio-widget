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
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { PopoverWithAllTriggers } from '../popover-with-all-triggers';
import styles from './AudioPlayer.module.css';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const hasTouch =
  'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;

export interface ISong {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: number;
  src: string;
  stopOnUnmount?: boolean;
}

export const AudioPlayer: FC<ISong> = ({
  title,
  artist,
  cover,
  src,
  duration,
  stopOnUnmount = true,
}) => {
  const [playerIsHovered, setPlayerIsHovered] = useState(false);
  const {
    load,
    playing,
    togglePlayPause,
    getPosition,
    src: currentPlayAudio,
    stop,
    paused,
  } = useGlobalAudioPlayer();

  const [currTime, setCurrTime] = useState(duration);
  const onUnmount = useRef<typeof stop | undefined>();

  const formattedSec = Math.floor(currTime % 60)
    .toString()
    .padStart(2, '0');
  const formattedTime = `${Math.floor(currTime / 60)}:${formattedSec}`;

  const isCurrentTrack = src === currentPlayAudio;
  onUnmount.current = stopOnUnmount && isCurrentTrack ? stop : undefined;

  const playingButton = () => {
    if (!isCurrentTrack) {
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
      if (currentPosition > 0 && isCurrentTrack) {
        setCurrTime(currentPosition);
      } else {
        setCurrTime(duration);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [getPosition, isCurrentTrack, duration]);

  useEffect(() => {
    return () => {
      onUnmount.current?.();
    };
  }, []);

  return (
    <Tappable activeMode="background">
      <Group mode="plain">
        <SimpleCell
          after={button}
          subtitle={artist}
          before={
            <Image size={40} src={cover}>
              {playing && isCurrentTrack && (
                <Image.Overlay
                  aria-label="Изображение эквалайзера"
                  visibility="always"
                >
                  <Icon20GraphOutline className={styles['image-equalizer']} />
                </Image.Overlay>
              )}
              {playing && isCurrentTrack && (
                <Image.Overlay
                  aria-label="Кнопка Пауза"
                  visibility={playerIsHovered ? 'always' : 'on-hover'}
                >
                  <Icon20PauseCircle />
                </Image.Overlay>
              )}
              {(!isCurrentTrack || paused) && (
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
          onMouseOver={hasTouch ? undefined : () => setPlayerIsHovered(true)}
          onMouseOut={hasTouch ? undefined : () => setPlayerIsHovered(false)}
          indicator={formattedTime}
        >
          {title}
        </SimpleCell>
      </Group>
    </Tappable>
  );
};
