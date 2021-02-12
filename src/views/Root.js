import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Redux/Store';
import MainTemplate from 'Templates/MainTemplate';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import Notes from 'views/Notes';
import Details from './Details';

const Root = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route path="/notes/:id" component={Details} />
          <Route path="/notes" component={Notes} />
          <Route path="/twitters/:id" component={Details} />
          <Route path="/twitters" component={Twitters} />
          <Route path="/articles/:id" component={Details} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
