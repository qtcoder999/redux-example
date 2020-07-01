import { combineReducers } from "redux"
import { countReducer } from "../../containers/counter/reducer"
import { bookReducer } from "../../containers/books/reducer"

export const rootReducer = combineReducers({
    count: countReducer,
    books: bookReducer
})