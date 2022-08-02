import React from 'react';
import CreateTask from '../createTask';
import TaskList from '../taskList';

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