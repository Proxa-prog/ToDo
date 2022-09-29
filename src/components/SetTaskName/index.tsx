import { nanoid } from "nanoid";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { IDesk, UserListAction } from "../../type";
import { getItemFromLocaleStorage } from "../../Utils/getItemFromLocaleStorage";
import { onKeyDownCreateSubDesk } from "../../Utils/onKeyDownCreateSubDesk";
import { setItemFromLocaleStorage } from "../../Utils/setItemFromLocaleStorage";
import { updateDeskList } from "../../Utils/updateDeskList";

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
    const {
        setOpen,
        open,
        setsubDeskName,
        subDeskName,
        deskList,
    } = props;

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        updateDeskList(getItemFromLocaleStorage('addDesk'), dispatch);
    }, []);

    useEffect(() => {
        setItemFromLocaleStorage('addDesk', JSON.stringify(deskList));
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
                onChange={(event) => { setsubDeskName(event.target.value) }}
                onKeyDown={(event) => {
                    onKeyDownCreateSubDesk(
                        event,
                        subDeskName,
                        deskList,
                        params,
                        setsubDeskName,
                        dispatch
                    )
                }}
            />
        </div>
    )
}