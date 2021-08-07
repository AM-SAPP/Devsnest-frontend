import React from 'react';
import './tha16.css';
const arr = [...Array(8)];
function EvenElement(){
    return (
        <div className="even-strip">
            {arr.map((item,index)=>{
                return (
                    <div key={index}></div>
                )
            })}
        </div>
    )
}

function OddElement(){
    return (
        <div className="odd-strip">
            {arr.map((item,index)=>{
                return (
                    <div key={index}></div>
                )
            })}
        </div>
    )
}

function Tha16b() {
    return (
        <div className="chess-board">
            {arr.map((item,index)=>{
                if(index%2){
                    return(
                        <OddElement/>
                    )
                }else{
                    return (
                        <EvenElement/>
                    )
                }
            })}
        </div>
    )
}

export default Tha16b;
