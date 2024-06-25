import {tabsItem} from "./const.ts";
import salonStore from "../../store";
import s from './index.module.scss';

export const Tabs = () => {

    const onClick = (value: string) => {
        salonStore.selectCategory(value);
    }

    return (
        <div className={s.tabs}>
            {tabsItem.map((item) => (
                <button className={s.button} key={item.type} onClick={() => onClick(item.type)}>
                    <img src={item.svg} alt=""/>
                    {item.name}
                </button>
            ))}
        </div>
    );
};