import React from 'react';
import PlanListComponent from '../../Components/Grid/PlanList';

class PlanListPresenter extends React.Component<any> {
  public render() {
    return <PlanListComponent plan={this.props.plan} />;
  }
}
export default PlanListPresenter;
