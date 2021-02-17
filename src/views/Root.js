import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'Routes/Routes';
import { Provider } from 'react-redux';
import store from 'Redux/Store';
import MainTemplate from 'Templates/MainTemplate';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import Notes from 'views/Notes';
import Details from './Details';
import LoginPage from './LoginPage';

const Root = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={routes.notes} />} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.note} component={Details} />
          <Route path={routes.notes} component={Notes} />
          <Route path={routes.twitter} component={Details} />
          <Route path={routes.twitters} component={Twitters} />
          <Route path={routes.article} component={Details} />
          <Route path={routes.articles} component={Articles} />
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
