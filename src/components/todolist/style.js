import styled from 'styled-components';

const StTodoList = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 26px;
  margin-bottom: 15px;
  margin-left: 60px;
  margin-top: 10px;
`;

const StTodoContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  min-width: 800px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 40px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

export { StTodoList, SectionTitle, StTodoContainer };
