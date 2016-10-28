import React, { Component } from 'react';


export default class AddTask extends Component {

  constructor() {
    super();
    this.state = {item: ''};
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.item);

  }

  handleOnChange(e) {
    this.setState({item: e.target.value});

  }





  render(){

    return(
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} value={this.state.item}/>
          <button type="submit">add</button>
        </form>
    );
  }

}
