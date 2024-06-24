import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import { Input } from '../index';
import s from "./RegistrationSteps.module.scss";

export const Step2: React.FC = observer(() => {
    const [code, setCode] = useState(registrationStore.verificationCode);

    const handleContinue = () => {
        registrationStore.setVerificationCode(code);
        registrationStore.nextStep();
    };

    const handleBack = () => {
        registrationStore.prevStep();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(0, 6);
        setCode(value);
    };


    return (
        <div>
            <div className={s.step_name}>Подтвердите номер телефона</div>
            <div className={s.step_text}>Мы отправили 6-значный код на номер телефона <b>{registrationStore.phoneNumber}</b></div>
            <Input
                value={code}
                placeholder="6-значный код"
                onChange={handleChange}
            />
            <button onClick={handleContinue} className={s.btn}>Продолжить</button>
            <button onClick={handleBack} className={s.backBtn}>Назад</button>
        </div>
    );
});
