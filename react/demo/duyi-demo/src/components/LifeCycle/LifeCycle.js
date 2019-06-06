import React from "react";
import ChildLifeCycle from "./ChildLifeCycle";
import AnotherChild from "./AnotherChild";

// 在 16.3 以后官方移除了，componentWillMount、componentWillReceiveProps、componentWillUpdate 这3个生命 Will 周期函数

class LifeCycle extends React.Component {
    static defaultProps = {}
    static propTypes = {}
    addCount = ()=>{
        this.setState({
            count: ++this.state.count,
        })
    }
    cgShow = ()=>{
        this.setState({
            showChild: !this.state.showChild,
        })
    }

    constructor (){
        console.log('1.constructor');
        super();
        this.state = {
            count: 0,
            showChild: true,
        };
    }

    componentWillMount () {
        // 组件将要创建了
        // 官方不建议在这个方法中使用 ajax 请求。已经在 16.3 中移除了这个方法（可以使用 constructor 替代）
        console.log('1.componentWillMount 组件将要创建了');
    }

    render(){
        // 组件渲染
        console.log('1.render 组件渲染',this);
        return (<>
                    <h1>
                        LifeCycle:
                        { this.state.count }
                    </h1>
                    <button onClick={this.addCount}>添加</button>
                    <br/>
                    <button onClick={this.cgShow}>切换</button>                    {
                        this.state.showChild ? 
                            <ChildLifeCycle n={ this.state.count }/>  : null
                    }   
                    <hr/>
                    <p>最新的生命周期</p>
                    <AnotherChild n={ this.state.count }/>
                </>)
    }

    componentDidMount () {
        // 组件将创建完成了
        // ajax setState()
        // 总结：在这里发送 ajax 请求是最好的
        console.log('1.componentDidMount 组件将创建完成了' );
    }

    shouldComponentUpdate (nextProps, nextState) {
        // 组件是否继续数据更新
        // 性能优化
        // 使用 nextProps （将要改变属性的值）, nextState （将要改变状态的值）来判断数据是否有改变
        console.log('1.shouldComponentUpdate 组件是否继续数据更新',nextProps, nextState);
        return true;  //进行更新
        return false; //不进行更新
    }

    componentWillUpdate () {
        // 组件数据将要更新了
        // 不能设置状态 setState()
        console.log('1.componentWillUpdate 组件数据将要更新了' );
    }

    componentDidUpdate () {
        // 组件数据更新完成
        // 不能设置状态 setState()
        console.log('1.componentDidUpdate 组件数据更新' );
    }
}

export default LifeCycle;
