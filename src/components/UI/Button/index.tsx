import { FC, MouseEventHandler } from "react";

interface ButtonProps {
    className: string | undefined;
    name?: string;
    children?: JSX.Element | React.ReactNode;
    onClick: (e: any) => MouseEventHandler<HTMLButtonElement> | void;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        name,
        children,
        onClick,
    } = props;

    return (
        <button
            className={className}
            onClick={onClick}
            name={name}
        >
            {children}
        </button>
    )
}
