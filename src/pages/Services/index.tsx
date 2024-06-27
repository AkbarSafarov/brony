import {observer} from "mobx-react-lite";
import {LeftPanel, YaMap, Tabs} from "../../components";
import s from './index.module.scss';
import {runtime} from "../../store/runtime.ts";
import Popup from "../../components/Popup";
import PopupService from "../../components/PopupService";
import PopupReady from "../../components/PopupReady";

export const Services = observer(() => {
    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <LeftPanel/>
            </div>
            <div className={s.right}>
                <div className={s.tabsWrapper}>
                    <Tabs />
                </div>
                <YaMap />
            </div>
            {runtime.popup === 'master' && <Popup />}
            {runtime.popup === 'booking' && <PopupService />}
            {runtime.popup === 'ready' && <PopupReady />}
        </div>

    );
});