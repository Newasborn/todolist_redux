import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Detail = () => {
  const globalTodo = useSelector((state) => state.todos.todos);
  const param = useParams();
  const item = globalTodo.find((elem) => elem.id === param.id);

  return (
    <div key={item.id}>
      <Link to={`/`}>
        <span>이전으로</span>
      </Link>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
    </div>
  );
};

export default Detail;
