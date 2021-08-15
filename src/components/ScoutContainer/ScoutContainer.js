import React,{ useState } from 'react';

const dummy_scouts = [{"id":5,"scouts_f_name":"Aiden","scouts_l_name":"Seiter","scouts_troop":1}]

export default function ScoutContainer() {
    const [scouts,setScouts] = useState(dummy_scouts);
    return (
        <div>
            <h1>Scouts</h1>
            <ul>
                {scouts.map(scout => <li>{scout.scouts_f_name} {scout.scouts_l_name}</li>)}
            </ul>
        </div>
    )
}