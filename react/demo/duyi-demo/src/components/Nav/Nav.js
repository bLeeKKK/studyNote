import React,{ Component } from "react";
import { NavLink,Route,withRouter } from 'react-router-dom'

// 导出的时候使用这个
// 变化为一个高阶组件
// const withRouter = (Component) => {
//     return () => {
//         return (<Route component = { Component }></Route>)
//     }
// }
// 简写
// const withRouter = Component => () => (<Route component = { Component }></Route>);
// 已有官方提供的 widthRouter 可以使用

class Nav extends Component {
    render () {
        return (<>
                    <div className="nav">
                        {/* <Link to="/">首页</Link>
                            <Link to="/activities">动态</Link>
                            <Link to="/topics">话题</Link>
                            <Link to="/login">登录</Link> */}
                        <span onClick = { this.jumpTo }>第一教育</span>
                        <NavLink to="/"  exact>首页</NavLink>
                        <NavLink to="/activities">动态</NavLink>
                        <NavLink to="/topics">话题</NavLink>
                        <NavLink to="/login">登录</NavLink>
                    </div> 
                </>)
    }

    jumpTo = () => {
        // 不是路由中的方法
        console.log(this.props)
    }
}

export default withRouter(Nav);
