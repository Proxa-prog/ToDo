import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../Main';
import Error from '../Error';
import TaskPage from '../UI/TaskPage';

import './style.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/:taskId' element={<TaskPage />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
