import { IDesk, ITask } from "../../type";
import { Task } from "../task";
import { Button } from "../UI/Button";
import { Input, onChangeParams } from "../UI/Input";
import { FC, useState } from "react";

interface ISubDesk {
    desk: IDesk;
    deleteTask: (taskIndex: string) => void;
    confirmTask: (taskIndex: string) => void;
    onAddSubDesk: (taskName: string) => void;
    name: string;
    taskArray: ITask[];
    deleteSubDesk: () => void;
};

export const SubDesk: FC<ISubDesk> = (props) => {
    const {
        desk,
        deleteTask,
        confirmTask,
        onAddSubDesk,
        name,
        taskArray,
        deleteSubDesk,
    } = props;

    const [taskName, setTaskName] = useState('');

    const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.keyCode !== 13 || taskName === '') {
            return;
        }

        onAddSubDesk(taskName);
        setTaskName('');
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, { value }: onChangeParams) => {
        setTaskName(value);
    };

    return (
        <li className="task-page__task-name-item" key={desk.id}>
            <>
                <Button
                    className=""
                    onClick={(e) => {
                        deleteSubDesk();
                    }}
                >
                    Удалить
                </Button>

                <h2>{name}</h2>
                <Input
                    value={taskName}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                />
                {
                    taskArray.map((item: ITask, index: number) => {
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
