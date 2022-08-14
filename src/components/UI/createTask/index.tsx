import { useState } from 'react';

import CreateNewDesk from '../createNewDesk';

import './style.scss';

const CreateTask = () => {
    const [name, setName] = useState(true);
    
    return (
        <div className='main__create-task'>
            <button 
                className='main__new-desk' 
                onClick={() => {setName(!name)}}
            >
                { name ? 'Новая доска' : 'Свернуть' }
            </button>
            { name ? null : <CreateNewDesk /> }
        </div>
    );
  }
  
export default CreateTask;
  