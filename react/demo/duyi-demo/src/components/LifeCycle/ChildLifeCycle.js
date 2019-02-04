import React from "react";

class ChildLifeCycle extends React.Component {
    render(){
        // 组件渲染
        console.log('2.render 组件渲染');
        return (<>来自父：{ this.props.n }</>)
    }

    componentWillReceiveProps ( nextProps ) {
        // 将要更新属性
        // 不建议使用这个进行ajax 在16.3 以后被移除
        // 子组件中的 componentWillReceiveProps 第一次不执行，而在 16.3中代替这个函数的 static getDerivedStateFromProps(){} 的周期函数会执行
        console.log("2. componentWillReceiveProps 将要更新属性")
    }

    shouldComponentUpdate (nextProps, nextState) {
        // 组件是否继续数据更新
        console.log('2.shouldComponentUpdate 组件是否继续数据更新',nextProps, nextState);
        return true
    }

    componentWillUpdate () {
        // 组件数据将要更新了
        console.log('2.componentWillUpdate 组件数据将要更新了' );
    }

    componentDidUpdate () {
        // 组件数据更新完成
        console.log('2.componentDidUpdate 组件数据更新' );
    }

    componentWillUnmount () {
        // 组件将要被移除
        console.log('2.componentWillUnmount 组件将要被移除' );
    }
}

export default ChildLifeCycle;