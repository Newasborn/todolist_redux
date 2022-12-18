import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ isActive }) => {
  const globalTodo = useSelector((state) => state.todos.todos);

  return (
    <StTodoList>
      <SectionTitle>{isActive ? 'Working' : 'Done'}</SectionTitle>
      <StTodoContainer>
        {globalTodo
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <TodoItem key={item.id} todo={item} isActive={isActive} />;
          })}
      </StTodoContainer>
    </StTodoList>
  );
};

export default TodoList;

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

const StTodo = styled.div`
  position: relative;
  width: 320px;
  border-radius: 10px;
  /* background-color: #e2e2e2; */
  box-shadow: 3px 8px 10px rgba(207, 207, 207, 0.2);
  border: 1px solid rgba(94, 94, 94, 0.1);
  padding: 20px;
`;

const DetailTodo = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  background-color: #a3a3a3;
  color: white;
  border-radius: 100px;
  text-align: center;
  line-height: 10px;
`;

const StTodoTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const StTodoContent = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 40px;
`;

const StBtnContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
`;

const StDoneBtn = styled.button`
  width: 55px;
  height: 26px;
  margin-right: 8px;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const StDeleteBtn = styled.button`
  width: 55px;
  height: 26px;
  &:hover {
    background-color: #c20808;
    color: white;
  }
`;
