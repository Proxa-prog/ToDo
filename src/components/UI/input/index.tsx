import { ChangeEvent, FC, KeyboardEventHandler } from "react";

export type onChangeParams = {
    name?: string;
    value: string;
}

interface IInput {
    name?: string;
    value: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, {name, value}: onChangeParams) => void;
}

export const Input: FC<IInput> = (props) => {
    const {
        name,
        value,
        onKeyDown,
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event, {name, value: event.target.value});
    };

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
};
