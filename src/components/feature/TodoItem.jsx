import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleDone } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 투두리스트에서 투두 부분만 분리하기 위해 만든 컴포넌트 (리팩토링 중)
const TodoItem = ({ todo, isActive }) => {
  // const globalTodo = useSelector((state) => state.todos.todos);
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
    <StTodo>
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
          {isActive ? '완료' : '취소'}
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
};

export default TodoItem;

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
