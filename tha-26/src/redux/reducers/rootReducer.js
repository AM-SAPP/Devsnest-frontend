import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";

const rootReducer = combineReducers({
    inputform : inputReducer
})

export default rootReducer;