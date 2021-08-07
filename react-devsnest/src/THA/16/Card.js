import React from 'react'
import './tha16.css'

function Card(props){
    return (
        <div className="wrapper">
            <div className="card">
                <img src={props.src} alt="card_image"/>
                <div>
                    <h1>Random Image</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;


