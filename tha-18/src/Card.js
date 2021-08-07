import React from 'react'
import './card.css'
export default function Card({food,calory}) {
    return (
        <div className="card"> 
            <h2>{food}</h2>
            <p>you have consumed {calory} cals today</p>
        </div>
    )
}
