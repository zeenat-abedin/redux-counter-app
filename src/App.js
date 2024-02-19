import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './redux/counterReducer'
import Counter from "./Counter";

const store = configureStore({
  reducer: { counter: counterReducer },
})

function App() {
  return (
    <Provider store={store}>
       <Counter/>
    </Provider>
  );
}

export default App;
