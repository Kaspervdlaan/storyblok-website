import type { Preview, Decorator } from '@storybook/react';
import { create } from '@storybook/theming/create';
import '../src/styles/_globals.scss';

// Custom docs theme
const vibeDocsTheme = create({
  base: 'light',
  
  // Brand
  brandTitle: 'Vibe Design System',
  brandUrl: '/',
  
  // Colors
  colorPrimary: '#ee9b00',
  colorSecondary: '#0a9396',
  
  // UI
  appBg: '#f7f4ed',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#001219',
  appBorderRadius: 8,
  
  // Text
  textColor: '#001219',
  textInverseColor: '#e9d8a6',
  textMutedColor: '#5c5a52',
  
  // Toolbar
  barTextColor: '#001219',
  barSelectedColor: '#ee9b00',
  barHoverColor: '#0a9396',
  barBg: '#e9d8a6',
  
  // Form
  inputBg: '#ffffff',
  inputBorder: '#001219',
  inputTextColor: '#001219',
  inputBorderRadius: 6,
  
  // Typography
  fontBase: '"Space Mono", "JetBrains Mono", monospace',
  fontCode: '"IBM Plex Mono", "Fira Code", monospace',
});

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
          { value: 'earthy', title: '🌿 Earthy Natural', left: '🍂' },
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
    docs: {
      theme: vibeDocsTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default preview;
