import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import { addItem, loadTodo } from '../actions';
export default function AddTodos() {
    const [item,setItem] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" placeholder="Add a todo..." value={item} 
            onChange={(e)=>{
                setItem(e.target.value)
            }}/>
            <button onClick={()=>{
                if(item.length){
                    dispatch(addItem({
                    title: item,
                    done : false
                    }))
                }
                 
                setItem("");
            }}>Add</button>
            <button onClick={()=>{
                dispatch(loadTodo())
            }}>Load Todo</button>
        </div>
    )
}
