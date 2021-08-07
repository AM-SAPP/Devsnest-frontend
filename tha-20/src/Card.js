import React from 'react'
import './card.css'
export default function Card({food,calory,Dishes,setDishes}) {
    const HandleDelete = (e)=>{
        const value = e.target.parentElement.firstChild.innerHTML;
        const newDishes = Dishes.filter((dish)=>{
            if(dish.food !== value){
                return dish;
            }
        })
        setDishes(newDishes);
    }
    return (
        <div className="card"> 
            <div className="header">
                <h2>{food}</h2>
                <button onClick={HandleDelete}>Delete</button>
            </div>
            <p>you have consumed {calory} cals today</p>
        </div>
    )
}
