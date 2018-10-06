import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.6);
  height: 50px;
  width: 100%;
  border-bottom: #eeeeee;
  border-width: 0 0 1px;
  z-index: 2;
`;

const Row = styled.div`
  display: grid;
  grid-template-areas: '. brand menu .';
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-template-rows: 50px;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas: 'brand . . menu';
    grid-template-columns: 1fr 1fr 1fr 3fr;
    grid-template-rows: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: space-around;
  &:nth-child(1) {
    grid-area: brand;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    grid-area: menu;
    justify-content: flex-end;
  }
`;

const Brand = styled.div`
  align-self: center;
  font-weight: 900;
  font-size: 30px;
  margin-bottom: 7px;
  margin-left: 10px;
`;

const Login = styled.div`
  align-self: center;
  flex-wrap: wrap;
  font-size: 15px;
  margin-right: 10px;
`;
const Menu = styled.span`
  align-self: center;
  font-weight: 900;
  font-size: 20px;
  height: 50px;
  width: 40px;
  transform: rotate(90deg);
  margin-right: 15px;
  text-align: center;
`;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderPresenter: React.SFC<IProps> = ({ isMenuOpen, toggleMenu }) => (
  <Header>
    <Row>
      <Column>
        <Brand>:):</Brand>
      </Column>
      <Column>
        <Login>계획쓰기</Login>
        <Menu onClick={toggleMenu}>|||</Menu>
      </Column>
    </Row>
  </Header>
);
export default HeaderPresenter;
