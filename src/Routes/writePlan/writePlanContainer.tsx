import React from 'react';
import { SIGN_IN } from 'src/Components/Modal/SignUpmodalQueries.queries';
import { Query, Mutation } from 'react-apollo';
import WritePlanPresenter from './writePlanPresenter';
import { LOG_USER_IN } from 'src/sharedQueries.local';

class WritePlanContainer extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Mutation mutation={LOG_USER_IN}>
          {logUserIn => (
            <Query
              query={SIGN_IN}
              variables={{
                nickName: this.props.location.state.user.nickName,
                password: this.props.location.state.user.password,
              }}
              onCompleted={data => {
                console.log('토큰');

                console.log(data.SignIn.token);
                logUserIn({
                  variables: { token: data.SignIn.token },
                });
                console.log('스테이트');
                console.log(this.state);
              }}>
              {({ loading, error, data }) => {
                return (
                  <WritePlanPresenter
                    match={this.props.match}
                    history={this.props.history}
                    location={this.props.location}
                    data={data}
                  />
                );
              }}
            </Query>
          )}
        </Mutation>

        {/* <Query
          query={SIGN_IN}
          variables={{
            nickName: this.props.location.state
            .user.nickName,
            password: this.props.location.state.user.password,
          }}>
          {({ loading, error, data }) => {
            console.log('토큰');
            console.log(data.SignIn.token);
            return (
              
            );
          }}
        </Query> */}

        {/* <Mutation mutation={LOG_USER_IN}>
                {logUserIn => {
                  logUserIn(data.SignIn.token);
                  return (
                    <WritePlanPresenter
                      match={this.props.match}
                      history={this.props.history}
                      location={this.props.location}
                      data={data}
                    />
                  );
                }}
              </Mutation> */}
      </>
    );
  }
}
export default WritePlanContainer;
