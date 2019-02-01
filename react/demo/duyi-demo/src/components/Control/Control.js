import React from "react";

class Control extends React.Component{
    state = {
        list: [],
        taskA: '',
        taskB: '',
    }

    addTesk = (e) =>{
        if(!this.state[e.target.name]){
            return;
        }
        this.setState({
            list: [...this.state.list,e.target.name + "：" + this.state[e.target.name]],
            [e.target.name]: ''
        })
    }

    handleTask = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return (
            <>
                <div>
                    taskA:
                    <input name="taskA" onChange={ this.handleTask } value={ this.state.taskA } type="text"/>
                    <button name="taskA" onClick={ this.addTesk }>
                        添加任务A
                    </button>
                </div>
                <div>
                    taskB:
                    <input name="taskB" onChange={ this.handleTask } value={ this.state.taskB } type="text"/>
                    <button name="taskB" onClick={ this.addTesk }>
                        添加任务B
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((ele,index)=>{
                            return (<li key={ele+"-"+index}>{ele}</li>)
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Control;