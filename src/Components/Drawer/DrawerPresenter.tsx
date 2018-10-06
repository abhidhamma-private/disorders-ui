import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  position: fixed;
  top: 0;
  width: 16.5vw;
  height: 100%;
  right: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100vh;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(http://s3.amazonaws.com/lyah/bg.png) 0 0 repeat;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;

const Row = styled.div`
  display: grid;
`;

const Column = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  display: grid;
`;

const Img = styled.div``;

const DrawerPresenter = () => (
  <Drawer>
    <Row>
      <Column>
        <Img />
      </Column>
    </Row>
    <Row>
      <Column />
      <Column />
    </Row>
  </Drawer>
);
export default DrawerPresenter;
