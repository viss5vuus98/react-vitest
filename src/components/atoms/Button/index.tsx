import React, { ReactNode } from 'react';

interface BaseButtonProps {
  variant: 'plant' | 'outline';
  direction?: 'row' | 'col';
  wrapperStyle?: string;
  containerStyle?: string;
  textStyle?: string;
  disabled?: boolean;
  isLading?: boolean;
  children: ReactNode | string;
  onClick?: () => void;
}

const Button = ({
  variant,
  direction,
  wrapperStyle,
  containerStyle,
  textStyle,
  disabled,
  isLading,
  children,
}: BaseButtonProps) => {
  const renderChildren = () => {
    if (React.isValidElement(children)) {
      return children;
    }
    return <span>{children}</span>;
  };
  
  return (
    <div className={wrapperStyle}>
      <button className={containerStyle} disabled={disabled}></button>
    </div>
  );
};
