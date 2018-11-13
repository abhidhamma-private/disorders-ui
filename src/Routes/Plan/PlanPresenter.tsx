import React from 'react';
import CommonContainer from '../../Components/Common';
import Plan from 'src/Components/Grid/PlanList/Plan';
import { Query } from 'react-apollo';
import { GET_PLAN } from 'src/Components/Grid/PlanList/PlanQueries.queries';

class PlanPresenter extends React.Component<any, any, any> {
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

            return <Plan planId={this.props.match.params.planId} data={data} />;
          }}
        </Query>
      </>
    );
  }
}
export default PlanPresenter;
