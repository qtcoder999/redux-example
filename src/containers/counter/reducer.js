import { INCREMENT } from "./constants";

const initialState = {

    counter: 0

}

export const countReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:

            let newState = { ...state };

            newState.counter += 1;

            return newState;


        default: return state
    };

}



