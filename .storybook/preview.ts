import type { Preview } from '@storybook/react';
import '../src/styles/_globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'primary',
          value: '#ffde03',
        },
        {
          name: 'secondary',
          value: '#ff2d92',
        },
      ],
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default preview;

