import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import s from "./RegistrationSteps.module.scss";
import {Input} from "../Input";

export const Step3: React.FC = observer(() => {
    const [details, setDetails] = useState(registrationStore.userDetails);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleContinue = () => {
        registrationStore.setUserDetails(details);
        registrationStore.nextStep();
    };

    const handleBack = () => {
        registrationStore.prevStep();
    };

    return (
        <div>
            <div className={s.step_name}>Вы успешно создали аккаунт!</div>
            <div className={s.step_text}>Осталось только настроить, чтобы клиентам было проще найти Вас</div>
            <div>
                <label className={s.fileUpload}>
                    <b>Загрузите ваш лого</b>
                    <span>Если оно у вас не имеется можете загрузить свою фотографию</span>
                    <input
                        type="file"
                        name="logo"
                        onChange={(e) => registrationStore.setUserDetails({ logo: e.target.files?.[0] || null })}
                    />
                </label>
            </div>
            <div>
                <Input
                    name="firstName"
                    value={details.firstName}
                    placeholder="Имя *"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="lastName"
                    value={details.lastName}
                    placeholder="Фамилия (по усмотрению)"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="phoneNumber"
                    value={registrationStore.phoneNumber}
                    placeholder="Номер телефона *"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="address"
                    value={details.address}
                    placeholder="Адрес *"
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleContinue} className={s.btn}>Продолжить</button>
            <button onClick={handleBack} className={s.backBtn}>Назад</button>
        </div>
    );
});

