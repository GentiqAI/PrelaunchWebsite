import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700'
  };
  
  const sizes = {
    sm: 'h-9 px-4 py-2 text-sm',
    md: 'h-10 px-6 py-2 text-sm',
    lg: 'btn-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
