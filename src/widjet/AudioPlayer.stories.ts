import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './AudioPlayer';

const meta: Meta<typeof AudioPlayer> = {
  title: 'widjets/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AudioPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // ...
};
