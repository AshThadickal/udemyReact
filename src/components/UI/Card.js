// Card.js
import React from "react";
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        // children props will always be the content between the opening and closing compent tags
        <div className={classes}>{props.children}</div>
    )
}

export default Card;