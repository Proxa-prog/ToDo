import { ITask } from '../../type';
import './style.scss';

const TaskList = ({array}: any) => {
    return (
        <ul className="main__task-list">
            {
                array.map((item: ITask) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    );
  }
  
  export default TaskList;