import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'

class App extends React.Component {
    render(){
        console.log(this.props)
        return (
                    <>
                        <Nav>我是来自app</Nav>
                        {/* class_12 (一种解决方法，但是不好，当为根路径时 path='/' 可以不写)  (组件返回一个组件时，叫高阶组件) */}
                        {/* <Route path='/' component = { Nav }/> */}
                        { this.props.children }
                    </>
                )
    }
}

export default App;