import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../../Components/Drawer';
import Header from '../../Components/Header';
import Grid from '../../Components/Grid';
import Article from '../../Components/Grid/Article';
import Agenda from '../../Components/Grid/Agenda';
import Info from '../../Components/Grid/Info';

interface IState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HomePresenter: React.SFC<IState> = ({ isMenuOpen, toggleMenu }) => (
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
      <Grid>
        <Article />
        <Agenda />
        <Info />
      </Grid>
    </Sidebar>
  </>
);
export default HomePresenter;
