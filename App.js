import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import AddTask from './components/AddTask'

let id = 0;

class App extends Component {



  constructor() {
    super();
    this.state = {items: []};
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleTaskDone = this.handleTaskDone.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }


 handleAddItem(item) {
  const newItem = {id: id, name: item, done: false}
  this.setState({items: this.state.items.concat(newItem)});
  id++;
 }


 handleTaskDone(id) {

  console.log('pp');
  const newItems = this.state.items.map(function(item){
    if (item.id == id) {
      item.done = true;
    }
   });
  this.setState(newItems);

 }


renderItems() {

  const handleTaskDone = this.handleTaskDone;
  return this.state.items.map(function(item){
    return (<Item task={item} handleTaskDone={handleTaskDone}/>)
  });

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todo list</h2>


        </div>
        <AddTask addItem={this.handleAddItem}/>

        <div className="header">
        </div>


        <div>
          <ul>
           {this.renderItems()}

          </ul>

        </div>
      </div>


    );
  }
}

export default App;
