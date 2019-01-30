import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  /** 
   * state当前数据
   * 属性传值
   * */ 


  state = {
    persons: [
      {name:"Henry",count:5},
      {name:"lee",count:2},
      {name:"liu",count:3},
    ],
  }

  chData = (count)=>{
    // this.state.persons[0].name = "我变了~~~"
    // 不能进行直接修改
    this.setState({
      persons: [
        {name:"我变了！！！！~",count:count},
        {name:"lee",count:2},
        {name:"liu",count:3},
      ],
    })
    console.log(99)
  }

  nameChangHanld = (event)=>{
    this.setState({
      persons: [
        {name: event.target.value,count:10},
        {name:"lee",count:2},
        {name:"liu",count:3},
      ],
    }) 
  }
  
  // 不使用 JSX 语法来进行渲染 写法比较麻烦
  // render(){
  //   return React.createElement('div',{className:"App"},React.createElement('h1',null,"hello world"))
  // }

  render() {
    return (
      // JSX语法
      <div className="App">
          <h1>
            hello React
          </h1>
          <button onClick={() => this.chData(50000000000000000)}>增加</button>
          <Person count = {this.state.persons[0].count} 
                  name = {this.state.persons[0].name}
                  myClick = {() => this.chData(50000000000000000)}
                  changed = {this.nameChangHanld} />
          <Person count={this.state.persons[1].count} name={this.state.persons[1].name} />
          <Person count={this.state.persons[2].count} name={this.state.persons[2].name} />
          <Person>
            中间内容
          </Person>
          <input/>
      </div>
    );
  }
}

export default App;
