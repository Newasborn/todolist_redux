import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const TodoCreate = () => {
  // 제목, 내용 컴포넌트 state 설정
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 전역 state 불러오기
  // const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  // 추가하기 버튼 클릭/submit시 할일 목록에 새로운 할일 추가
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
      isActive: true,
    };

    dispatch(addTodo(newTodo));

    setTitle('');
    setContent('');
  };

  // 제목 인풋창 입력시 제목 state 업데이트
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 인풋창 입력시 내용 state 업데이트
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <input type='text' value={title} onChange={titleChangeHandler} />
        <label>내용</label>
        <input
          type='text'
          value={content}
          onChange={contentChangeHandler}
          required
        />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default TodoCreate;
