// import logo from './logo.svg';
import React from 'react';
import Async from 'react-async'
import { useState } from 'react';
import './App.css';
import Task from './Task/Task.js';
import TodoItem from './TodoItem/TodoItem.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.Items = [];
    // this.state = {
    //   Items: [{
    //     "userId": 1,
    //     "id": 2,
    //     "title": "ABCD",
    //     "completed": false
    //   },]
    // };
    // this.getToDoItemList();
    // console.log(this.Items);

  }

  // handleAdd(element) {
  //   const newList = this.state.Items.concat( {element });
  //   this.state.Items = newList;
  // }

  async getToDoItemList() {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(itemlist => {
        if (itemlist) {
          this.Items = itemlist;
          itemlist.forEach(element => {
            // console.log("PKS element : " + element.userId );
            // this.state.Items.concat(element);
          });
        }
      });

    // console.log(this.state.Items);
    // this.Items.map((item) => console.log("PKS 101 : " + item));
  }

    loadToDoItems = () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json());
  //   RenderItems() {
  //     const listItems = this.Items.map(
  //         (element) => {
  //             return (
  //               <TodoItem Item={element} />
  //             )
  //         }
  //     )
  //     return (
  //         <div>
  //             {listItems}
  //         </div>
  //     )
  // }

  render() {
    this.loadToDoItems();
    return (
      <div className="App">
        <div className='Container'>
          <h1 className="Title">TODO APP</h1>
          <Task />
          <Async promiseFn={this.loadToDoItems}>
            {({ data, err, isLoading }) => {
              if (isLoading) return "Loading..."
              if (err) return `Something went wrong: ${err.message}`
              if (data)
                return (
                  <div>
                    {data.map(user => (
                      <TodoItem Item={user} />
                    ))}
                  </div>
                )
            }}
          </Async>
        </div>
      </div>
    );
  }

}

export default App;
