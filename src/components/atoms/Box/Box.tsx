import React from 'react';
import './_box.scss';

type BoxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BoxDisplay = 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-block';
type BoxDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type BoxAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type BoxJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type BoxGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BoxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
type BoxBackground = 'none' | 'surface' | 'muted' | 'primary' | 'secondary' | 'dark';
type BoxBorder = 'none' | 'default' | 'muted';
type BoxShadow = 'none' | 'sm' | 'md' | 'lg';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  padding?: BoxPadding;
  paddingX?: BoxPadding;
  paddingY?: BoxPadding;
  display?: BoxDisplay;
  direction?: BoxDirection;
  align?: BoxAlign;
  justify?: BoxJustify;
  gap?: BoxGap;
  radius?: BoxRadius;
  background?: BoxBackground;
  border?: BoxBorder;
  shadow?: BoxShadow;
  className?: string;
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
  className = '',
  children,
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
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Element className={classNames} {...props}>
      {children}
    </Element>
  );
};

Box.displayName = 'Box';

export default Box;

