import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import { counterStore } from "./redux/counterStore/configureStore"

import Counter from "./containers/counter/CounterContainer";
import { bookStore } from './redux/bookStore/configureStore';

function App() {
  return (
    <Provider store={counterStore}>
      <Provider store={bookStore}>
        <Counter />
      </Provider>
    </Provider >
  );
}

export default App;
