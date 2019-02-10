import React,{ Component } from "react";
import { NavLink,Route,withRouter } from 'react-router-dom'
import MuneLink from "../../pages/MuneLink/MuneLink";

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
                        <span onClick = { this.jumpTo }>第一教育</span>

                        {/* <Link to="/">首页</Link>
                            <Link to="/activities">动态</Link>
                            <Link to="/topics">话题</Link>
                            <Link to="/login">登录</Link> */}
                        
                        <MuneLink to="/"  exact>首页</MuneLink>
                        <MuneLink to="/activities">动态</MuneLink>
                        <MuneLink to="/topics">话题</MuneLink>
                        <MuneLink to="/login">登录</MuneLink>
                    </div> 
                </>)
    }

    jumpTo = () => {
        // 不是路由中的方法
        console.log(this.props)
    }
}

export default withRouter(Nav);
