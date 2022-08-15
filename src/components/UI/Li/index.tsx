import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { IDesk, ITaskArrayType } from "../../../type";
import { Input } from "../input";
import { Task } from "../task";

export const Li = ({deskItem, desk, nameArray, setNameArray}: any) => {
    const params = useParams();
    const dispatch = useDispatch();
    const deskList = useTypedSelectors(state => state.desk);

    const deleteDesk = (array: any, currentItem: any) => {
        array.map((desk: IDesk) => {
            if (desk.id === Number(params.taskId)) {
                const newArray = desk.array.filter((currentDesk) => currentDesk.name !== currentItem);
                desk.array = [...newArray];
            }
        })
        // return array
    }

    const dispatchdeleteDesk = (desk: any, currentItem: any) => {
        const newDeskArray = deleteDesk(desk, currentItem);
        console.log(newDeskArray)

        // dispatch({type: ITaskArrayType.REMOVE_TASK_TYPE, payload: [...newDeskArray]});
      }
    
    return (
        <li className="task-page__task-name-item" key={desk.id}>
            <>
                <button 
                    name={deskItem.name}
                    onClick={(e) => {
                        deleteDesk(deskList.deskList, e.currentTarget.name);
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
                    deskItem.taskArray.map((item: any, index: any) => {
                        return (
                            <Task 
                                item={item} 
                                index={index} 
                            />
                        )
                    })
                }
            </>
        </li>
    )
}
