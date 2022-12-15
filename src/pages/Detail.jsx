import { useSelector } from 'react-redux';

const Detail = () => {
  const globalTodo = useSelector((state) => state.todos.todos);

  return (
    <div>
      {console.log(globalTodo)}
      <span>ID: {globalTodo.id}</span>
    </div>
  );
};

export default Detail;
