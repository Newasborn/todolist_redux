import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import { StTodoList, SectionTitle, StTodoContainer } from './style';

const TodoList = ({ isActive }) => {
  const globalTodo = useSelector((state) => state.todos.todos);

  return (
    <StTodoList>
      {/* Home에서 지정한 isActive props의 값으로 영역의 제목을 다르게 보여줌 */}
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
