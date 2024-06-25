import {observer} from 'mobx-react-lite';
import {runtime} from '../../store/runtime.ts';
import closeIcon from '../../assets/close.svg';
import checkCircle from '../../assets/check-circle.svg';
import qrCode from '../../assets/qr_code.png';
import s from './index.module.scss';

const PopupReady = observer(() => {

    return (
        <div className={s.popup}>
            <button className={s.popupClose} onClick={() => runtime.setPopup('')}>
                <img src={closeIcon} alt=""/>
            </button>
            <div className={s.popupCenter}>
                <img src={checkCircle} alt=""/>
                <div className={s.popupCenterTitle}>
                    Готово!
                </div>
                <div className={s.popupCenterDesc}>Мы забронировали для вас место.</div>
                <div className={s.popupCenterSubtitle}>Детали отправили СМС сообщением на ваш номер телефона</div>
            </div>
            <div className={s.popupQr}>
                <div className={s.popupQrTitle}>Для удобства в пользовании,<br/> скачайте приложение</div>
                <img src={qrCode}/>
            </div>
        </div>
    );
});

export default PopupReady;