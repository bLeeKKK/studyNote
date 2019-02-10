import React from 'react';

// 二级路由
import SeconedNav from './SeconedNav/SeconedNav'
import { NavLink,Switch,Route,Redirect,Prompt } from 'react-router-dom';
import Recommended from './SeconedNav/Recommended'
import All from './SeconedNav/All';
import Articles from './SeconedNav/Articles';
import Pins from './SeconedNav/Pins';

class Activities extends React.Component {
    render () {
        return (
                <>
                    {/* class_13 (customLink) */}
                    {/* <Prompt message="要离开吗？"/> */}
                    <Prompt message="要离开吗？"/> 
                    <div>Activities <br/>
                        <NavLink to='/activities/recommended'>推荐</NavLink>
                        <NavLink to='/activities/all'>综合</NavLink>
                        <NavLink to='/activities/articles'>文章</NavLink>
                        <NavLink to='/activities/pins'>沸点</NavLink>
                        <Switch>
                            <Route path='/activities/recommended' exact={ true } component = { Recommended }/>
                            <Route path='/activities/all' component = { All }/>
                            <Route path='/activities/articles' component = { Articles }/>
                            <Route path='/activities/pins' component = { Pins }/>
                            <Redirect to='/activities/recommended'></Redirect>
                        </Switch>
                    </div>
                </>)
    }
}

export default Activities;