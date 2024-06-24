import React from "react";
import mocup1 from '../../assets/images/v1/hero-mocup1.png';
import star from '../../assets/images/v1/c-card-star.png';
import comment from '../../assets/images/v1/comment.png';
import {Search} from './Search.tsx';
import { Service } from '../../components';
import s from "./Home.module.scss";

interface IServiceItem {
    name: string;
    icon: string;
}

export const HeaderBlock: React.FC = () => {
    const serviceObj = {
        "0": { "name": "Ногти", "icon": "nails" },
        "2": { "name": "Волосы", "icon": "hair" },
        "3": { "name": "Брови и ресницы", "icon": "eyelashes" },
        "4": { "name": "СПА салоны", "icon": "spa" },
        "5": { "name": "Удаление волос", "icon": "depilation" },
        "6": { "name": "Уход за кожей", "icon": "care" },
        "7": { "name": "Макияж", "icon": "makeup" },
        "8": { "name": "Макияж", "icon": "makeup2" },
        "9": { "name": "Макияж", "icon": "makeup3" }
    };

    const serviceArray: IServiceItem[] = Object.values(serviceObj);

    return (
        <div className="brony-hero-section white-bg">
            <div className="brony-hero-content center position-relative">
                <h1 className={s.h1}>Бронирование услуг мастеров красоты и здоровья:</h1>
                <Search />
                <Service items={serviceArray} />
            </div>
            <div className="container brony-hero-bottom">
                <div className="brony-hero-thumb wow fadeInUpX">
                    <img src={mocup1} alt="" />
                </div>
                <div className="brony-hero-card card2 wow zoomIn">
                    <img src={comment} alt="" />
                </div>
                <div className="brony-hero-card card4 wow zoomIn">
                    <img src={star} alt="" />
                </div>
            </div>
        </div>
    )
}