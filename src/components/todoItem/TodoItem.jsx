import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import {
  StTodo,
  DetailTodo,
  StTodoTitle,
  StTodoContent,
  StBtnContainer,
  StDoneBtn,
  StDeleteBtn,
} from './styles';

const TodoItem = ({ todo, isActive }) => {
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
        {/* 완료 여부를 완료와 취소로 토글링할 수 있음 */}
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
