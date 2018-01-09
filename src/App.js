import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import configureStore from './store';
import logo from './logo.svg';
import { Root, Logo, Header, Title, Intro } from './styles';

const store = configureStore();
const history = createHistory();

const DashboardPage = () => (
  <Intro>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      <Link to="/other">Link</Link> to some other page.
    </p>
  </Intro>
);

DashboardPage.displayName = 'DashboardPage';

const ExampleOtherPage = () => <Intro>Some other page.</Intro>;

ExampleOtherPage.displayName = 'ExampleOtherPage';

const FourOhFourPage = () => (
  <Intro>
    <strong>404</strong> Whatcha talkin bout Willis?
  </Intro>
);

FourOhFourPage.displayName = '404Page';

class App extends Component {
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
              <Route page="missing" component={FourOhFourPage} />
            </Switch>
          </ConnectedRouter>
        </Root>
      </Provider>
    );
  }
}

export default App;
