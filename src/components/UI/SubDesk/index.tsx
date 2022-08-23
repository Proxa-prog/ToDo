import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IDesk, ITask, UserListAction } from "../../../type";
import { Input } from "../input";
import { Task } from "../task";

export const SubDesk = ({ deskItem, desk, nameArray, setNameArray, deleteTask, confirmTask }: any) => {
    const params = useParams();
    const dispatch = useDispatch();
    const { deskList } = useTypedSelectors(state => state.desk);

    const deleteSubDesk = (array: IDesk[], currentItem: string) => {
        array.map((desk: IDesk) => {
            if (desk.id === params.taskId) {
                const newArray = desk.array.filter((currentDesk) => currentDesk.id !== currentItem);
                desk.array = [...newArray];
            }
            return desk;
        })
        return array;
    }

    const dispatchDeleteSubDesk = (desk: IDesk[], currentItem: string) => {
        const newDeskArray = deleteSubDesk(desk, currentItem);
        dispatch({ type: UserListAction.REMOVE_SUB_DESK, payload: [...newDeskArray] });
    }

    return (
        <li className="task-page__task-name-item" key={desk.id}>
            <>
                <button
                    name={deskItem.id}
                    onClick={(e) => {
                        dispatchDeleteSubDesk(deskList, e.currentTarget.name);
                    }}
                >
                    Удалить
                </button>

                <h2>{deskItem.name}</h2>

                <Input
                    nameArray={nameArray}
                    setNameArray={setNameArray}
                    deskItem={deskItem}
                />
                {
                    deskItem.taskArray.map((item: ITask, index: number) => {
                        return (
                            <Task
                                key={index}
                                index={item.id}
                                item={item}
                                confirmTask={confirmTask}
                                deleteTask={deleteTask}
                            />
                        )
                    })
                }
            </>
        </li>
    )
}