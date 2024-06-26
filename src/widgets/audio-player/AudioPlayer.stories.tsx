import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './AudioPlayer';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  Panel,
  PanelHeader,
  View,
} from '@vkontakte/vkui';
import thunder from '../../../public/thunder-very-close-rain-a.wav';
import whipCrack from '../../../public/whip-crack-01.wav';
import cartoonPop from '../../../public/cartoon-pop-clean.flac';
import bubblePop from '../../../public/bubble-pop.wav';
import cover0 from '../../../public/thunder.png';
import cover1 from '../../../public/audiobook_2083134.png';
import cover2 from '../../../public/disc-jockey_2758739.png';
import cover3 from '../../../public/disc-jockey_5295055.png';

const meta: Meta<typeof AudioPlayer> = {
  title: 'widgets/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout>
              <SplitCol width="360px">
                <View activePanel="group">
                  <Panel id="group" mode="plain">
                    <PanelHeader>Плеер</PanelHeader>
                    <Story />
                  </Panel>
                </View>
              </SplitCol>
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    ),
  ],
} satisfies Meta<typeof AudioPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
    title: 'SoundHelix Song 1',
    artist: 'T. Schürger',
    cover: cover0,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 372,
  },
};

export const MultipleAudioPlayersWithSoundEffects: Story = {
  render: () => {
    const songs = [
      {
        id: 0,
        title: 'Thunder, Very Close, Rain',
        artist: 'InspectorJ',
        cover: cover0,
        src: thunder,
        duration: 13,
      },
      {
        id: 1,
        title: 'Whip Crack',
        artist: 'T. CGEffex',
        cover: cover1,
        src: whipCrack,
        duration: 1,
      },
      {
        id: 2,
        title: 'Cartoon Pop',
        artist: 'unfa',
        cover: cover2,
        src: cartoonPop,
        duration: 1,
      },
      {
        id: 3,
        title: 'Bubble Pop',
        artist: 'elmasmalo1',
        cover: cover3,
        src: bubblePop,
        duration: 1,
      },
    ];
    return (
      <>
        {songs.map((song, i) => (
          <AudioPlayer key={i} {...song} />
        ))}
      </>
    );
  },
};

export const MultipleAudioPlayersWithLongSongs: Story = {
  render: () => {
    const songs = [
      {
        id: 1,
        title: 'SoundHelix Song 1',
        artist: 'T. Schürger',
        cover: cover1,
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        duration: 372,
      },
      {
        id: 2,
        title: 'SoundHelix Song 2',
        artist: 'T. Schürger',
        cover: cover2,
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        duration: 425,
      },
      {
        id: 3,
        title: 'SoundHelix Song 3',
        artist: 'T. Schürger',
        cover: cover3,
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        duration: 305,
      },
    ];
    return (
      <>
        {songs.map((song, i) => (
          <AudioPlayer key={i} {...song} />
        ))}
      </>
    );
  },
};
