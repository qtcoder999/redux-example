import { combineReducers } from "redux"
import { countReducer } from "../../containers/counter/reducer"

export const rootReducer = combineReducers({
    count: countReducer
})