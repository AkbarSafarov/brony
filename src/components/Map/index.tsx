import { observer } from 'mobx-react-lite';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl } from '@pbe/react-yandex-maps';
import salonStore, { IService } from '../../store';
import pin from '../../assets/pin.svg';

export const YaMap = observer(() => {
    const handleClick = (employee: IService) => {
        salonStore.selectEmployee(employee);
    };

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: salonStore.mapCenter,
                    zoom: salonStore.zoom
                }}
                width="100%"
                height="100vh"
            >
                {salonStore.employees[salonStore.selectedCategory].map((employee) => (
                    <Placemark
                        key={employee.id}
                        geometry={employee.position}
                        properties={{
                            balloonContentHeader: `<strong>${employee.name}</strong>`,
                            balloonContentBody: `Available Times: ${employee.availableTimes.join(', ')}`
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: pin,
                            iconImageSize: [30, 30],
                            iconImageOffset: [-15, -30]
                        }}
                        onClick={() => handleClick(employee)}
                    />
                ))}
                <FullscreenControl />
                <GeolocationControl options={{ position: { top: 200, right: 10 } }} />
                <ZoomControl options={{ size: 'small', position: { top: 250, right: 10 } }} />
            </Map>
        </YMaps>
    );
});