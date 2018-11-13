import React from 'react';
import CommonPresenter from './CommonPresenter';

interface IProps {
  headerTheme: string;
  addPlanVeriable?: any;
}

class CommonContainer extends React.Component<IProps> {
  public state = {
    isMenuOpen: false,
  };
  public toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  public render() {
    console.log(this.props.addPlanVeriable);

    const { isMenuOpen } = this.state;
    return (
      <CommonPresenter
        addPlanVeriable={this.props.addPlanVeriable}
        isMenuOpen={isMenuOpen}
        toggleMenu={this.toggleMenu}
        headerTheme={this.props.headerTheme}
      />
    );
  }
}
export default CommonContainer;
