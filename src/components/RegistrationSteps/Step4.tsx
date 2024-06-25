import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import { Icon } from "../Icon";
import s from "./RegistrationSteps.module.scss";


interface IServiceItem {
    name: string;
    icon: string;
}

export const Step4: React.FC = observer(() => {
    const [selectedService, setSelectedService] = useState(registrationStore.selectedService);

    const handleContinue = () => {
        registrationStore.setSelectedService(selectedService);
        registrationStore.nextStep();
    };

    const handleBack = () => {
        registrationStore.prevStep();
    };

    const handleSelectService = (service: string) => {
        setSelectedService(service);
        registrationStore.setSelectedService(service);
    };

    const serviceObj = {
        "0": { "name": "Ногти", "icon": "nails" },
        "2": { "name": "Волосы", "icon": "hair" },
        "3": { "name": "Брови и ресницы", "icon": "eyelashes" },
        "4": { "name": "СПА салоны", "icon": "spa" },
        "5": { "name": "Удаление волос", "icon": "depilation" },
        "6": { "name": "Уход за кожей", "icon": "care" },
        "7": { "name": "Визайжист", "icon": "makeup" },
        "8": { "name": "Массаж", "icon": "massaj" },
        "9": { "name": "Стоматолог", "icon": "dentist" },
        "10": { "name": "Тату, татуаж", "icon": "makeup2" },
        "11": { "name": "Другое", "icon": "makeup3" }
    };

    const serviceArray: IServiceItem[] = Object.values(serviceObj);

    return (
        <div>
            <div className={s.countStep}>2 / 3</div>
            <div className={s.step_name}>Выберите основной вид деятельности</div>
            <div className={s.sevices}>
                {serviceArray && serviceArray.map((item) => (
                    <div
                        key={item.name}
                        className={`${s.item} ${selectedService === item.name ? s.active : ''}`}
                        onClick={() => handleSelectService(item.name)}
                    >
                        <input
                            type="radio"
                            name="service"
                            value={item.name}
                            checked={selectedService === item.name}
                            onChange={() => handleSelectService(item.name)}
                        />
                        <Icon icon={item.icon} active={selectedService === item.name ? 'active' : ''} />
                        <span className={s.name}>{item.name}</span>
                    </div>
                ))}
            </div>
            <button onClick={handleContinue} className={s.btn}>Далее к последнему шагу</button>
            <button onClick={handleBack} className={s.backBtn}>Назад</button>
        </div>
    );
});

