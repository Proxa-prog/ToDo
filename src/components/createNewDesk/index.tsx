import { useState } from 'react';
import './style.scss';

const CreateNewDesk = ({addId, addTask, id}: any) => {
    const [name, setName] = useState('');

    return (
        <div className='main__create-desk'>
            <label htmlFor="desk-name">Название доски</label>
            <input 
                className='main__input-desk-name' 
                type="text" 
                id='desk-name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value)}}
            />

            <button 
                className='main__add-desk' 
                onClick={() => {
                    addId()
                    addTask({name, id})
                    }}>
                    Добавить
            </button>

            <button 
                className='main__cansel' 
                onClick={() => {setName('')}}>
                    Отмена
            </button>
        </div>
    );
  }
  
  export default CreateNewDesk;