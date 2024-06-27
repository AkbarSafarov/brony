import {observer} from "mobx-react-lite";
import salonStore from "../../store";
import { runtime } from "../../store/runtime.ts";
import avatar from "../../assets/avatar.png";
import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";
import s from './index.module.scss';

const Employee = observer(() => {
    return (
        <>
            <div className={s.eTop}>
                <div className={s.eTitle}>Мастера по: <span>{salonStore.selectedCategory}</span></div>
                <button className={s.eSearch}>
                    <img src={search} alt=""/>
                </button>
                <button className={s.eFilter}>
                    <img src={filter} alt=""/>
                </button>
            </div>
            <div className={ runtime.visibleOnMedia === 'map' ? s.db : s.dn}>
                {salonStore.employees[salonStore.selectedCategory].map((employee) => (
                    <div className={s.employeeItem} onClick={() => runtime.setPopup('master')} key={employee.id}>
                        <div className={s.employeeTop}>
                            <div className={s.employeeAvatar}>
                                <img src={avatar}/>
                            </div>
                            <div className={s.employeeRight}>
                                <div className={s.employeeName}>{employee.name}</div>
                                <div className={s.employeeRightBottom}>
                                    {employee.rating && <div className={s.employeeRating}>{employee.rating} / 5.0</div>}
                                    <div className={s.employeeNear}>
                                        1.69 км
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.employeeSlot}>
                            Ближайщий свободный слот: <span>сегодня</span>
                        </div>
                        <div className={s.employeeHoursWrap}>
                            {employee.availableTimes.map((item: string) => <div key={item} className={s.employeeHours}>{item}</div>)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
});

export default Employee;