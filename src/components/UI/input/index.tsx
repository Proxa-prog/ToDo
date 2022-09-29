import { ChangeEvent, FC, KeyboardEventHandler } from "react";

export type onChangeParams = {
    name?: string;
    value: string;
}

interface IInput {
    id?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, {name, value}: onChangeParams) => void;
}

export const Input: FC<IInput> = (props) => {
    const {
        name,
        type,
        id,
        placeholder,
        className,
        value,
        onKeyDown,
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event, {name, value: event.target.value});
    };

    return (
        <input
            id={id}
            placeholder={placeholder}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
};
