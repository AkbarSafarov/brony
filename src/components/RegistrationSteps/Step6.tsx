import React from "react";
import { observer } from "mobx-react-lite";
import qrcode  from '../../assets/qrcode.svg';
import a_store  from '../../assets/a_store.svg';
import g_play  from '../../assets/g_play.svg';
import s from "./RegistrationSteps.module.scss";

export const Step6: React.FC = observer(() => {
    return (
        <div className={s.last_step}>
            <div className={s.step_name}>Готово! <br/>Добро пожаловать в BRONY</div>
            <div className={s.step_text_last}>Чтобы начать работу с клиентами <br/> скачайте приложение:</div>
            <img src={qrcode} alt="QR Code" />
            <div className={s.storeBtn}>
                <a href="">
                    <img src={g_play} alt=""/>
                </a>
                <a href="">
                    <img src={a_store} alt=""/>
                </a>
            </div>
        </div>
    );
});