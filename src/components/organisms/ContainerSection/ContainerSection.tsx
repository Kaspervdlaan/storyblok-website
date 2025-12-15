import React from 'react';
import { Section, SectionProps } from '../../atoms/Section';
import { Container } from '../../atoms/Container';
import { Stack } from '../../atoms/Stack';
import { ButtonGroup, ButtonGroupProps } from '../../molecules/ButtonGroup';
import { Heading, HeadingProps } from '../../molecules/Heading';
import './_container-section.scss';

// ============================================================================
// TYPES
// ============================================================================

type ContainerSectionAlign = 'left' | 'center' | 'right';

export interface ContainerSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Optional heading props (title, subtitle, eyebrow, etc.) */
  heading?: HeadingProps;
  /** ButtonGroup props */
  buttonGroup?: {
    /** Buttons to render */
    buttons: React.ReactNode;
    /** ButtonGroup variant */
    variant?: ButtonGroupProps['variant'];
    /** ButtonGroup direction */
    direction?: ButtonGroupProps['direction'];
    /** ButtonGroup gap */
    gap?: ButtonGroupProps['gap'];
    /** Full width buttons */
    fullWidth?: boolean;
  };
  /** Content alignment */
  align?: ContainerSectionAlign;
  /** Section spacing */
  spacing?: SectionProps['spacing'];
  /** Section background */
  background?: SectionProps['background'];
  /** Container max width */
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Additional content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ContainerSection: React.FC<ContainerSectionProps> = ({
  heading,
  buttonGroup,
  align = 'center',
  spacing = 'md',
  background = 'none',
  containerWidth = 'lg',
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    'container-section',
    `container-section--align-${align}`,
    className,
  ].filter(Boolean).join(' ');

  const stackAlign = align === 'left' ? 'start' : align === 'right' ? 'end' : 'center';

  return (
    <Section
      className={classNames}
      spacing={spacing}
      background={background}
      {...props}
    >
      <Container maxWidth={containerWidth}>
        <Stack direction="column" gap="lg" align={stackAlign}>
          {heading && (
            <Heading {...heading} align={align} />
          )}

          {buttonGroup && (
            <ButtonGroup
              variant={buttonGroup.variant}
              direction={buttonGroup.direction}
              gap={buttonGroup.gap}
              fullWidth={buttonGroup.fullWidth}
            >
              {buttonGroup.buttons}
            </ButtonGroup>
          )}

          {children}
        </Stack>
      </Container>
    </Section>
  );
};

ContainerSection.displayName = 'ContainerSection';

