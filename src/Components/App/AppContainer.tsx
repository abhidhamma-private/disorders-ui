import React from 'react';
import { graphql } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import reset from 'styled-reset';
import theme from '../../theme';
import { injectGlobal, ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

// tslint:disable-next-line
injectGlobal`
${reset}
`;

const AppContainer = ({ data }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
    <ToastContainer draggable={true} />
  </React.Fragment>
);
export default graphql(IS_LOGGED_IN)(AppContainer);
