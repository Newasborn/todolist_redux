import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import { deleteTodo, toggleDone } from '../redux/modules/todos';

const TodoList = () => {
  const globalTodo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // todo 삭제하기
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // todo 완료 상태 변경하기
  const switchButtonHandler = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <div>
      <h4>해야할 것</h4>
      <div>
        {globalTodo
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div key={todo.id} style={{ border: '1px solid black' }}>
                <Link to={`/detail/${todo.id}`}>
                  <span>상세보기</span>
                </Link>
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
      <div>
        <h4>완료한 것</h4>
        <div>
          {globalTodo
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div key={todo.id} style={{ border: '1px solid black' }}>
                  <Link to={`/detail/${todo.id}`}>
                    <span>상세보기</span>
                  </Link>
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
      </div>
    </div>
  );
};

export default TodoList;
