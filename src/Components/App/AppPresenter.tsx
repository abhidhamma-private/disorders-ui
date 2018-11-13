import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomeRoute from '../../Routes/Home';
import WritePlanRoute from '../../Routes/writePlan';
import CheckPlanRoute from '../../Routes/checkPlan';
import PlanRoute from 'src/Routes/Plan';
interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={HomeRoute} />
    {/* <Route path={'/achieving-rate'} component={AchievingRate} /> */}
    <Route path={'/write-plan'} component={WritePlanRoute} />
    <Route path={'/check-plan'} component={CheckPlanRoute} />
    <Route path={'/check-plan'} component={CheckPlanRoute} />
    <Route path={'/Plan/:planId'} component={PlanRoute} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
