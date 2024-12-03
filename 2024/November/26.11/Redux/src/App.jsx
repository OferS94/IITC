import './App.css';
///////////////////////////////////
import {Provider} from "react-redux";
import { store } from "./store";
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Provider store = {store}>
      <div>
        <h1>Redux To-Do List</h1>
        <TodoList/>
      </div>
    </Provider>
    </>
  )
}

export default App