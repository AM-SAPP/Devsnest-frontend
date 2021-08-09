import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../actions';


export default function ListTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todo);
    return (
        <div className="todos">
            {todos.map((todo,index)=>{  
                return (
                    <div key={index}>
                    <h5 style={{display: 'inline-block'}}>{todo.title}</h5>
                        <button onClick={()=>{
                            dispatch(deleteItem(index));
                        }}>Delete</button> 
                    </div>
                )
            })}
            
        </div>
    )
}
