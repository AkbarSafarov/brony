import React from "react";
import { Item } from "./Item.tsx";
import s from './Service.module.scss';

type IServiceItem = {
    name: string;
    icon: string;
}

interface ServiceProps {
    items: IServiceItem[];
}

export const Service: React.FC<ServiceProps> = ({ items }) => {

    return (
        <div className={s.service}>
            {items && items.map((item) => <Item name={item.name} icon={item.icon} />)}
        </div>
    );
}