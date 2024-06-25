import salonStore from "../../store";
import avatar from "../../assets/avatar.png";
import { runtime } from "../../store/runtime.ts";
import s from './index.module.scss';
import {observer} from "mobx-react-lite";

const Employee = observer(() => {
    return (
        <>
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
        </>
    );
});

export default Employee;