import React from 'react';
import CommonPresenter from './CommonPresenter';

// interface IProps extends RouteComponentProps<any> {
//   headerTheme: string;
//   addPlanVeriable?: any;
// }

class CommonContainer extends React.Component<any> {
  public state = {
    isMenuOpen: false,
  };
  public toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  public render() {
    console.log(this.props.addPlanVeriable);
    console.log('커먼컨테이너');
    console.log(this.props);
    const { isMenuOpen } = this.state;
    return (
      <CommonPresenter
        addPlanVeriable={this.props.addPlanVeriable}
        isMenuOpen={isMenuOpen}
        toggleMenu={this.toggleMenu}
        headerTheme={this.props.headerTheme}
        match={this.props.match}
        history={this.props.history}
        location={this.props.location}
      />
    );
  }
}
export default CommonContainer;
