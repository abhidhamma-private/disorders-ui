import React from 'react';
import CommonPresenter from './CommonPresenter';

interface IProps {
  headerTheme: boolean;
}

class CommonContainer extends React.Component<IProps> {
  public state = {
    isMenuOpen: false,
  };
  public toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <CommonPresenter
        isMenuOpen={isMenuOpen}
        toggleMenu={this.toggleMenu}
        headerTheme={this.props.headerTheme}
      />
    );
  }
}
export default CommonContainer;
