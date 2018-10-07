import React from 'react';
import CommonPresenter from './CommonPresenter';

class CommonContainer extends React.Component<any> {
  public state = {
    isMenuOpen: false,
  };
  public toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <CommonPresenter isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
    );
  }
}
export default CommonContainer;
