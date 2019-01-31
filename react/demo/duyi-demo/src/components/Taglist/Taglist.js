import React from "react";
import './Taglist.css'

// 函数组件：无状态组件，没有this，没有生命周期  没法处理很复杂的逻辑 （16.7后的react版本是有的）
// 它只有一个东西属性 既：props

export default function(props){
    console.log(this)
    return (
        <div className="wrapper">
            <div className="search-title-box">
            <h5 className="search-title">搜索热点</h5>
            <span className="refresh">换一换</span>
            </div>
            <ul className="top-list-container">
    
                {props.topList.map((ele,index)=>{
                    let styleBg = {};
                    switch (index){
                        case 0:
                            styleBg.backgroundColor = '#f00';
                            break;
                        case 1:
                            styleBg.backgroundColor = '#f0f';
                            break;
                        case 2:
                            styleBg.backgroundColor = '#0ff';
                            break;
                         default:
                            break;
                    }
                    return  (<li    className="top-list"
                                    // 最好不要用 index 作为 key 值这样有可能造成多余的dom操作
                                    key={ele.id}>
                                <div className="top-title">
                                <span   className="hot-index"
                                        style={styleBg}>{++index}</span>
                                <a className="topic-title">{ele.title}</a>
                                {
                                    ele.new?<span className="topic-new">新</span>:null
                                }
                                </div>
                                    <div className="hot-degree">
                                    <span>{ele.hot}</span>
                                </div>
                            </li>)
                })}
                
            </ul>
      </div>
    );
}



// 不建议使用这个方法插入 html 可能会出现 xss 攻击（插入标签就行攻击）
// let str = "<span>走走走</span>"
// let div = <div dangerouslySetInnerHTML={{__html:str}}></div>
// render(div,document.getElementById("root"))