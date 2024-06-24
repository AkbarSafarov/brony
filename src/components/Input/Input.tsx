import { ChangeEventHandler, MouseEventHandler } from "react";
import s from "./Input.module.scss";

export type InputProps = {
    name?: string;
    onChange?: ChangeEventHandler<HTMLElement>;
    onClick?: MouseEventHandler<HTMLElement>;
    placeholder?: string;
    value?: string;
};

export const Input = ({
      name,
      onClick,
      onChange,
      placeholder,
      value,
    }: InputProps) => {

    return (
        <label className={s.inputLabel}>
            <input
                name={name}
                type="text"
                className={s.input}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                onClick={onClick}
            />
        </label>
    );
};