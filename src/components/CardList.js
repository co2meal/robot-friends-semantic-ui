import React from 'react';
import RobotCard from './RobotCard';
import { Card } from 'semantic-ui-react';

/* 
key property : When I change s/th from DOM, react can detect it with key, rather than changing the entire DOM (It should be unique and not changable)
*/
const CardList = ({robots}) => {
    const cardsArray = robots.map((user, i) => {
        return (
            <RobotCard 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        );
    });
    return(
        <Card.Group>
            {cardsArray}
        </Card.Group>
    );
}

export default CardList;