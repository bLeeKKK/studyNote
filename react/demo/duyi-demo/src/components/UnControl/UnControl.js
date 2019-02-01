import React from "react";

class UnControl extends React.Component{
    state = {
        list: [],
    }

    // 16.3 版本后可以使用函数形式来获取dom
    // taskA = React.createRef()
    // taskB = React.createRef()

    addTesk = (e) =>{
        // 16.3 版本后可以使用函数形式来获取dom, 在 current 中获取dom。
        // console.log( this[e.target.name].current.value )


        
        
        // console.log( this[e.target.name].value )
        if(!this[e.target.name].value){
            return;
        }
        this.setState({
            list: [...this.state.list,e.target.name + "：" + this[e.target.name].value],
        })
        this[e.target.name].value = ''
    }

    render(){
        return (
            <>
                <div>
                    taskA:
                    {/* 
                        16.3 版本后可以使用函数形式来获取dom, 设置：this.taskA 就行了。
                        <input name="taskA" ref={(dom)=>{ this.taskA }}/>
                    */}
                    <input name="taskA" ref={(dom)=>{this.taskA = dom}}/>
                    <button name="taskA" onClick={ this.addTesk }>
                        添加任务A
                    </button>
                </div>
                <div>
                    taskB:
                    <input name="taskB" ref={(dom)=>{this.taskB = dom}}/>
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

export default UnControl;