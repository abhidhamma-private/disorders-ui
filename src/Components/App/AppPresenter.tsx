import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Routes/Home';
import WritePlan from '../../Routes/writePlan';
import AchievingRate from '../../Routes/AchievingRate';
import CheckPlan from '../../Routes/checkPlan';
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
    <Route path={'/'} exact={true} component={Home} />
    <Route path={'/achieving-rate'} component={AchievingRate} />
    <Route path={'/write-plan'} component={WritePlan} />
    <Route path={'/check-plan'} component={CheckPlan} />
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
