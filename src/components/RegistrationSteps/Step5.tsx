// components/Step5.tsx
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import s from "./RegistrationSteps.module.scss";

interface IServiceItem {
    name: string;
    price: string;
    distance: string;
}

export const Step5: React.FC = observer(() => {
    const [service, setService] = useState("");

    const handleAddService = () => {
        if (service) {
            registrationStore.addService(service);
            setService("");
        }
    };

    const handleComplete = () => {
        registrationStore.nextStep();
    };

    const handleBack = () => {
        registrationStore.prevStep();
    };

    const serviceObj = {
        "0": { "name": "Маникюр", "price": "50 UZS", "distance": "1ч 30м"},
        "1": { "name": "Педикюр", "price": "50 UZS", "distance": "30м"},
        "2": { "name": "Наращивание", "price": "50 UZS", "distance": "45м"},
    };

    const serviceArray: IServiceItem[] = Object.values(serviceObj);

    const editHandle = () =>{
        return false;
    }
    const actionHandle = () =>{
        return false;
    }


    return (
        <div>
            <div className={s.countStep}>3 / 3</div>
            <div className={s.step_name}>И последний шаг – настроить услуги</div>
            <div className={s.step_text}>Вы можете в любое время изменить свои услуги в приложении в разделе Услуг</div>
            <div className={s.addBtnWr}>
                <button className={s.addBtn} onClick={handleAddService}>Добавить услугу</button>
            </div>
            <div className={s.serviceList}>
                {serviceArray && serviceArray.map((item) => (
                    <div key={item.name} className={s.item}>
                        <div className={s.itemName}>
                            <div className={s.name}>{item.name}</div>
                            <div className={s.price}>{item.price}</div>
                        </div>
                        <div className={s.distance}>{item.distance}</div>
                        <div className={s.edit} onClick={editHandle}>Нажмите чтобы изменить</div>
                        <div className={s.action} onClick={actionHandle}></div>
                    </div>
                ))}
            </div>
            <button onClick={handleComplete} className={s.btn}>Готово</button>
            <button onClick={handleBack} className={s.backBtn}>Назад</button>
        </div>
    );
});

