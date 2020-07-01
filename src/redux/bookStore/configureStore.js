import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const bookStore = createStore(rootReducer)