import React from 'react';
import './_box.scss';

type BoxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BoxDisplay = 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-block' | 'none';
type BoxDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type BoxAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type BoxJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type BoxGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BoxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
type BoxBackground = 'none' | 'surface' | 'muted' | 'primary' | 'secondary' | 'dark';
type BoxBorder = 'none' | 'default' | 'muted';
type BoxShadow = 'none' | 'sm' | 'md' | 'lg';
type BoxPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type BoxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Padding on all sides */
  padding?: BoxPadding;
  /** Horizontal padding */
  paddingX?: BoxPadding;
  /** Vertical padding */
  paddingY?: BoxPadding;
  /** Display property */
  display?: BoxDisplay;
  /** Flex direction */
  direction?: BoxDirection;
  /** Align items */
  align?: BoxAlign;
  /** Justify content */
  justify?: BoxJustify;
  /** Gap between children */
  gap?: BoxGap;
  /** Border radius */
  radius?: BoxRadius;
  /** Background color */
  background?: BoxBackground;
  /** Border style */
  border?: BoxBorder;
  /** Box shadow */
  shadow?: BoxShadow;
  /** Position property */
  position?: BoxPosition;
  /** Top offset (CSS value) */
  top?: string | number;
  /** Right offset (CSS value) */
  right?: string | number;
  /** Bottom offset (CSS value) */
  bottom?: string | number;
  /** Left offset (CSS value) */
  left?: string | number;
  /** Inset (shorthand for top/right/bottom/left) */
  inset?: string | number;
  /** Z-index */
  zIndex?: number;
  /** Overflow behavior */
  overflow?: BoxOverflow;
  /** Width (CSS value) */
  width?: string | number;
  /** Height (CSS value) */
  height?: string | number;
  /** Min width (CSS value) */
  minWidth?: string | number;
  /** Min height (CSS value) */
  minHeight?: string | number;
  /** Max width (CSS value) */
  maxWidth?: string | number;
  /** Max height (CSS value) */
  maxHeight?: string | number;
  /** Additional CSS classes */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  as: Element = 'div',
  padding,
  paddingX,
  paddingY,
  display,
  direction,
  align,
  justify,
  gap,
  radius,
  background,
  border,
  shadow,
  position,
  top,
  right,
  bottom,
  left,
  inset,
  zIndex,
  overflow,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className = '',
  children,
  style,
  ...props
}) => {
  const classNames = [
    'box',
    padding && `box--p-${padding}`,
    paddingX && `box--px-${paddingX}`,
    paddingY && `box--py-${paddingY}`,
    display && `box--display-${display}`,
    direction && `box--direction-${direction}`,
    align && `box--align-${align}`,
    justify && `box--justify-${justify}`,
    gap && `box--gap-${gap}`,
    radius && `box--radius-${radius}`,
    background && `box--bg-${background}`,
    border && `box--border-${border}`,
    shadow && `box--shadow-${shadow}`,
    position && `box--position-${position}`,
    overflow && `box--overflow-${overflow}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Build inline styles for position offsets and sizing
  const inlineStyles: React.CSSProperties = {
    ...style,
    ...(top !== undefined && { top }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(inset !== undefined && { inset }),
    ...(zIndex !== undefined && { zIndex }),
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
    ...(minWidth !== undefined && { minWidth }),
    ...(minHeight !== undefined && { minHeight }),
    ...(maxWidth !== undefined && { maxWidth }),
    ...(maxHeight !== undefined && { maxHeight }),
  };

  // Only pass style if we have inline styles
  const hasInlineStyles = Object.keys(inlineStyles).length > 0;

  // Use type assertion for the dynamic element
  const Component = Element as React.ElementType;

  return (
    <Component 
      className={classNames} 
      style={hasInlineStyles ? inlineStyles : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

Box.displayName = 'Box';

export default Box;
