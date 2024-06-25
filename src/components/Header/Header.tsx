import React, {useState} from "react";
import { Link } from 'react-router-dom';
import logo  from '../../assets/images/logo/logo-dark.svg';
import s from './Header.module.scss';

interface HeaderProps {
    hideLogin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({hideLogin}) => {
    const headerClasses = `site-header site-header--menu-center brony-header-section  sticky-menu ${s.header}`;
    const containerClasses = `container ${s.container}`;
    const innerClass = hideLogin ? s.innerPage : '';
    const langClass = `menu-block-wrapper ${innerClass}`;
    const [lang, setLang] = useState(false);

    const langHandle = () => {
        setLang(!lang);
    }
    return (
        <header className={headerClasses} id="sticky-menu">
            <div className={containerClasses}>
                <nav className="navbar site-navbar">
                    <div className="brand-logo">
                        <a href="/">
                            <img src={logo} alt="" className="light-version-logo" />
                        </a>
                    </div>
                    <div className={langClass}>
                        <nav className="menu-block" id="append-menu-header">
                            <ul className="site-menu-main">
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" onClick={langHandle} className="nav-link-item drop-trigger">Русский <i className="fas fa-angle-down"></i></a>
                                    {lang && (
                                        <ul className="sub-menu" id="submenu-1">
                                            <li className="sub-menu--item">
                                                <a href="/">
                                                    <span className="menu-item-text">English</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="/index-02">
                                                    <span className="menu-item-text">O'zbekcha</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="/index-03">
                                                    <span className="menu-item-text">Русский</span>
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {!hideLogin && (
                        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                            <ul className="site-menu-main">
                                <li>
                                    <Link to="/registration" className="brony-default-btn brony-header-btn"><span>Регистрация</span></Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};