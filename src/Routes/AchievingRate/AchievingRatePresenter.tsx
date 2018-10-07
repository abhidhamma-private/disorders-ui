import React from 'react';
import CommonContainer from '../../Components/Common';
import Grid from '../../Components/Grid';
import Article from '../../Components/Grid/Article';
import Agenda from '../../Components/Grid/Agenda';
import Info from '../../Components/Grid/Info';

class AchievingRatePresenter extends React.Component<any> {
  public render() {
    return (
      <>
        <CommonContainer headerTheme={true} />
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
