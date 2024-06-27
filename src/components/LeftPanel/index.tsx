import { observer } from 'mobx-react';
import Employee from '../Employee';
import backButton from '../../assets/back.svg';
import addUser from '../../assets/add-user.svg';
import viewList from '../../assets/view-list.svg';
import outlineMap from '../../assets/outline-map.svg';
import s from './index.module.scss';
import {Tabs} from "../Tabs";
import {runtime} from "../../store/runtime.ts";

export const LeftPanel = observer(() => {

    const onClick = () => {

    }

    const onAdd = () => {

    }

    return (
        <>
            <div className={s.top}>
                <button onClick={onClick} className={s.backButton}>
                    <img src={backButton}/>
                    <div className={s.masters}>Мастера</div>
                </button>
                <button onClick={onAdd} className={s.addButton}>
                    <img src={addUser}/> Добавить свои услуги
                </button>
                {runtime.visibleOnMedia === 'map' && (
                    <button onClick={() => runtime.setVisibleOnMedia('tabs')} className={s.mapButton}>
                        <img src={outlineMap}/> На Карте
                    </button>
                )}
                {runtime.visibleOnMedia === 'tabs' && (
                    <button onClick={() => runtime.setVisibleOnMedia('map')} className={s.listButton}>
                        <img src={viewList}/> Списком
                    </button>
                )}
            </div>
            <div className={s.tabsWrapper}>
                <Tabs/>
            </div>
            <Employee/>
        </>
    );
});