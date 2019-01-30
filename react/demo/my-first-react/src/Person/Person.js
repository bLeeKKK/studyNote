import React from "react";
import "./Person.css";
const person = ( props )=>{
    // props 可以为任何名字
    return (
        <div className="Person">
            <p onClick={props.myClick}>{props.name?props.name:"默认"}的Person组件 第{props.count?props.count:"默认"}个</p>
            <p>
                {props.children}
            </p>
            <input onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
};
export default person;