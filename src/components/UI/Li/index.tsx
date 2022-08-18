import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IDesk, UserListAction } from "../../../type";
import { Input } from "../input";
import { Task } from "../task";

export const Li = ({ deskItem, desk, nameArray, setNameArray }: any) => {
    const params = useParams();
    const dispatch = useDispatch();
    const { deskList } = useTypedSelectors(state => state.desk);

    const deleteSubDesk = (array: any, currentItem: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === params.taskId) {
                const newArray = desk.array.filter((currentDesk) => currentDesk.id !== currentItem);
                desk.array = [...newArray];
            }
            return desk;
        })
        return array;
    }

    const dispatchDeleteSubDesk = (desk: any, currentItem: any) => {
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
                    deskItem.taskArray.map((item: any) => {
                        return (
                            <Task
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </>
        </li>
    )
}
