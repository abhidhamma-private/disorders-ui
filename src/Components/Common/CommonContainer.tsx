import React from 'react';
import { RouteComponentProps } from 'react-router';
import CommonPresenter from './CommonPresenter';

interface IState {
  isMenuOpen: boolean;
}
interface IProps extends RouteComponentProps<any> {}
class CommonContainer extends React.Component<IProps, IState> {
  public state = {
    isMenuOpen: false,
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <CommonPresenter isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
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
export default CommonContainer;
