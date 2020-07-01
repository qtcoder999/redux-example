import { INCREMENT } from "./constants";

const initialState = {

    books: ["The Art of War by Sun Tzu", "The Art of learning by Josh Waitzkin"]

}

export const bookReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:

            let newState = { ...state };

            newState.counter += 1;

            return newState;


        default: return state
    };

}



