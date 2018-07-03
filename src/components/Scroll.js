import React from 'react';

/*
With 'children' I can create components that wrap other components
*/
const Scroll = (props) => {

    console.log(props);
    return (
        <div style={{overflowY: 'scroll', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;