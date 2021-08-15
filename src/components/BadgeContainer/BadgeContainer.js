import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/esm/Card';

export default function ScoutContainer() {
    useEffect(() => {
        fetch('http://localhost:9393/badges')
        .then(r => r.json())
        .then(badgesRes => setBadges(badgesRes));
    },[])

    const [badges,setBadges] = useState([]);

    const badgesList = badges.map(badge =>
    //<li>{badge.badges_name}
    //<ul>
    //<li>Is this required for eagle? {badge.badges_is_eagle}</li>
    //<li>Is this badge earnerd? {badge.badges_is_earned}</li>
    //</ul>
    //</li>
    <Card style={{ width: '20rem'}}>
        <Card.Body>
            <Card.Title>{badge.badges_name}</Card.Title>
            <Card.Header>Is this required for Eagle?</Card.Header>
            <Card.Text>{badge.badges_is_eagle}</Card.Text>
            <Card.Header>Is this earned?</Card.Header>
            <Card.Text>{badge.badges_is_earned}</Card.Text>
        </Card.Body>
    </Card>
    )
    
    return (
        <div>
            {badgesList}
        </div>
    )
}