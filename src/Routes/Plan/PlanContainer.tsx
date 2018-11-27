import React from 'react';
import CommonContainer from '../../Components/Common';
import { Query } from 'react-apollo';
import { GET_PLAN } from 'src/Routes/Plan/PlanQueries.queries';
import PlanPresenter from './PlanPresenter';

class PlanContainer extends React.Component<any, any, any> {
  public render() {
    const headerTheme = 'main';
    return (
      <>
        <CommonContainer headerTheme={headerTheme} />
        <Query
          query={GET_PLAN}
          variables={{ planId: this.props.match.params.planId }}>
          {({ loading, error, data }) => {
            if (loading) {
              return loading;
            }

            return (
              <PlanPresenter
                planId={this.props.match.params.planId}
                data={data}
              />
            );
          }}
        </Query>
      </>
    );
  }
}
export default PlanContainer;
