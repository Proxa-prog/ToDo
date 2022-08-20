import { nanoid } from "nanoid";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { IDesk } from "../../../type";

interface ISetTaskName {
    setOpen: (open: boolean) => void;
    open: boolean;
    setsubDeskName: (subDeskName: string) => void;
    subDeskName: string;
    deskList: IDesk[];
}

export const SetTaskName: FC<ISetTaskName> = (props) => {
    const params = useParams();

    const {
        setOpen,
        open,
        setsubDeskName,
        subDeskName,
        deskList,
    } = props;

    return (
        <div className="task-page__input-name-wrapper">
            <button
                className="task-page__button-close"
                onClick={() => { setOpen(!open) }}
            >
                <span className="task-page__span"></span>
            </button>
            <input
                id="subDeskId"
                className="task-page__input"
                type="text"
                placeholder="Название задачи"
                value={subDeskName}
                onChange={(e) => { setsubDeskName(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13 && subDeskName !== '') {
                        deskList.map((desk: IDesk) => {
                            if (desk.id === params.taskId) {
                                const subDeskId = nanoid();
                                const newSubDeskArray = { name: subDeskName, taskArray: [], id: subDeskId };
                                desk.array = [...desk.array, newSubDeskArray]
                                setsubDeskName('')
                            }

                            return desk;
                        })
                    }
                }}
            />
        </div>
    )
}