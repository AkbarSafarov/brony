import { observer } from 'mobx-react';
import Employee from '../Employee';
import backButton from '../../assets/back.svg';
import addUser from '../../assets/add-user.svg';
import s from './index.module.scss';

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
                </button>
                <button onClick={onAdd} className={s.addButton}>
                    <img src={addUser}/> Добавить свои услуги
                </button>
            </div>
            <Employee/>
        </>
    );
});