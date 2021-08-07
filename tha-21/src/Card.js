import React, { useState } from 'react'
import './card.css'


export default function Card({name,cal,DeleteItem,EditItem,id}) {

    const [isEdit,setEdit] = useState(false);
    const [food,setfood] = useState(name);
    const [calory,setCal] = useState(cal);

    const changeVal = (e)=>{
        setEdit(!isEdit)
        if(e.target.id==="done"){
            const targetId = Number(e.target.parentElement.parentElement.id);
            EditItem(targetId,{food,calory});
        }
    }

    



    return (
        <div className="card" id={id}>
            {
                isEdit ? 
                    <div>
                        <input type='text' value={food} onChange={(e)=> {setfood(e.target.value)}}/>
                        <input type='number' value={calory} onChange={(e)=>{setCal(e.target.value)}}/>
                    </div>
                :
                <div>
                    <h2>{name}</h2>
                    <p>You have consumed {cal} calories</p>
                </div>

            }
            
            <div className="buttons">
                <button id="delete" onClick={DeleteItem}>Delete</button>
                {
                    !isEdit ? 
                        <button id="edit" onClick={changeVal}>Edit</button>
                    :
                        <button id="done" onClick={changeVal}>Done</button>

                }
            </div>
        </div>
    )
}
