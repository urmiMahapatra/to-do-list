// import logo from './logo.svg';
import './App.css';
import Task from'./Task/Task.js';
import TodoItem from'./TodoItem/TodoItem.js';


function App() {
  return (
    <div className="App">
      <div className='Container'>
      <h1 className="Title">TODO APP</h1>
        <Task></Task>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
}

export default App;
