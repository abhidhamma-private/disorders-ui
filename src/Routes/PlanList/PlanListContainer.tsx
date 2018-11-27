import React from 'react';
import { Query } from 'react-apollo';
import PlanListPresenter from '.';
import { GET_PLANS } from './PlanListQueries.queries';

class PlanListContainer extends React.Component {
  public render() {
    return (
      <Query query={GET_PLANS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>loading</div>;
          }
          console.log('리스트컨테이너');
          return <PlanListPresenter plan={data.GetPlans.plan} />;
        }}
      </Query>
    );
  }
}
export default PlanListContainer;
