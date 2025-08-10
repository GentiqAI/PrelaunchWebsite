import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const classes = `input ${className}`;
  
  return (
    <input className={classes} {...props} />
  );
};

export default Input;
