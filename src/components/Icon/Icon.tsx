import i from './Icon.module.scss';

export type IconProps = {
    icon?: string;
};

export const Icon = ({icon}: IconProps) => {
    const iconComponentClass = [
        i.icon,
        icon && i[icon],
    ].filter(Boolean).join(' ');

    return (
        <i className={iconComponentClass}></i>
    );
};