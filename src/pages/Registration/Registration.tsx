import React from 'react';
import { Header, Footer, RegistrationSteps } from '../../components';
import s from './Registration.module.scss';

export const Registration: React.FC = () => {
    return (
        <>
            <Header hideLogin={true} />
            <div className={s.registration}>
                <RegistrationSteps />
            </div>
            <Footer />
        </>

    );
};
