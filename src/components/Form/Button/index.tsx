import React, { ButtonHTMLAttributes } from 'react';
import { Container, SpinnerContainer } from './styles';
// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  padding?: string;
  width?: string;
  height?: string;
  primary?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Button = ({
  children,
  primary,
  padding,
  width,
  height,
  disabled,
  isLoading = false,
  className,
  ...rest
}: IButtonProps) => {
  return (
    <Container
      type="button"
      primary={primary}
      width={width}
      height={height}
      padding={padding}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {!isLoading ? children : <SpinnerContainer></SpinnerContainer>}
    </Container>
  );
};

export default Button;
