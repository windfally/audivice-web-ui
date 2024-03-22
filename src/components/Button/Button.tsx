import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps {
    primary: boolean;
    backgroundColor: string;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
  }

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${({ primary }) => (primary ? 'white' : '#333')};
  background-color: ${({ primary, backgroundColor }) => (primary ? '#1ea7fd' : backgroundColor || 'transparent')};
  box-shadow: ${({ primary }) => (primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset')};

  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
  padding: ${({ size }) => (size === 'small' ? '10px 16px' : size === 'large' ? '12px 24px' : '11px 20px')};
`;

export const Button: React.FC<ButtonProps> = ({
    primary,
    size,
    backgroundColor,
    children,
    ...props
}) => {
    return (
        <StyledButton
            primary={primary}
            size={size}
            backgroundColor={backgroundColor}
            {...props}>
            {children}
        </StyledButton>
    );
};
