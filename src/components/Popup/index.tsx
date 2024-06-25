import {Tabs, TabsProps} from "antd";
import {runtime} from "../../store/runtime.ts";
import TabFirst from "./TabFirst";
import BackButton from "../../assets/back.svg";
import ShareButton from "../../assets/share.svg";
import avatar from "../../assets/avatar.png";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import s from './index.module.scss';

const Popup = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Бронировать',
            children: <TabFirst />,
        },
        {
            key: '2',
            label: 'Информация',
            children: 'Info',
        },
        {
            key: '3',
            label: 'Отзывы',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <div className={s.popup}>
            <div className={s.popupTop}>
                <button onClick={() => runtime.setPopup('')} className={s.backButton}><img src={BackButton}/></button>
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
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
        </div>
    );
};

export default Popup;