import React from 'react';

function Dinner(props) {
    return(
        <div>
            <h4>Today we have {props.dishName} ans in sweet {props.sweetDish}</h4>
        </div>
    )
}

export default Dinner;