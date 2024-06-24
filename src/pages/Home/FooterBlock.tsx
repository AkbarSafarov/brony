import React from "react";
import shape2  from '../../assets/images/v1/shape2.png';
import mocup  from '../../assets/images/v1/cta-mocup.png';
import playStore  from '../../assets/images/v1/play-store.png';
import appStore  from '../../assets/images/v1/app-store.png';

export const FooterBlock: React.FC = () => {

    return (
        <div className="brony-cta-section blue-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 order-lg-2 d-flex align-items-center">
                        <div className="brony-default-content light">
                            <h2>Начните принимать новых клиентов</h2>
                            <p>Скачайте наше приложение, настройте свой профиль и принимайте новые брони за пару кликов</p>
                            <div className="brony-extara-mt">
                                <div className="brony-app-wrap">
                                    <a className="brony-app" href="/contact-us"><img src={playStore} alt="" /></a>
                                    <a className="brony-app" href="/contact-us"><img src={appStore} alt="" /></a>
                                    <div className="brony-cta-shape">
                                        <img src={shape2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="brony-cta-thumb">
                            <img src={mocup} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}