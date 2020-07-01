import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const counterStore = createStore(rootReducer)