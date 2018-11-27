import React from 'react';
import Sidebar from 'react-sidebar';
import Drawer from '../Drawer';
import Header from '../Header';

class CommonPresenter extends React.Component<any, any> {
  public render() {
    console.log('커먼프레젠터');
    console.log(this.props);
    return (
      <>
        <Sidebar
          transitions={false}
          sidebar={<Drawer />}
          open={this.props.isMenuOpen}
          onSetOpen={this.props.toggleMenu}
          pullRight={true}
          styles={{
            sidebar: {
              width: '250px',
            },
          }}>
          <Header
            addPlanVeriable={this.props.addPlanVeriable}
            isMenuOpen={this.props.isMenuOpen}
            toggleMenu={this.props.toggleMenu}
            headerTheme={this.props.headerTheme}
            match={this.props.match}
            history={this.props.history}
            location={this.props.location}
          />
        </Sidebar>
      </>
    );
  }
}
export default CommonPresenter;
