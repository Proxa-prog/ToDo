import CreateTask from '../UI/CreateTask';
import TaskList from '../UI/TaskList';

import './style.scss';

function Main() {
  return (
    <section className="main">
      <CreateTask />
      <TaskList />
    </section>
  );
}

export default Main;