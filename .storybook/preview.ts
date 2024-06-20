import type { Preview } from '@storybook/react';
import '@vkontakte/vkui/dist/vkui.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
