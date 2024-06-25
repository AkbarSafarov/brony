import React from "react";
import { observer } from "mobx-react-lite";
import { registrationStore } from "../../store/RegistrationStore";
import { Step1 } from './Step1.tsx';
import { Step2 } from './Step2.tsx';
import { Step3 } from './Step3.tsx';
import { Step4 } from './Step4.tsx';
import { Step5 } from './Step5.tsx';
import { Step6 } from './Step6.tsx';
import s from "./RegistrationSteps.module.scss";

export const RegistrationSteps: React.FC = observer(() => {
    const renderStep = () => {
        switch (registrationStore.currentStep) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
        }
    };

    return (
        <>
            <div className={s.step_wrap}>
                {renderStep()}
            </div>
        </>
    );
})