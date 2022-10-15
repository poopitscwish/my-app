import React from 'react';
import { YMaps, Map as YaMap } from 'react-yandex-maps';

const Map = () => {
    return(
        <YMaps>
            <div id="Map" className="ms-4 d-flex">
                <YaMap defaultState={{ center: [56.01528, 92.89325], zoom: 9 }}  width="100%" height="600px" />
            </div>
        </YMaps>
    )
}

export default Map;