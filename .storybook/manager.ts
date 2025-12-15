import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import './storybook.css';

// Custom Vibe Design System theme - Neobrutalist
const vibeTheme = create({
  base: 'dark', // Dark base for sidebar
  
  // Brand
  brandTitle: 'Vibe Design System',
  brandUrl: '/',
  brandTarget: '_self',
  brandImage: '/vibe-logo.svg',
  
  // Colors - Neobrutalist palette
  colorPrimary: '#ee9b00',
  colorSecondary: '#0a9396',
  
  // UI - Dark sidebar, light content
  appBg: '#001219', // Sidebar background
  appContentBg: '#ffffff', // Canvas background
  appPreviewBg: '#ffffff',
  appBorderColor: '#ee9b00',
  appBorderRadius: 0, // Sharp corners
  
  // Text colors
  textColor: '#e9d8a6', // Sidebar text
  textInverseColor: '#001219',
  textMutedColor: '#94d2bd',
  
  // Toolbar
  barTextColor: '#e9d8a6',
  barSelectedColor: '#ee9b00',
  barHoverColor: '#0a9396',
  barBg: '#001219',
  
  // Form colors
  inputBg: '#e9d8a6',
  inputBorder: '#001219',
  inputTextColor: '#001219',
  inputBorderRadius: 0,
  
  // Button
  buttonBg: '#ee9b00',
  buttonBorder: '#001219',
  
  // Boolean (toggle)
  booleanBg: '#005f73',
  booleanSelectedBg: '#ee9b00',
  
  // Typography - Monospace for that brutalist feel
  fontBase: '"Space Mono", "JetBrains Mono", monospace',
  fontCode: '"IBM Plex Mono", "Fira Code", monospace',
});

addons.setConfig({
  theme: vibeTheme,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
});
