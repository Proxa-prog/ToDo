import { FC } from "react";
import { Button } from "../UI/Button";

interface ITaskIn {
    item: any;
    index: string;
    deleteTask: (index: string) => void;
    confirmTask: (index: string) => void;
}

export const Task: FC<ITaskIn> = (props) => {
    const {
        item,
        index,
        deleteTask,
        confirmTask,
    } = props;

    const onClickConfirmTask = (index: string) => {
        confirmTask(index);
    }

    const onClickDeleteTask = (index: string) => {
        deleteTask(index);
    }

    return (
        <div className={item.isConfirmed ? 'task-page__task-complete' : 'task-page__task'}>
            {item.name}
            <div className="task-page__button-wrapper">
                <Button
                    className={item.isConfirmed ? 'task-page__button-unComplete' : 'task-page__button-complete'}
                    name={item.name}
                    onClick={() => {
                        onClickConfirmTask(index);
                    }}
                ></Button>
                <Button
                    className="task-page__button-delete"
                    onClick={() => {
                        onClickDeleteTask(index)
                    }}
                ></Button>
            </div>
        </div>
    )
};
