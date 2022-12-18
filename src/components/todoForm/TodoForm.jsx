import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';
import { StForm, StInputContainer, StLabeledInput, StFormBtn } from './styles';

const TodoForm = () => {
  // 제목, 내용 컴포넌트 state 설정
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 전역 state 불러오기
  const dispatch = useDispatch();

  // 추가하기 버튼 클릭/submit시 할일 목록에 새로운 할일 추가
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 유효성 체크 : 제목만 입력시
    if (title && !content) {
      return alert('내용을 입력해주세요.');
    }
    // 유효성 체크 : 내용만 입력시
    if (!title && content) {
      return alert('제목을 입력해주세요.');
    }
    // 유효성 체크 : 둘다 미입력시
    if (!title || !content) {
      return alert('제목과 내용을 입력해주세요.');
    }

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
    <StForm onSubmit={onSubmitHandler}>
      <StInputContainer>
        <StLabeledInput
          id='title'
          label='제목'
          placeholder='제목을 입력해주세요.'
          value={content}
          onChange={titleChangeHandler}
        />
        <StLabeledInput
          id='content'
          label='내용'
          placeholder='내용을 입력해주세요.'
          value={content}
          onChange={contentChangeHandler}
        />
      </StInputContainer>
      <StFormBtn type='submit'>추가</StFormBtn>
    </StForm>
  );
};

export default TodoForm;
