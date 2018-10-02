import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  top: 0;
  width: 16.5vw;
  height: 100%;
  right: 0;
  background-color: #00a8ff;
  visibility: visible;
`;

const DrawerPresenter = () => (
  <Drawer>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </Drawer>
);
export default DrawerPresenter;
