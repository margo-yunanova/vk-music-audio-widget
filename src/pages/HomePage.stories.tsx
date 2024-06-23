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
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
