import React from 'react';
import CommonContainer from '../../Components/Common';
import Grid from '../../Components/Grid';
import Article from '../../Components/Grid/Article';
import Agenda from '../../Components/Grid/Agenda';
import Info from '../../Components/Grid/Info';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {
  history: any;
}
class AchievingRatePresenter extends React.Component<IProps> {
  public render() {
    return (
      <>
        <CommonContainer
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
        />
        <Grid>
          <Article />
          <Agenda />
          <Info />
        </Grid>
      </>
    );
  }
}
export default AchievingRatePresenter;
