import React,{ useState, useEffect } from 'react';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import CreateBadgeForm from './CreateBadgeForm';

function deleteBadge(e) {
    e.preventDefault();
    alert(e.button.id)   
}

function createBadge(badgeDetails) {
    const newBadge = {
      ...badgeDetails
    };
  
    fetch('localhost:9393/badges', {
      method: "POST",
      body: JSON.stringify(newBadge),
    })
      .then((res) => res.json())
  }

export default function ScoutContainer() {
    useEffect(() => {
        fetch('http://localhost:9393/badges')
        .then(r => r.json())
        .then(badgesRes => setBadges(badgesRes));
    },[])

    const [badges,setBadges] = useState([]);

    const badgesList = badges.map(badge =>
    <Card style={{ width: '25rem'}}>
        <Card.Body>
            <Card.Title>{badge.badges_name}<Button variant="danger" onClick={deleteBadge}>X</Button></Card.Title>
            <Card.Header>Is this required for Eagle?</Card.Header>
            <Card.Text>{badge.badges_is_eagle}</Card.Text>
            <Card.Header>Is this earned?</Card.Header>
            <Card.Text>{badge.badges_is_earned}</Card.Text>
        </Card.Body>
        <Card.Footer><Button variant="success" id={badge.id}>Update</Button></Card.Footer>
    </Card>
    )
    
    return (
        <div>
            <section className="create_badges">
                <CreateBadgeForm createBadge={createBadge}/>
            </section>
            {badgesList}
        </div>
    )
}