import React, { Component } from 'react';


export default class Item extends Component {

    constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.handleTaskDone(this.props.task.id);

  }

  render(){

    return(
      <li onClick={this.handleOnClick}>{this.props.task.done ? <strike>{this.props.task.name}</strike> :this.props.task.name} </li>
    );
  }

}
