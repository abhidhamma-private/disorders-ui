import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../Drawer';
import Header from '../Header';

interface IState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const CommonPresenter: React.SFC<IState> = ({ isMenuOpen, toggleMenu }) => (
  <>
    <Sidebar
      sidebar={<Drawer />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      pullRight={true}
      styles={{
        sidebar: {
          width: '16.7vw',
          zIndex: '10',
        },
      }}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </Sidebar>
  </>
);
export default CommonPresenter;
