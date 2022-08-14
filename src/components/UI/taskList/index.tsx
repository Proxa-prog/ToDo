import { useNavigate } from 'react-router-dom';

import { useTypedSelectors } from '../../../hooks/useTypedSelectors';
import { IDesk } from '../../../type';

import './style.scss';

const TaskList = () => {
    const router = useNavigate();
    const addDesk = useTypedSelectors(state => state.desk);

    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {
                    addDesk.deskList.map((desk: IDesk) => (
                        <li className='main__task-item' key={desk.id}>
                            <button 
                                className='main__task-item-button'
                                onClick={() => {router(`/${desk.id}`)}}
                            >
                                    {desk.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>  
    );
  }
  
  export default TaskList;