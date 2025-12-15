// ============================================================================
// STORYBLOK COMPONENT MAPPING
// ============================================================================
// Maps Storyblok component names to React components

import {
  SbPage,
  SbHeadingSection,
  SbMediaSection,
  SbGridSection,
  SbContainerSection,
  SbIconCard,
  SbButton,
  SbRichText,
  SbFallback,
} from './bloks';

/**
 * Component mapping for Storyblok
 * Keys should match the technical names of your Storyblok components
 * 
 * Add aliases if your Storyblok component names differ from the defaults
 */
export const components: Record<string, React.ComponentType<{ blok: Record<string, unknown> }>> = {
  // Page wrapper
  page: SbPage,
  Page: SbPage,
  
  // Organisms - with common aliases
  heading_section: SbHeadingSection,
  HeadingSection: SbHeadingSection,
  'Heading Section': SbHeadingSection,
  hero: SbHeadingSection,
  Hero: SbHeadingSection,
  hero_section: SbHeadingSection,
  
  media_section: SbMediaSection,
  MediaSection: SbMediaSection,
  'Media Section': SbMediaSection,
  section: SbMediaSection,  // Generic "section" maps to MediaSection
  Section: SbMediaSection,
  
  grid_section: SbGridSection,
  GridSection: SbGridSection,
  'Grid Section': SbGridSection,
  grid: SbGridSection,
  Grid: SbGridSection,
  feature_grid: SbGridSection,
  
  container_section: SbContainerSection,
  ContainerSection: SbContainerSection,
  'Container Section': SbContainerSection,
  cta: SbContainerSection,
  CTA: SbContainerSection,
  cta_section: SbContainerSection,
  
  // Molecules
  icon_card: SbIconCard,
  IconCard: SbIconCard,
  'Icon Card': SbIconCard,
  feature: SbIconCard,
  Feature: SbIconCard,
  feature_card: SbIconCard,
  card: SbIconCard,
  Card: SbIconCard,
  
  // Atoms
  button: SbButton,
  Button: SbButton,
  link: SbButton,
  Link: SbButton,
  
  rich_text: SbRichText,
  RichText: SbRichText,
  'Rich Text': SbRichText,
  text: SbRichText,
  Text: SbRichText,
  content: SbRichText,
  
  // Fallback for unmapped components
  fallback: SbFallback,
};

/**
 * Get component or fallback
 * This is used internally by Storyblok SDK
 */
export const getComponent = (name: string) => {
  return components[name] || SbFallback;
};
