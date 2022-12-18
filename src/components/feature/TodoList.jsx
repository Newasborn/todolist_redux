import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import TodoItem from './TodoItem';
import { deleteTodo, toggleDone } from '../../redux/modules/todos';

const TodoList = () => {
  const globalTodo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // todo 삭제하기
  const deleteTodoHandler = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      {
        dispatch(deleteTodo(id));
      }
    } else {
      return;
    }
  };

  // todo 완료 상태 변경하기
  const switchButtonHandler = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <StTodoList>
      {/* 완료 전 todo 리스트 불러오기 */}
      <SectionTitle>Working</SectionTitle>
      <StTodoContainer>
        {globalTodo
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <StTodo key={todo.id}>
                <Link to={`/${todo.id}`}>
                  <DetailTodo>...</DetailTodo>
                </Link>
                <StTodoTitle>{todo.title}</StTodoTitle>
                <StTodoContent>{todo.content}</StTodoContent>
                <StBtnContainer>
                  <StDoneBtn
                    onClick={() => {
                      switchButtonHandler(todo.id);
                    }}
                  >
                    {todo.isDone ? '취소' : '완료'}
                  </StDoneBtn>
                  <StDeleteBtn
                    onClick={() => {
                      deleteTodoHandler(todo.id);
                    }}
                  >
                    삭제
                  </StDeleteBtn>
                </StBtnContainer>
              </StTodo>
            );
          })}
      </StTodoContainer>
      {/* 완료된 todo 리스트 불러오기 */}
      <SectionTitle>Done</SectionTitle>
      <StTodoContainer>
        {globalTodo
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <StTodo key={todo.id}>
                <Link to={`/${todo.id}`}>
                  <DetailTodo>...</DetailTodo>
                </Link>
                <StTodoTitle>{todo.title}</StTodoTitle>
                <StTodoContent>{todo.content}</StTodoContent>
                <StBtnContainer>
                  <StDoneBtn
                    onClick={() => {
                      switchButtonHandler(todo.id);
                    }}
                  >
                    {todo.isDone ? '취소' : '완료'}
                  </StDoneBtn>
                  <StDeleteBtn
                    onClick={() => {
                      deleteTodoHandler(todo.id);
                    }}
                  >
                    삭제
                  </StDeleteBtn>
                </StBtnContainer>
              </StTodo>
            );
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
