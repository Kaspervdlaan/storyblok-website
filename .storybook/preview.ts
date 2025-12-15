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
          name: 'champagne',
          value: '#e9d8a6',
        },
        {
          name: 'dark',
          value: '#001219',
        },
        {
          name: 'primary',
          value: '#ee9b00',
        },
        {
          name: 'secondary',
          value: '#0a9396',
        },
        {
          name: 'mint',
          value: '#94d2bd',
        },
      ],
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default preview;

