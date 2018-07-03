// need to import react in order to use JSX
import React from 'react';
import { Card } from 'semantic-ui-react';

const RobotCard = ({ id, name, email }) => {
    return (
        <Card 
            image={`https://robohash.org/${id}?200x200`}
            header={name}
            meta={email}
        />
    )
}

export default RobotCard;