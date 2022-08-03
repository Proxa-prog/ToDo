import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../main';
import Error from '../error';
import TaskPage from '../taskPage';

import './style.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { ITask, UserListAction } from '../../type';


function App() {
  const dispatch = useDispatch();
  const taskState = useTypedSelectors(state => state.task);

  const addTask = (task: ITask) => {
    dispatch({type: UserListAction.ADD_TASK, payload: [...taskState.taskList, task]});
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main addTask={addTask} taskState={taskState} />}/>
          <Route path='/:taskId' element={<TaskPage taskState={taskState.taskList} />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
