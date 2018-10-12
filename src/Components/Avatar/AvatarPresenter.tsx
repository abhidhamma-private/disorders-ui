import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  position: absolute;
  display: grid;
  justify-self: flex-end;
  top: -35px;
  right: 20px;
  z-index: 1;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: white;

  & img {
    align-self: center;
    justify-self: center;
    display: block;
    width: 3.75rem;
    height: 3.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const AvatarPresenter = ({}) => (
  <>
    <Avatar>
      <img src="https://phinf.pstatic.net/contact/20170625_262/1498335240983EncQ4_JPEG/1.jpg?type=f56_56" />
    </Avatar>
  </>
);

export default AvatarPresenter;
