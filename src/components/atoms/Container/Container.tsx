import React from 'react';
import './_container.scss';

type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl';
type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerMaxWidth;
  padding?: ContainerPadding;
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const classNames = [
    'container',
    `container--${maxWidth}`,
    `container--padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';

export default Container;

