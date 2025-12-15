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
    // Section settings
    align?: 'left' | 'center' | 'right';
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
    background?: 'none' | 'subtle' | 'primary' | 'dark' | 'secondary';
    container_width?: 'sm' | 'md' | 'lg' | 'xl' ;
    // Additional content
    body?: SbBlokData[];
  };
}

export const SbContainerSection: React.FC<SbContainerSectionProps> = ({ blok }) => {
  return (
    <ContainerSection
      {...storyblokEditable(blok)}
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

