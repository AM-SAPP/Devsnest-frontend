const todoReducer = (state = [], action) => {
    if(action.type === "ADD_ITEM"){
         return [...state,action.payload];
    }else if(action.type === "DELETE_ITEM"){
        return state.filter((item,index) => index !== action.payload);
    }else if(action.type==="load_todos"){
        return action.payload;
    }
    return state;
}

export default todoReducer ;