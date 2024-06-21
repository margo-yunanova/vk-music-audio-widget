import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';
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
import { PopoverWithAllTriggers } from '../widgets/popover-with-all-triggers';
import { Icon16MoreVertical } from '@vkontakte/icons';
import song from '../../public/el-gitano-del-amor.mp3';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
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
  args: {
    songs: [
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        cover:
          'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_5ea838828e079d5083ec827c_5ea85d5b9e714f47e1bfe961/scale_2400',
        // time: '3:23',
        button: (
          <PopoverWithAllTriggers
            content={['Скопировать ссылку', 'Поделится', 'Не нравится']}
            button={<Icon16MoreVertical />}
          />
        ),
        song,
      },
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        cover:
          'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_5ea838828e079d5083ec827c_5ea85d5b9e714f47e1bfe961/scale_2400',
        // time: '3:23',
        button: (
          <PopoverWithAllTriggers
            content={['Скопировать ссылку', 'Поделится', 'Не нравится']}
            button={<Icon16MoreVertical />}
          />
        ),
        song,
      },
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        cover:
          'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_5ea838828e079d5083ec827c_5ea85d5b9e714f47e1bfe961/scale_2400',
        // time: '3:23',
        button: (
          <PopoverWithAllTriggers
            content={['Скопировать ссылку', 'Поделится', 'Не нравится']}
            button={<Icon16MoreVertical />}
          />
        ),
        song,
      },
    ],
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
