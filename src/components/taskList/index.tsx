import { useNavigate } from 'react-router-dom';
import { ITask } from '../../type';
import './style.scss';

const TaskList = ({array}: any) => {
    const router = useNavigate();
    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {
                    array.map((item: ITask) => (
                        <li className='main__task-item' key={item.id}>
                            <button 
                                className='main__task-item-button'
                                onClick={() => {router(`/${item.id}`)}}
                            >
                                    {item.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>  
    );
  }
  
  export default TaskList;