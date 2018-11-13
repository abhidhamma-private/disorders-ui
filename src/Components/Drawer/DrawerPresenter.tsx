import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Drawer = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  align-items: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
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
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  place-content: center center;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  font-weight: 900;
  color: white;
`;

const DrawerComponent = () => (
  <Drawer>
    <Row>
      <Column />
    </Row>
    <Row>
      <Link to="/check-plan">
        <Column>결과 기록하기</Column>
      </Link>
      <Column />
    </Row>
  </Drawer>
);
export default DrawerComponent;
