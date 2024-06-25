import {observer} from "mobx-react-lite";
import {runtime} from "../../store/runtime.ts";
import BackButton from "../../assets/back.svg";
import ShareButton from "../../assets/share.svg";
import avatar from "../../assets/avatar.png";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import s from './index.module.scss';

const PopupService = observer(() => {

    const onSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        runtime.setPopup('ready');
    }

    return (
        <div className={s.popup}>
            <div className={s.popupTop}>
                <button onClick={() => runtime.setPopup('master')} className={s.backButton}><img src={BackButton}/></button>
                <button className={s.shareButton}><img src={ShareButton}/></button>
            </div>
            <div className={s.employeeItem}>
                <div className={s.employeeTop}>
                    <div className={s.employeeAvatar}>
                        <img src={avatar}/>
                    </div>
                    <div className={s.employeeRight}>
                        <div className={s.employeeName}>Альберт Росс</div>
                        <div className={s.employeeRightBottom}>
                            <div className={s.employeeRating}>4.8 / 5.0</div>
                            <div className={s.employeeNear}>
                                1.69 км
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className={s.phone}><img src={phone} alt=""/></a>
                <a href="#" className={s.location}><img src={location} alt=""/></a>
            </div>
            <div className={s.selectedDate}>
                Выбранная дата и время
                <div className={s.selectedDateHours}>
                    <span>29 январь 2024 </span>
                    <span>12:00</span>
                </div>
            </div>
            <div className={s.selectedService}>
                <div className={s.selectedServiceTitle}>
                    Выбранные услуги
                </div>
                <div className={s.selectedServiceItem}>
                    <div className={s.selectedServiceItemTop}>
                        <div className={s.selectedServiceItemTitle}>Стрижка</div>
                        <div className={s.selectedServiceItemPrice}>300 000 UZS</div>
                    </div>
                    <div className={s.selectedServiceHour}>1ч 30м</div>
                </div>
                <div className={s.selectedServiceItem}>
                    <div className={s.selectedServiceItemTop}>
                        <div className={s.selectedServiceItemTitle}>Укладка</div>
                        <div className={s.selectedServiceItemPrice}>100 000 UZS</div>
                    </div>
                    <div className={s.selectedServiceHour}>30м</div>
                </div>
            </div>
            <div className={s.total}>
                <div className={s.totalTitle}>Итого:</div>
                <div className={s.totalPrice}>400 000 UZS</div>
            </div>
            <form action="" onSubmit={(e) => onSubmit(e)}>
                <div className={s.formTitle}>Введите ваши данные</div>
                <label htmlFor="name" className={s.inputWrap}>
                    <span className={s.inputTitle}>ФИО *</span>
                    <input type="text" className={s.input} placeholder="Махкамов Бехзодхон"/>
                </label>
                <label htmlFor="phone" className={s.inputWrap} >
                    <span className={s.inputTitle}>Номер телефона *</span>
                    <input type="text" className={s.input} placeholder="+998 90 934 46 57"/>
                </label>
                <button className={s.button} type="submit">Готово</button>
            </form>
        </div>
    );
});

export default PopupService;