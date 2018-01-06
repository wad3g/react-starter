import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Root = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`;

export const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const Intro = styled.p`
  font-size: large;
`;
