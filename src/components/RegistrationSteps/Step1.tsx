import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Input } from '../index';
import { registrationStore } from "../../store/RegistrationStore";
import s from "./RegistrationSteps.module.scss";

export const Step1: React.FC = observer(() => {
    const [phone, setPhone] = useState(registrationStore.phoneNumber);

    const handleContinue = () => {
        registrationStore.setPhoneNumber(phone);
        registrationStore.nextStep();
    };

    return (
        <div className={s.step_one}>
            <div className={s.step_name}>Добро пожаловать в BRONY!</div>
            <div className={s.step_text}>Чтобы авторизоваться пожалуйста введите номер телефона</div>
            <Input
                value={phone}
                onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                placeholder="Номер телефона"
            />
            <button onClick={handleContinue} className={s.btn}>Продолжить</button>
            <div className={s.links}><span>Регистрируясь, вы соглашаетесь с нашими</span> <a href="">Условиями</a>, <a href="">Политикой конфиденциальности</a> и <a
                href="">использованием файлов cookie</a>.</div>
        </div>
    );
});
