const initialState = {
    username : "",
    email : ""
}

const inputReducer = (state = initialState,action)=>{
    if(action.type==="SET_DATA"){
        return {
            ...state,
            username : action.payload.username,
            email : action.payload.email
        }
    }
    return state;
}

export {inputReducer};