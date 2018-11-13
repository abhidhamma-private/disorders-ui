import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../Drawer';
import Header from '../Header';

const CommonPresenter: React.SFC<any> = ({
  isMenuOpen,
  toggleMenu,
  headerTheme,
  addPlanVeriable,
}) => (
  <>
    <Sidebar
      transitions={false}
      sidebar={<Drawer />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      pullRight={true}
      styles={{
        sidebar: {
          width: '250px',
        },
      }}>
      <Header
        addPlanVeriable={addPlanVeriable}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        headerTheme={headerTheme}
      />
    </Sidebar>
  </>
);
export default CommonPresenter;
