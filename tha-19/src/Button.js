import React,{useState} from 'react'
import './button.css'
export default function Button() {
    const [num, setnum] = useState(0);
    const IncreaseNum = ()=>{
        setnum(num+1);
    }
    return (
        <button onClick={IncreaseNum}>{num}</button>
    )
}
