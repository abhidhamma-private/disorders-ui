import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../../Components/Drawer';
import Header from '../../Components/Header';

interface IState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HomePresenter: React.SFC<IState> = ({ isMenuOpen, toggleMenu }) => (
  <Sidebar
    sidebar={<Drawer />}
    open={isMenuOpen}
    onSetOpen={toggleMenu}
    pullRight={true}
    styles={{
      sidebar: {
        width: '16.5vw',
        zIndex: '10',
      },
    }}>
    <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />>
  </Sidebar>
);
export default HomePresenter;
