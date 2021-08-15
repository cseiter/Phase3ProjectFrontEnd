import React,{ useState, useEffect } from 'react';

export default function ScoutContainer() {
    useEffect(() => {
        fetch('http://localhost:9393/badges')
        .then(r => r.json())
        .then(badgesRes => setBadges(badgesRes));
    },[])

    const [badges,setBadges] = useState([]);

    const badgesList = badges.map(badge =>
    <li>{badge.badges_name}
    <ul>
    <li>Is this required for eagle? {badge.badges_is_eagle}</li>
    <li>Is this badge earnerd? {badge.badges_is_earned}</li>
    </ul>
    </li>
    )
    
    return (
        <div>
            <h1>Badges</h1>
            <ul>
                {badgesList}
            </ul>
        </div>
    )
}