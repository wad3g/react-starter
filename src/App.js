import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import DashboardPage from './pages/dashboard';
import ExampleOtherPage from './pages/other';
import FourOhFourPage from './pages/404';

import configureStore from './store';
import injections from './injections';
import logo from './logo.svg';
import { setGlobalStyles, Root, Logo, Header, Title } from './styles';

const store = configureStore();
const history = injections.createHistory();

class App extends Component {
  componentWillMount() {
    setGlobalStyles();
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Header>
            <Logo src={logo} alt="logo" />
            <Title>Welcome to React</Title>
          </Header>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/other" component={ExampleOtherPage} />
              <Route component={FourOhFourPage} />
            </Switch>
          </ConnectedRouter>
        </Root>
      </Provider>
    );
  }
}

export default App;
