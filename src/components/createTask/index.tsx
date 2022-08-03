import { useState } from 'react';
import CreateNewDesk from '../createNewDesk';
import './style.scss';

const CreateTask = ({addId, addTask, id}: any) => {
    const [name, setName] = useState(true);
    
    return (
        <div className='main__create-task'>
            <button 
                className='main__new-desk' 
                onClick={() => {setName(!name)}}
            >
                { name ? 'Новая доска' : 'Свернуть' }
            </button>
            { name ? null : <CreateNewDesk addId={addId} addTask={addTask} id={id}/> }
            
        </div>
    );
  }
  
export default CreateTask;
  