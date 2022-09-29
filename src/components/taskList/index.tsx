import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import { removeDeskAction } from '../../store/redusers/TaskCardList';
import { remoeveTaskAction } from '../../store/redusers/TaskList';
import { getDeskList } from '../../thunk/desk';
import { IDesk } from '../../type';
import { setItemFromLocaleStorage } from '../../Utils/setItemFromLocaleStorage';
import { Button } from '../UI/Button';

import './style.scss';

const TaskList = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const { taskCard, isProgress } = useTypedSelectors(state => state.taskCardList);
    const { deskList } = useTypedSelectors(state => state.desk);

    const removeDesk = (deskName: string) => {
        const newtaskCard = taskCard.filter((task) => deskName !== task.id);
        dispatch(removeDeskAction(newtaskCard));
        const newDeskList = deskList.filter((desk) => deskName !== desk.id);
        dispatch(remoeveTaskAction(newDeskList));
    }

    useEffect(() => {
        // @ts-ignore:next-line
        dispatch(getDeskList());
    }, []);

    useEffect(() => {
        setItemFromLocaleStorage('taskCard', JSON.stringify(taskCard));
    }, [taskCard]);

    return (
        <section className="main__task-list-wrapper">
            <ul className="main__task-list">
                {
                    isProgress
                        ?
                        taskCard.map((desk: IDesk) => {

                            return (
                                <li className='main__task-item' key={desk.id}>
                                    <Button
                                        className='main__task-item-button'
                                        onClick={() => { router(`/${desk.id}`) }}
                                    >
                                        {desk.name}
                                    </Button>
                                    <ul className='main__color-current-list'>
                                        {desk.colorArray.map((color) => (
                                            <li
                                                className='main__color-title'
                                                key={color.id}
                                                style={{ backgroundColor: color.color }}
                                                title={color.title}
                                            ></li>
                                        ))}
                                    </ul>
                                    <Button
                                        className=''
                                        name={String(desk.id)}
                                        onClick={(e) => {
                                            removeDesk(e.currentTarget.name);
                                        }}
                                    >Del
                                    </Button>
                                </li>
                            )
                        }
                        )
                        :
                        'Данные загружаются'
                }
            </ul>
        </section>
    );
}

export default TaskList;
