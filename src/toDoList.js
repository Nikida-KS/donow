
import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      checked: [],
    };
  }

  handleChange(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const newList = this.state.list.slice();
    newList.push(this.state.inputValue);
    this.setState({list: newList, inputValue: ''});
  }

  removeCompleted(e){
    console.log('write a method to delete me')
  }

  renderList(){
    const mappedList = this.state.list.map((item,  index) => {
      return <li key = {index}><label><span>{item}</span></label><button onClick={(e) => this.removeCompleted({index})}>x</button></li>})
    return mappedList
  }

  render (){
    return (
      <div>
        <h2>Get It Done</h2>
        <div>
          <form onSubmit={(e)=> this.handleSubmit(e)}>
            <input
              value = {this.state.inputValue}
              type ="text"
              onChange={(e) => this.handleChange(e)}/>
              <button type = "submit">Add task</button>
          </form>
        </div>
        {this.renderList()}
      </div>
    )
  }
}
