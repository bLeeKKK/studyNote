import React from "react";
const person = ( props )=>{
    return (
        <div>
            <p>你好，我是{props.name}我有{props.count}</p>
            <p>
                {props.children}
            </p>
            <p onClick={props.myclick}>改变</p>
        </div>
    )
};
export default person;