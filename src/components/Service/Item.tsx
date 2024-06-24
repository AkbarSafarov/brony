import { Icon } from '../index.ts';
import s from './Service.module.scss';

type ItemProps = {
    name: string;
    icon: string;
}


export const Item = ({name, icon}: ItemProps) => {

    return (
        <div className={s.item}>
            <Icon icon={icon} />
            <div className={s.name}>{name}</div>
        </div>
    );
};