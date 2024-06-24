import React from "react";
import logo  from '../../assets/images/logo/logo-dark.svg';

export const Footer: React.FC = () => {

    return (
        <footer className="brony-footer-section main-footer white-bg">
            <div className="container">
                <div className="brony-footer-top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="brony-footer-textarea">
                                <a href="">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brony-footer-bottom">
                    <div className="brony-social-icon order-md-2">
                        <ul>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="brony-copywright">
                        <p> 2024 © Все права защищены Brony • <a href="">Политика конфиденциальности</a> • <a href="">Условия пользования</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};