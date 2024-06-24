import React from 'react';
import { Header, Footer } from '../../components';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/animate.css';
import '../../assets/css/fontawesome.css';
import '../../assets/css/main.css';
import '../../assets/css/app.min.css';
import {HeaderBlock} from "./HeaderBlock.tsx";
import { FooterBlock } from './FooterBlock.tsx';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <HeaderBlock />
            <FooterBlock />
            <Footer />
        </>

    );
};
