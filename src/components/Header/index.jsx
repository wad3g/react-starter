import React from 'react';
import PropTypes from 'prop-types';

import { Header, Logo, Title } from './styles';
import reactLogo from './react-logo.svg';

/** Header is an example component from create-react-app. */
const Component = ({ logo, title }) => (
  <Header>
    <Logo src={logo} alt="logo" />
    <Title>{title}</Title>
  </Header>
);

Component.displayName = 'Header';

Component.propTypes = {
  /** Path to the logo image (probably resolved with Webpack). */
  logo: PropTypes.string,
  /** Short and important text to display. */
  title: PropTypes.string,
};

Component.defaultProps = {
  logo: reactLogo,
  title: 'Welcome to React',
};

export default Component;
