import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Settings } from '../Setting';
import Main from '../main';
import Error from '../error';
import TaskPage from '../taskPage';

import './style.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/settings:taskId' element={<Settings />} />
          <Route path='/:taskId' element={<TaskPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
