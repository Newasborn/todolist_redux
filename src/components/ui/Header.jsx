import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    // 홈 화면 헤더 영역
    <StHeader>
      <h3>TODOLIST</h3>
      <h3>React-redux</h3>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #000000;
  color: white;
`;
