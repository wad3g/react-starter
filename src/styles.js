import styled, { injectGlobal, keyframes } from 'styled-components';

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
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const PageWrapper = styled.div`
  font-size: large;
  padding-top: 15px;
`;

// native fonts
const font = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

export const setGlobalStyles = () => {
  injectGlobal`
    body {
      font-family: ${font};
    }

    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
    }
  `;
};
