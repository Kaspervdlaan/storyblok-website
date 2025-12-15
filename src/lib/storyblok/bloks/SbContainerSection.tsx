// ============================================================================
// STORYBLOK CONTAINER SECTION
// ============================================================================

import React from 'react';
import { storyblokEditable, StoryblokComponent, SbBlokData } from '@storyblok/react';
import { ContainerSection } from '../../../components/organisms/ContainerSection';

export interface SbContainerSectionProps {
  blok: {
    _uid: string;
    component: string;
    // Heading fields
    title?: string;
    subtitle?: string;
    eyebrow?: string;
    heading_size?: 'sm' | 'md' | 'lg' | 'xl';
    // Button group
    buttons?: SbBlokData[];
    button_variant?: 'default' | 'attached';
    button_direction?: 'row' | 'column';
    button_gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    // Section settings
    align?: 'left' | 'center' | 'right';
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
    background?: 'none' | 'subtle' | 'primary' | 'dark' | 'secondary';
    container_width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    // Additional content
    body?: SbBlokData[];
  };
}

export const SbContainerSection: React.FC<SbContainerSectionProps> = ({ blok }) => {
  // Build heading props if title is provided
  const heading = blok.title
    ? {
        title: blok.title,
        subtitle: blok.subtitle,
        eyebrow: blok.eyebrow,
        size: blok.heading_size,
      }
    : undefined;

  // Build button group if buttons are provided
  const buttonGroup = blok.buttons && blok.buttons.length > 0
    ? {
        buttons: (
          <>
            {blok.buttons.map((buttonBlok) => (
              <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
            ))}
          </>
        ),
        variant: blok.button_variant,
        direction: blok.button_direction,
        gap: blok.button_gap,
      }
    : undefined;

  return (
    <ContainerSection
      {...storyblokEditable(blok)}
      heading={heading}
      buttonGroup={buttonGroup}
      align={blok.align}
      spacing={blok.spacing}
      background={blok.background}
      containerWidth={blok.container_width}
    >
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </ContainerSection>
  );
};

SbContainerSection.displayName = 'SbContainerSection';

