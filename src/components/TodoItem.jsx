import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleDone } from '../redux/modules/todos';

const TodoItem = () => {
  const globalTodo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const switchButtonHandler = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <div>
      {globalTodo
        // .filter((todo) => todo.isDone === !todo.isActive)
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <button
                onClick={() => {
                  switchButtonHandler(todo.id);
                }}
              >
                {todo.isDone ? '취소' : '완료'}
              </button>
              <button
                onClick={() => {
                  deleteTodoHandler(todo.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoItem;
