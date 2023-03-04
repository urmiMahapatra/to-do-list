// import logo from './logo.svg';
import React from 'react';
// import Async from 'react-async'
// import { useState } from 'react';
import './App.css';
// import Task from './Task/Task.js';
import TodoItem from './TodoItem/TodoItem.js';


class App extends React.Component {
  api = "https://jsonplaceholder.typicode.com/todos";

  state = {
    loading: true,
    todoList: [],
    error: null,
    taskId: 277,
    taskUid: 2707,
    taskTitle: "",
    newItem: []
  };

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    console.log("PKS 1001");
    this.getFetchItems();
  }

  getFetchItems() {
    this.setState({
      loading: true
    }, () => {
      fetch(this.api)
        .then(res => res.json())
        .then(result => this.setState({
          loading: false,
          todoList: result
        })).catch(console.log);
    });
  }

  addItem(e) {
    const newObj = {
      completed: false,
      id: this.state.taskId,
      title: this.state.taskTitle,
      userId: this.state.taskUid
    };
    const cloneArr = [...this.state.todoList];
    const newArr = [newObj, ...cloneArr];
    this.setState({ taskId: this.state.taskId + 1 });
    this.setState({ taskUid: this.state.taskUid + 1 });
    this.setState({ todoList: newArr });
    console.log(this.state.todoList);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.todoList)
    };
    fetch(this.api, requestOptions)
      .then((res) => {
        console.log("Data Added");
      })
  }

  updateItem(selectedItem, op) {
    const editIndex = this.state.todoList.findIndex(item => (item.id === selectedItem.id));
    if (op === 1) {
      this.editItem(editIndex, selectedItem.title);
    } else {
      this.deleteItem(selectedItem.id);
    }

  }

  editItem(editIndex, title) {
    this.state.todoList[editIndex].title = title;
    fetch("https://jsonplaceholder.typicode.com/todos?id=editIndex", {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({ title })
    })

      .then((res) => {
        console.log("Data edited");

      })
  }

  deleteItem(editIndex) {
    const changedArr = this.state.todoList.filter(item => item.id !== editIndex);
    this.setState({ todoList: changedArr });
    fetch('https://jsonplaceholder.typicode.com/todos/id=editIndex', {
      method: 'DELETE',
    });
  }

  render() {
    const items = this.state.todoList;
    return (
      <div className="App">
        <div className='Container'>
          <h1 className="Title">TODO APP</h1>
          <div className='TaskName'>
            <h1 className='TitleTask'>TASK </h1>
            <input type="text" className="TextBox" id="TaskTextBox" placeholder="" value={this.state.taskTitle} onChange={(e) => { this.setState({ taskTitle: e.target.value }) }}></input>
            <button className='AddTask' onClick={this.addItem}>ADD TASK</button>
          </div>
          {
            items.map(item => <TodoItem Item={item} selectedTask={this.updateItem} key={item.id} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
