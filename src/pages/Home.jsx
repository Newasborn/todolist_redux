import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import '../App.css';

function Home() {
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Home;
