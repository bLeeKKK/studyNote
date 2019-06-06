import React from "react";
import './Todolist.css'

class Todolist extends React.Component {

    state = {
        inpVal: '',
        lisArr: [1, 2, 3, 4],
        count: 0,
    }

    handlChange = (event) => {
        this.setState({
            inpVal: event.target.value
        })
        // console.log(event.target.value)
    }

    addMison = (event) => {
        if (!this.state.inpVal) {
            return;
        }
        this.setState({
            lisArr: [...this.state.lisArr, this.state.inpVal]
        })
        this.state.inpVal = ''
    }

    handlDel = (index) => {
        let lisArr = this.state.lisArr;
        lisArr.splice(index, 1);
        this.setState({
            lisArr,
        })
    }

    addCount = () => {
        //    当 react 中执行时候回进行批量更新 （react更新数据会有个 paddingState 当这次函数事件更新完成后会将 paddingState 赋值到State中）
        //    this.setState({
        //        count: this.state.count + 4,
        //    }) 
        //    this.setState({
        //        count: this.state.count + 5,
        //    }) 

        // 可以使用
        this.setState(() => {
            return {
                count: this.state.count + 5,
            }
        })
        this.setState(() => {
            return {
                count: this.state.count + 2,
            }
        })
    }

    render(h) {
        return (<>
            <input type="text" onChange={this.handlChange} value={this.state.inpVal} />
            <button onClick={this.addMison}>添加</button>
            <ul>
                {
                    this.state.lisArr.map((item, index) => <li key={item + " " + index}>
                        {item}
                        <button onClick={() => this.handlDel(index)}>X</button>
                    </li>)
                }
            </ul>
            <span>
                {this.state.count}
            </span>
            <button onClick={this.addCount}>添加</button>
        </>)
    }
}

export default Todolist;