import i from './Icon.module.scss';

export type IconProps = {
    icon?: string;
    active?: string;
};

export const Icon = ({icon, active}: IconProps) => {
    const iconComponentClass = [
        i.icon,
        icon && i[icon],
        active && i[active]
    ].filter(Boolean).join(' ');

    return (
        <i className={iconComponentClass}></i>
    );
};