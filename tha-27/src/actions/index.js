const addItem = (item)=>{
    return {
        type : "ADD_ITEM",
        payload : item
    };
};

const deleteItem = (id)=>{
    return {
        type: "DELETE_ITEM",
        payload : id
    };
};

const loadTodo = ()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>res.json())
            .then((todos)=>{
                return dispatch({
                    type: "load_todos",
                    payload: todos.slice(0,5)
                })
            })
    }
}

export {addItem,deleteItem,loadTodo};