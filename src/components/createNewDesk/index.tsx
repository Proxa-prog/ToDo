import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { IdAction, ITaskArrayType, UserListAction } from '../../type';
import './style.scss';

const CreateNewDesk = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const addDesk = useTypedSelectors(state => state.desk);
    const subDeskArray = useTypedSelectors(state => state.subDeskArray);
    const idState = useTypedSelectors(state => state.id);
  
    const addId = () => {
      dispatch({type: IdAction.ADD_ID, payload: idState?.id});
    }

    const addTaskInArray = () => {
        dispatch({type: ITaskArrayType.ADD_TASK_TYPE, payload: [...subDeskArray.subDeskArray, []]});
      }

      const addTask = (desk: any) => {
        dispatch({type: UserListAction.ADD_TASK, payload: [...addDesk.deskList, desk]});
      }
      console.log(addDesk)
    return (
        <div className='main__create-desk'>
            <label htmlFor="desk-name">Название доски</label>
            <input 
                className='main__input-desk-name' 
                type="text" 
                id='desk-name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value)}
                }
            />

            <button 
                className='main__add-desk' 
                onClick={() => {
                    addId()
                    addTaskInArray()
                    subDeskArray.subDeskArray.map((array: any, index: any) => {
                        if(idState.id - 1 === index) {
                            addTask({name, id: idState.id, array})
                        }
                    })
                    }}
            >
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