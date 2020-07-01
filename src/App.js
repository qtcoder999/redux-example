import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import { store } from "./redux/configureStore"

import Counter from "./containers/counter/CounterContainer";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
