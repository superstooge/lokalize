import React from 'react';
import './Card.scss';

export const Card = ({
  children,
  className,
  forwardRef,
  testId = 'card',
  ...rest
}) => {

  return (
    <div ref={forwardRef} className={`card ${className}`} data-testid={testId} {...rest}>
      {children}
    </div>
  );
};
