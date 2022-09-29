import { nanoid } from "nanoid";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IDesk, UserListAction } from "../../type";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

interface ISetTaskName {
    setOpen: (open: boolean) => void;
    open: boolean;
    setsubDeskName: (subDeskName: string) => void;
    subDeskName: string;
    deskList: IDesk[];
}

export const SetTaskName: FC<ISetTaskName> = (props) => {
    const params = useParams();
    const dispatch = useDispatch();

    const {
        setOpen,
        open,
        setsubDeskName,
        subDeskName,
        deskList,
    } = props;

    const updateDeskList = (storage: any) => {
        console.log(storage)
        if (storage !== null) {
            const stateFromLocalStorage = JSON.parse(storage);
            dispatch({ type: UserListAction.ADD_TASK, payload: stateFromLocalStorage });
        }
    }

    useEffect(() => {
        updateDeskList(window.localStorage.getItem('addDesk'));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('addDesk', JSON.stringify(deskList));
    }, [deskList]);

    return (
        <div className="task-page__input-name-wrapper">
            <Button
                className="task-page__button-close"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <span className="task-page__span"></span>
            </Button>
            <Input
                id="subDeskId"
                className="task-page__input"
                type="text"
                placeholder="Название задачи"
                value={subDeskName}
                onChange={(e) => { setsubDeskName(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13 && subDeskName !== '') {
                        const newDeskList = deskList.map((desk: IDesk) => {
                            if (desk.id === params.taskId) {
                                const subDeskId = nanoid();
                                const newSubDeskArray = { name: subDeskName, taskArray: [], id: subDeskId };
                                desk.array = [...desk.array, newSubDeskArray]
                                setsubDeskName('')
                            }

                            return desk;
                        })
                        dispatch({ type: UserListAction.ADD_TASK, payload: newDeskList });
                    }
                }}
            />
        </div>
    )
}