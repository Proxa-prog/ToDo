import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { IdAction } from '../../type';
import CreateTask from '../createTask';
import TaskList from '../taskList';

import './style.scss';

function Main() {
  const dispatch = useDispatch();

  const idState = useTypedSelectors(state => state.id);

  const addId = () => {
    dispatch({type: IdAction.ADD_ID, payload: idState?.id});
    console.log('23')
  }

  return (
    <section className="main">
      <CreateTask addId={addId} />
      <TaskList />
    </section>
  );
}

export default Main;