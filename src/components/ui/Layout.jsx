// src/shared/Layout.js
import styled from 'styled-components';
import React from 'react';

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  box-shadow: -5px 20px 30px rgba(0, 0, 0, 0.2);
`;
