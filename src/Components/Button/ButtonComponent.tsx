import React from 'react';
import styled from '../../typed-components';

const Container = styled.input`
  height: 2.25rem;
  display: grid;
  align-self: center;
  flex-wrap: wrap;
  justify-self: center;
  background-color: white;
  color: black;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);
  border-radius: 2px;
  margin-left: 3px;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

interface IProps {
  value?: string;
  onSubmit?: any;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  type?: string;
}

const ButtonComponent: React.SFC<IProps> = ({
  value,
  onSubmit,
  onClick,
  disabled = false,
  className,
  type = 'submit',
}) => (
  <Container
    value={value}
    onSubmit={onSubmit}
    onClick={onClick}
    disabled={disabled}
    className={className}
    type={type}
  />
);

export default ButtonComponent;
