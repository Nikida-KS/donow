
import React from 'react';
import Paper from '@material-ui/core/Paper';

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

  removeCompleted(index){
    const newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});
  }

  renderList(){
    const mappedList = this.state.list.map((item,  index) => {
      return <Paper elevation={index}  key = {index}><li><label><span>{item}</span></label><button onClick={(e) => this.removeCompleted(index)}>x</button></li></Paper>})
    return mappedList
  }

  render (){
    return (
      <div>
        <Paper elevation={5}>
          <h2>Get It Done</h2>
        </Paper>
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
