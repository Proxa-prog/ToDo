import CreateTask from '../UI/createTask';
import TaskList from '../UI/taskList';

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