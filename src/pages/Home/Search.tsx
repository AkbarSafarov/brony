import React from "react";
import s from "./Home.module.scss";

export const Search: React.FC = () =>{

    return (
        <div className={s.search}>
            <input type="text" placeholder="Поиск мастеров или услуг"/>
        </div>
    );
}