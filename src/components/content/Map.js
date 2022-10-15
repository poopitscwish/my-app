import React from 'react';
import { YMaps, Map as YaMap } from 'react-yandex-maps';

const Map = () => {
    return(
        <YMaps>
            <div id="Map" className="w-100">
                <YaMap defaultState={{ center: [56.01528, 92.89325], zoom: 9 }} width="100%" height="100vh"/>
            </div>
        </YMaps>
    )
}

export default Map;