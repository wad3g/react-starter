import React, { Component } from 'react';
import logo from './logo.svg';
import { Root, Logo, Header, Title, Intro } from './styles';

class App extends Component {
  render() {
    return (
      <Root>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Root>
    );
  }
}

export default App;
