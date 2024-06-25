import { observer } from 'mobx-react-lite';
import {YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl} from 'react-yandex-maps';
import salonStore, {IService} from '../../store';

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
                height="100vh">
                {salonStore.employees[salonStore.selectedCategory].map(employee => (
                    <Placemark
                        key={employee.id}
                        geometry={employee.position}
                        properties={{
                            balloonContent: `<strong>${employee.name}</strong><br />
                            Available Times: ${employee.availableTimes.join(', ')}`
                        }}
                        modules={['geoObject.addon.balloon']}
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