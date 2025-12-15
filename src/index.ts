// ============================================================================
// VIBE DESIGN SYSTEM
// ============================================================================

// Atoms
export { Typography, type TypographyProps } from './components/atoms/Typography';
export { Button, type ButtonProps } from './components/atoms/Button';
export { Box, type BoxProps } from './components/atoms/Box';
export { Icon, type IconProps } from './components/atoms/Icon';
export { Media, type MediaProps } from './components/atoms/Media';
export { Input, type InputProps } from './components/atoms/Input';
export { Divider, type DividerProps } from './components/atoms/Divider';
export { Wysiwyg, type WysiwygProps } from './components/atoms/Wysiwyg';
export { Container, type ContainerProps } from './components/atoms/Container';
export { Section, type SectionProps } from './components/atoms/Section';

// Molecules
export {
  Card,
  type CardProps,
  type CardHeaderProps,
  type CardBodyProps,
  type CardFooterProps,
} from './components/molecules/Card';

export { IconCard, type IconCardProps } from './components/molecules/IconCard';

export { Heading, type HeadingProps } from './components/molecules/Heading';

export { Quote, type QuoteProps } from './components/molecules/Quote';

export {
  Accordion,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionHeaderProps,
  type AccordionPanelProps,
} from './components/molecules/Accordion';

// Organisms
export { MediaSection, type MediaSectionProps } from './components/organisms/MediaSection';
export { HeadingSection, type HeadingSectionProps } from './components/organisms/HeadingSection';

// Providers
export {
  ThemeProvider,
  useTheme,
  type ThemeProviderProps,
  type ThemeContextValue,
  type ThemeName,
  type ThemeMode,
} from './components/providers/Theme';

// Styles
// Import these in your app's entry point:
// import 'vibe-design-system/src/styles/_globals.scss';

