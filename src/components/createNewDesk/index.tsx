import { useState } from 'react';
import './style.scss';

const CreateNewDesk = ({addId}: any) => {
    const [name, setName] = useState('');

    
    return (
        <div className='main__create-desk'>
            <label htmlFor="desk-name">Название доски</label>
            <input 
                className='main__input-desk-name' 
                type="text" 
                id='desk-name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button 
                className='main__add-desk' 
                onClick={() => {
                    addId.addId()

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