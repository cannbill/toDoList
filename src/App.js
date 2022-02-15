import React, { Component } from 'react';

class App extends Component {
  constructor (props){
    super(props);

    this.state={
      newTask:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addTask(){
    const newTask={
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };
    const list = [...this.state.list];
    list.push(newTask);
    this.setState({
      list,
      newTask:""
    });
  }

  deleteTask(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }
  
  render() {
    return (
      <div className="App">
        <div>
          To do list:
          <input
          type="text"
          placeholder="Type task here"
          value={this.state.newTask}
          onChange={e => this.updateInput("newTask", e.target.value)}
          />
          <button onClick={() => this.addTask()}>Add</button>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.delete.item(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
