import { v4 as uuidv4 } from 'uuid';

//  Action Value
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_DONE = 'TOGGLE_DONE';

// Action Creator
// todo 추가 액션
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 삭제 액션
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// todo 완료, 취소 토글 액션
export const toggleDone = (payload) => {
  return {
    type: TOGGLE_DONE,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: '건강하기',
      content: '몸도 마음도',
      isDone: false,
      isActive: true,
    },
    {
      id: uuidv4(),
      title: '행복하기',
      content: '긍정적으로 생각하기',
      isDone: true,
      isActive: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case TOGGLE_DONE:
      return {
        ...state.todos,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
};

// export default reducers
export default todos;
