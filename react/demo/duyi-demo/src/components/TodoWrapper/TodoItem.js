import React from 'react';
import TodoList from './TodoList'

// 跨组件传值
import { Provider } from './context'


class TodoItem extends React.Component {
    state = {
        listArr: [],
    }

    inputDom = React.createRef()

    handleAdd = () => {
        if (!this.inputDom.current.value) {
            return;
        }
        this.setState({
            listArr: [...this.state.listArr, this.inputDom.current.value],
        });
        this.inputDom.current.value = '';
    }

    // 跨组件传值
    // 跨组件传值使用可以使用 context.js 中的内容
    delTask = (index) => {
        let arr = [...this.state.listArr];
        arr.splice(index, 1)
        this.setState({
            listArr: arr
        })
    }

    render() {
        return (
            <>
                任务：<input ref={this.inputDom} />
                <button onClick={this.handleAdd}>
                    添加
                </button>
                <Provider value={{ val: this.state.listArr }}>

                    <TodoList delTask={this.delTask} listArr={this.state.listArr} />
                </Provider>

            </>

        )
    }
}

export default TodoItem;