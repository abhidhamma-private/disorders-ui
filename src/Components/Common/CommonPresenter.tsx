import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../Drawer';
import Header from '../Header';

const CommonPresenter: React.SFC<any> = ({
  isMenuOpen,
  toggleMenu,
  headerTheme,
}) => (
  <>
    <Sidebar
      sidebar={<Drawer />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      pullRight={true}
      styles={{
        sidebar: {
          width: '250px',
          zIndex: '10',
        },
      }}>
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        headerTheme={headerTheme}
      />
    </Sidebar>
  </>
);
export default CommonPresenter;
