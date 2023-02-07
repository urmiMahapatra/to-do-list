// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Task from './Task/Task.js';
import TodoItem from './TodoItem/TodoItem.js';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Items: [{
        "userId": 1,
        "id": 2,
        "title": "ABCD",
        "completed": false
      },]
    };
    this.getToDoItemList();
  }

  handleAdd(element) {
    const newList = this.state.Items.concat( {element });
    this.state.Items = newList;
  }

  getToDoItemList() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(itemlist => { 
      if(itemlist) {
        // this.Items = itemlist;
        itemlist.forEach(element => {
          // console.log("PKS element : " + element.userId );
          // this.state.Items.concat(element);
        });
      } 
    });

    // console.log(this.state.Items);
    // this.Items.map((item) => console.log("PKS 101 : " + item));
  }

  RenderItems() {
    const listItems = this.items.map(
        (element) => {
            return (
              <TodoItem Item={element} />
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

  render() {
    return (
      <div className="App">
        <div className='Container'>
          <h1 className="Title">TODO APP</h1>
          <Task />
          {/* <this.RenderItems /> */}
        </div>
      </div>
    );
  }

}

export default App;
