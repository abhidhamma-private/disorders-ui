import React from 'react';
import { RouteComponentProps } from 'react-router';
import HeaderPresenter from './HeaderPresenter';

interface IState {
  isMenuOpen: boolean;
}
interface IProps extends RouteComponentProps<any> {}
class HeaderContainer extends React.Component<IProps, IState> {
  public state = {
    isMenuOpen: false,
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <HeaderPresenter isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
    );
  }
  public toggleMenu = () => {
    this.setState(state => {
      return {
        isMenuOpen: !state.isMenuOpen,
      };
    });
  };
}
export default HeaderContainer;
