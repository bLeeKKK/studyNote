import React from 'react';
import {Route} from 'react-router-dom';

const MuneLink = ({ to,...props }) => {
    // return (<Route path={to} render={(p)=>{
    //             return (<span onClick={ ()=>{p.history.push(to) }}>
    //                         { props.children }
    //                     </span>)
    //         }}></Route>)

    // render渲染只能渲染当前路径，这里使用children渲染
    return (<Route path={to} {...props} children={(p)=>{
                return (<span   onClick={ ()=>{p.history.push(to) }}
                                className={ p.match ? 'active' : '' }>
                            { props.children }
                        </span>)
            }}></Route>)
}

export default MuneLink;