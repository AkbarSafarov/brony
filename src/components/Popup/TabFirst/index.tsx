import { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import {observer} from 'mobx-react-lite';
import { runtime } from '../../../store/runtime.ts';
import s from './index.module.scss';

const TabFirst = observer(() => {

    const [value, setValue] = useState<number>();

    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div>
            <div className={s.days}>
                <div className={s.daysItem}>12 <span>Пт</span></div>
                <div className={s.daysItem}>13 <span>Сб</span></div>
                <div className={s.daysItem}>14 <span>Вс</span></div>
                <div className={s.daysItem}>15 <span>Пн</span></div>
                <div className={s.daysItem}>16 <span>Вт</span></div>
            </div>
            <div className={s.hours}>
                <div className={s.hoursItem}>9:00</div>
                <div className={s.hoursItem}>10:00</div>
                <div className={s.hoursItem}>11:00</div>
                <div className={s.hoursItem}>11:30</div>
                <div className={s.hoursItem}>12:00</div>
            </div>
            <div className={s.service}>
                <div className={s.serviceTitle}>Выбрать услугу</div>
                <div className={s.serviceItem}>
                    <Radio.Group onChange={onChangeRadio} value={value} className={s.radio}>
                        <Radio value={1}>
                            <div className={s.serviceItemTop}>
                                <div className={s.serviceItemTitle}>Стрижка</div>
                                <div className={s.serviceItemPrice}>300 000 UZS</div>
                            </div>
                            <div className={s.serviceItemHour}>1ч 30м</div>
                            <div className={s.serviceItemDesc}>
                                Классическая или современная стрижка.
                                Услуга включает в себя мытьё головы до и
                                после стрижки шампунем American Crew, массаж
                                головы плеч и рук, укладка с примирением
                                высококачественной мужской косметики ,
                                также консультация и рекомендации по уходу за волосами
                            </div>
                        </Radio>
                        <Radio value={2}>
                            <div className={s.serviceItemTop}>
                                <div className={s.serviceItemTitle}>Бритье</div>
                                <div className={s.serviceItemPrice}>50 000 UZS</div>
                            </div>
                            <div className={s.serviceItemHour}>30м</div>
                            <div className={s.serviceItemDesc}>
                                Классическая или современная стрижка.
                                Услуга включает в себя мытьё головы до и
                                после стрижки шампунем American Crew, массаж
                                головы плеч и рук, укладка с примирением
                                высококачественной мужской косметики ,
                                также консультация и рекомендации по уходу за волосами
                            </div>
                        </Radio>
                        <Radio value={3}>
                            <div className={s.serviceItemTop}>
                                <div className={s.serviceItemTitle}>Укладка</div>
                                <div className={s.serviceItemPrice}>120 000 UZS</div>
                            </div>
                            <div className={s.serviceItemHour}>30м</div>
                            <div className={s.serviceItemDesc}>
                                Классическая или современная стрижка.
                                Услуга включает в себя мытьё головы до и
                                после стрижки шампунем American Crew, массаж
                                головы плеч и рук, укладка с примирением
                                высококачественной мужской косметики ,
                                также консультация и рекомендации по уходу за волосами
                            </div>
                        </Radio>
                    </Radio.Group>
                </div>
            </div>
            <button onClick={() => runtime.setPopup('booking')} className={s.bron}>Бронировать</button>
        </div>
    );
});

export default TabFirst;