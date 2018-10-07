import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import BackArrow from '../BackArrow';
import Input from '../Input';
import { Link } from 'react-router-dom';

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
  grid-template-columns: 1fr 3fr 1fr 1fr;
  grid-template-rows: 50px;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas: 'brand menu';
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-child(1) {
    grid-area: brand;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    grid-area: menu;
    justify-content: flex-end;
    margin-right: 10px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-self: center;
  font-size: 15px;
`;
const Menu = styled.span`
  align-self: center;
  font-weight: 900;
  font-size: 20px;
  height: 30px;
  width: 40px;
  transform: rotate(90deg);
  margin-right: 5px;
  text-align: center;
`;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  headerTheme: boolean;
}

const HeaderPresenter: React.SFC<IProps> = ({ toggleMenu, headerTheme }) => {
  if (headerTheme) {
    return (
      <Header>
        <Row>
          <Column>
            <Brand>:):</Brand>
          </Column>
          <Column>
            <Login>
              <Link to="/write-plan">
                <Button value="새 계획표 작성" onClick="" />
              </Link>
            </Login>
            <Menu onClick={toggleMenu}>|||</Menu>
          </Column>
        </Row>
      </Header>
    );
  }

  return (
    <Header style={{ backgroundColor: 'rgb(52,58,64)', color: 'white' }}>
      <Row>
        <Column>
          <BackArrow backTo="/" />{' '}
          <Input placeholder="제목을 입력 해 주세요." />
        </Column>
        <Column>
          <Login>
            <Button value="업로드" onClick="" />
            <Button value="작성하기" onClick="" />
          </Login>
        </Column>
      </Row>
    </Header>
  );
};
export default HeaderPresenter;
