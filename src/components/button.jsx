import React from 'react';

/**
 * Reusable Button Component for BrightStart Tutoring
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Button text content
 * @param {Function} props.onClick - Click handler function
 * @param {string} [props.variant='primary'] - Button style variant ('primary' | 'secondary')
 * @param {string} [props.size='md'] - Button size ('sm' | 'md' | 'lg')
 * @param {string} [props.ariaLabel] - Accessibility label for screen readers
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {string} [props.className] - Additional CSS classes
 * 
 * @example
 * // Primary button (default)
 * <Button label="Start Learning Today" onClick={() => console.log('clicked')} />
 * 
 * @example
 * // Secondary button with large size
 * <Button 
 *   label="Learn More" 
 *   variant="secondary" 
 *   size="lg"
 *   onClick={handleLearnMore} 
 * />
 */
const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  ariaLabel,
  disabled = false,
  className = '',
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:transform active:scale-95';

  // Variant styles - EXACT TICKET SPECIFICATIONS
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400'
  };

  // Size styles - EXACT TICKET SPECIFICATIONS  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;