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
      {/* TodoList에 isActive값을 다르게 주어, 진행 중과 완료된 영역을 나누어 줌 */}
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </Layout>
  );
}

export default Home;
