import React from 'react';
import { Section, SectionProps } from '../../atoms/Section';
import { Container } from '../../atoms/Container';
import './_container-section.scss';

// ============================================================================
// TYPES
// ============================================================================

type ContainerSectionAlign = 'left' | 'center' | 'right';

export interface ContainerSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  align?: ContainerSectionAlign;
  spacing?: SectionProps['spacing'];
  background?: SectionProps['background'];
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ContainerSection: React.FC<ContainerSectionProps> = ({
  align = 'center',
  spacing = 'md',
  containerWidth = 'lg',
  background = 'none',
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    'container-section',
    `container-section--align-${align}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Section
      className={classNames}
      spacing={spacing}
      background={background}
      {...props}
    >
      <Container maxWidth={containerWidth}>
        {children}
      </Container>
    </Section>
  );
};

ContainerSection.displayName = 'ContainerSection';

