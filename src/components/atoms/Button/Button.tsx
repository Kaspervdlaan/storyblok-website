import React, { forwardRef } from 'react';
import './_button.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Makes button take full width of container */
  fullWidth?: boolean;
  /** Shows loading spinner and disables interaction */
  isLoading?: boolean;
  /** Icon element to show before the text */
  leftIcon?: React.ReactNode;
  /** Icon element to show after the text */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Button content */
  children?: React.ReactNode;
}

const Spinner: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const sizeMap = {
    sm: 14,
    md: 18,
    lg: 22,
  };
  const dimension = sizeMap[size];

  return (
    <svg
      className="button__spinner"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const classNames = [
      'button',
      `button--${variant}`,
      `button--${size}`,
      fullWidth && 'button--full-width',
      isLoading && 'button--loading',
      isDisabled && 'button--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={isDisabled}
        aria-busy={isLoading}
        data-focus-managed="true"
        {...props}
      >
        {isLoading ? (
          <Spinner size={size} />
        ) : (
          leftIcon && <span className="button__icon button__icon--left">{leftIcon}</span>
        )}
        <span className="button__text">{children}</span>
        {!isLoading && rightIcon && (
          <span className="button__icon button__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

