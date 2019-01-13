import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  /*
    state: 用于改变组件内容状态的值（动态）
    props: 用于组件通信进行传值 
    setState： 使用 this.setState 对state进行设定
  */

  state = {
    persons: [
      { name: "lb", count: 9},
      { name: "jjh", count: 90},
      { name: "sf", count: 89},
    ],
    otherState: 'anyThing'
  }

  switchData = (newName)=>{
    // this.state.persons[0].name = "lbbb" 不要直接修改状态

    // 使用这个方法修改

    console.log(newName)

    this.setState({
      persons: [
        { name: "lbbbbbb", count: 9},
        { name: "jjh", count: 20},
        { name: "sf", count: 3},
      ], 
    })
  }
  

  render() {
    return (
      <div className="App">
        <Person name="lb" count="20" />
        <Person name="sq" count="30" ></Person>
        <Person name="as" count="40" >孩子</Person>

        <button onClick={this.switchData}>按钮</button>

        {/* 点击事件中传参数的两种方法 */}
        <button onClick={()=>this.switchData('newname')}>按钮</button>
        <button onClick={this.switchData.bind(this,'newNAme')}>按钮</button>

        <Person myclick={this.switchData.bind(this,'ssss')}
                name={this.state.persons[0].name} 
                count={this.state.persons[0].count}  />
        <Person name={this.state.persons[1].name} count={this.state.persons[1].count}  />
        <Person name={this.state.persons[2].name} count={this.state.persons[2].count}  />

        <Person />
      </div>
    );
  }
}

export default App;
