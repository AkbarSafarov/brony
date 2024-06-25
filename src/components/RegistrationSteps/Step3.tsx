import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import s from "./RegistrationSteps.module.scss";
import {Input} from "../Input";

export const Step3: React.FC = observer(() => {
    const [details, setDetails] = useState(registrationStore.userDetails);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setLogoPreview(fileURL);
            registrationStore.setUserDetails({ logo: file });
        } else {
            setLogoPreview(null);
        }
    };

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
        <div className={s.step_form}>
            <div className={s.countStep}>1 / 3</div>
            <div className={s.step_name}>Вы успешно создали аккаунт!</div>
            <div className={s.step_text}>Осталось только настроить, чтобы клиентам было проще найти Вас</div>
            <div>
                <label className={s.fileUpload}>
                    <b>Загрузите ваш лого</b>
                    <span>Если оно у вас не имеется можете загрузить свою фотографию</span>
                    <span
                        className={s.image}
                        style={logoPreview ? { backgroundImage: `url(${logoPreview})`, backgroundSize: 'cover'} : undefined}
                    ></span>
                    <input
                        type="file"
                        name="logo"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
            <div className={`${s.field} ${s.firstName}`}>
                <Input
                    name="firstName"
                    value={details.firstName}
                    placeholder="Имя *"
                    onChange={handleChange}
                />
            </div>
            <div className={`${s.field} ${s.lastName}`}>
                <Input
                    name="lastName"
                    value={details.lastName}
                    placeholder="Фамилия (по усмотрению)"
                    onChange={handleChange}
                />
            </div>
            <div className={`${s.field} ${s.phoneNumber}`}>
                <Input
                    name="phoneNumber"
                    value={registrationStore.phoneNumber}
                    placeholder="Номер телефона *"
                    onChange={handleChange}
                />
            </div>
            <div className={`${s.field} ${s.address}`}>
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

