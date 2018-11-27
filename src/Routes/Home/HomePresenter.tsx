import React from 'react';
import CommonContainer from '../../Components/Common';
import Agenda from '../../Components/Grid/Agenda';
import Info from '../../Components/Grid/Info';
import styled from 'styled-components';
import PlanListContainer from '../PlanList/PlanListContainer';

const Grid = styled.main`
  display: grid;
  grid-template-areas: '. agenda Plan info .';
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  padding-top: 50px;
  grid-gap: 5px;
  grid-template-rows: auto;
  width: 100vw;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas:
      'Plan'
      'agenda'
      'info';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding-top: 50px;
    grid-gap: 5px;
    & > {
      display: grid;
      justify-content: space-around;
    }
  }
`;

class HomePresenter extends React.Component<any> {
  public render() {
    const headerTheme = 'main';
    console.log('홈');
    console.log(this.props);
    return (
      <>
        <CommonContainer
          headerTheme={headerTheme}
          match={this.props.match}
          history={this.props.history}
          location={this.props.location}
        />
        <Grid>
          <PlanListContainer />
          <Agenda />
          <Info />
        </Grid>
      </>
    );
  }
}
export default HomePresenter;
