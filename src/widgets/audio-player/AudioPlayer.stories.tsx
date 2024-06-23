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
import src from '../../../public/el-gitano-del-amor.mp3';

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
    title: 'Back in Black',
    artist: 'AC/DC',
    cover:
      'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_5ea838828e079d5083ec827c_5ea85d5b9e714f47e1bfe961/scale_2400',
    src,
    duration: 216,
  },
};
