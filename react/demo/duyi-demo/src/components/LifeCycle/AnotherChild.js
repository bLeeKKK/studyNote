import React from "react";

// 最新版本的生命周期
class AnotherChild extends React.Component {
    static defaultProps = {}
    static propTypes = {}

    addCount = () => {
        this.setState({
            count: ++this.state.count,
        })
    }

    constructor() {
        console.log('3. constructor');
        super();
        this.state = {
            count: 0
        };
    }

    static getDerivedStateFromProps(props, state) {
        // 新增的生命周期
        // 子组件中的 componentWillReceiveProps 第一次不执行，而在 16.3中代替这个函数的 static getDerivedStateFromProps(){} 的周期函数会执行
        //  props和state 为当前的状态值
        console.log('3. getDerivedStateFromProps', props, state);
        //必须有返回值
        return {
            str: "getDerivedStateFromProps 的返回值会被放到 state 状态中"
        };
    }

    render() {
        console.log('3. render')
        return (
            <div>
                另外一个组件{this.state.count} <br />
                <button onClick={this.addCount}>添加</button>
            </div>
        )
    }

    shouldComponentUpdate() {
        console.log('3. shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('3. componentDidUpdate')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 快照 (必须有返回值)
        // 必须和 componentDidMount(){} 一起出现
        console.log('3. getSnapshotBeforeUpdate 快照', prevProps, prevState);
        // 一定要有返回值
        return {
            str: "getSnapshotBeforeUpdate 快照的返回值"
        };
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        // prevProps前一个属性值 prevState前一个状态值 快照的返回值snapShot
        console.log('3. componentDidMount', prevProps, prevState, snapShot)
    }
}

export default AnotherChild