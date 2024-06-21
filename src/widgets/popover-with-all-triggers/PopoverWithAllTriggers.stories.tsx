import type { Meta, StoryObj } from '@storybook/react';
import { PopoverWithAllTriggers } from './PopoverWithAllTriggers';
import { Icon16MoreVertical } from '@vkontakte/icons';

const meta: Meta<typeof PopoverWithAllTriggers> = {
  title: 'widgets/PopoverWithAllTriggers',
  component: PopoverWithAllTriggers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverWithAllTriggers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    button: <Icon16MoreVertical />,
    content: ['Скопировать ссылку', 'Поделится', 'Не нравится'],
  },
};
