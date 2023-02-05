import React from 'react'
import { classNames } from './Util'

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
          className
        )}
     
      {...rest}
    >
      {children}
    </button>
  );
};

interface PageButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled: boolean;
}

export const PageButton: React.FC<PageButtonProps> = ({ children, className,  ...rest }) => {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  );
};

