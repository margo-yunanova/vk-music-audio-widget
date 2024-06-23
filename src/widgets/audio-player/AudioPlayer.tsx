import { Icon20GraphOutline } from '@vkontakte/icons';
import { Group, Image, SimpleCell, Tappable } from '@vkontakte/vkui';
import { FC, ReactNode, useEffect, useState } from 'react';
import useSound from 'use-sound';
import styles from './AudioPlayer.module.css';

export interface ISong {
  title: string;
  artist: string;
  cover: string;
  time?: string;
  button: ReactNode;
  song: string;
}

export const AudioPlayer: FC<ISong> = ({
  title,
  artist,
  cover,
  button,
  song,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerIsHovered, setPlayerIsHovered] = useState(false);

  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });

  const playingButton = () => {
    console.log('object');
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    setCurrTime({
      min: min,
      sec: secRemain,
    });
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound.seek([]) > 0) {
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <Tappable onClick={playingButton} activeMode="background" hasActive>
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
          onMouseOver={() => setPlayerIsHovered(true)}
          onMouseOut={() => setPlayerIsHovered(false)}
        >
          {title}
        </SimpleCell>
      </Group>
    </Tappable>
  );
};
