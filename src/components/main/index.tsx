import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { IdAction, ITask, UserListAction } from '../../type';
import CreateTask from '../createTask';
import TaskList from '../taskList';

import './style.scss';

function Main({addTask, taskState}: any) {
  const dispatch = useDispatch();
  const idState = useTypedSelectors(state => state.id);

  
  const addId = () => {
    dispatch({type: IdAction.ADD_ID, payload: idState?.id});
  }

  return (
    <section className="main">
      <CreateTask addId={addId} addTask={addTask} id={idState.id}/>
      <TaskList array={taskState.taskList}/>
    </section>
  );
}

export default Main;