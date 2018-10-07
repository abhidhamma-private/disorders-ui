import React from 'react';
import styled from '../../typed-components';
const Container = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  width: 200%;
  height: 100%;
  font-weight: 500;
  line-height: 50px;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom: 3px solid white;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 500;
    line-height: 40px;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: any;
  name?: string;
  onChange?: any;
}

const Input: React.SFC<IProps> = ({
  placeholder = '',
  type = 'text',
  required = true,
  value,
  name = '',
  onChange,
}) => (
  <Container
    name={name}
    type={type}
    required={required}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
export default Input;
