import { FC, MouseEventHandler } from "react";

interface ButtonProps {
    className: string | undefined;
    name?: string;
    children?: JSX.Element | React.ReactNode;
    onClick: (e: any) => MouseEventHandler<HTMLButtonElement> | void;
}

export const Button: FC<ButtonProps> = (props) => {

    return (
        <button
            className={props.className}
            onClick={props.onClick}
            name={props.name}
        >
            {props.children}
        </button>
    )
}
