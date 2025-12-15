import type { Preview, Decorator } from '@storybook/react';
import '../src/styles/_globals.scss';

// Theme decorator that applies theme attributes to the document
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'neobrutalist';
  const mode = context.globals.mode || 'light';
  
  // Apply theme attributes to document
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-mode', mode);
  
  return Story();
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'neobrutalist',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'neobrutalist', title: '🎨 Neobrutalist', left: '⚡' },
          { value: 'minimal', title: '✨ Minimal Modern', left: '◯' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    mode: {
      name: 'Mode',
      description: 'Color mode (light/dark)',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light', left: '🌞' },
          { value: 'dark', title: '🌙 Dark', left: '🌚' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we're using theme
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default preview;
