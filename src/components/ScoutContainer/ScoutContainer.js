import React,{ useState, useEffect } from 'react';

export default function ScoutContainer() {
    useEffect(() => {
        fetch('http://localhost:9393/scouts')
        .then(r => r.json())
        .then(scoutsRes => setScouts(scoutsRes));
    },[])

    const [scouts,setScouts] = useState([]);

    const scoutsList = scouts.map(scout => <li>{scout.scouts_f_name} {scout.scouts_l_name}</li>)
    
    return (
        <div>
            <h1>Scouts</h1>
            <ul>
                {scoutsList}
            </ul>
        </div>
    )
}