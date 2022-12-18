import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todolist/TodoList';
import Header from '../components/ui/Header';
import Layout from '../components/ui/Layout';

import '../App.css';

function Home() {
  return (
    <Layout>
      <Header />
      <TodoForm />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </Layout>
  );
}

export default Home;
