import React from 'react';
import { StLayout } from './style';

// 홈화면 전체 컨테이너
function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;
