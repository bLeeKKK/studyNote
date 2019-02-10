//=================================================================================================
// 先安装 redux 
// 命令: npm install redux

import React from 'react';
import { render } from 'react-dom';
import TodoList from './redux/TodoList'

render(<TodoList />,window.root)





// // //=================================================================================================
// // class_13_2 (customLink)
// // 详情在 Activities 组件中
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import Wenzhang from './pages/Wenzhang'
// import './pages/nav.css'

// // 二级路由
// import App from './App'

// // 输入不存在的页面时显示的页面
// import NoMatch from './pages/NoMatch/NoMatch'

// render( <Router>
//         <App { ...{ a: "对象方式传属性~"} } >
//             <div className="content">
//                 <Switch>
//                     {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                     <Route path='/' exact={ true } component = { Home }/>
//                     <Route path='/activities' component = { Activities }/>
//                     <Route path='/topics' component = { Topics }/>
//                     <Route path='/login' component = { Login }/>
//                     <Route path='/Wenzhang/:id' component = { Wenzhang }/>

//                     {/* 当不传path时会匹配传入任意一个值 */}
//                     {/* <Route component = { NoMatch }></Route> */}

//                     {/* Redirect 重定向 */}
//                     {/* <Redirect to='/'></Redirect> */}
                    
//                     <Route path='/erro' component = { NoMatch }></Route>
//                     <Redirect to='/erro'></Redirect>
//                 </Switch>
//             </div>
//         </App>
//         </Router>, window.root);


// // //=================================================================================================
// // class_13 (customLink)
// // 详情在 Activities 组件中
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import Wenzhang from './pages/Wenzhang'
// import './pages/nav.css'

// // 二级路由
// import App from './App'

// // 输入不存在的页面时显示的页面
// import NoMatch from './pages/NoMatch/NoMatch'

// render( <Router>
//         <App { ...{ a: "对象方式传属性~"} } >
//             <div className="content">
//                 <Switch>
//                     {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                     <Route path='/' exact={ true } component = { Home }/>
//                     <Route path='/activities' component = { Activities }/>
//                     <Route path='/topics' component = { Topics }/>
//                     <Route path='/login' component = { Login }/>
//                     <Route path='/Wenzhang/:id' component = { Wenzhang }/>

//                     {/* 当不传path时会匹配传入任意一个值 */}
//                     {/* <Route component = { NoMatch }></Route> */}

//                     {/* Redirect 重定向 */}
//                     {/* <Redirect to='/'></Redirect> */}
                    
//                     <Route path='/erro' component = { NoMatch }></Route>
//                     <Redirect to='/erro'></Redirect>
//                 </Switch>
//             </div>
//         </App>
//         </Router>, window.root);



// // //=================================================================================================
// // class_12 (widthRouter)
// // 详情在 Nav 组件中
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import Wenzhang from './pages/Wenzhang'
// import './pages/nav.css'

// // 二级路由
// import App from './App'

// render( <Router>
//         <App { ...{ a: "对象方式传属性~"} } >
//             <div className="content">
//                 <Switch>
//                     {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                     <Route path='/' exact={ true } component = { Home }/>
//                     <Route path='/activities' component = { Activities }/>
//                     <Route path='/topics' component = { Topics }/>
//                     <Route path='/login' component = { Login }/>
//                     <Route path='/Wenzhang/:id' component = { Wenzhang }/>
//                     {/* Redirect 重定向 */}
//                     <Redirect to='/'></Redirect>
//                 </Switch>
//             </div>
//         </App>
//         </Router>, window.root);





// //=================================================================================================
// // // //class_11 (动态路由)
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import Wenzhang from './pages/Wenzhang'
// import './pages/nav.css'

// // 二级路由
// import App from './App'

// render( <Router>
//         <App>
//             <div className="content">
//                 <Switch>
//                     {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                     <Route path='/' exact={ true } component = { Home }/>
//                     <Route path='/activities' component = { Activities }/>
//                     <Route path='/topics' component = { Topics }/>
//                     <Route path='/login' component = { Login }/>
//                     <Route path='/Wenzhang/:id' component = { Wenzhang }/>
//                     {/* Redirect 重定向 */}
//                     <Redirect to='/'></Redirect>
//                 </Switch>
//             </div>
//         </App>
//         </Router>, window.root);






// //=================================================================================================
// // //class_10 (二级路由)
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import './pages/nav.css'

// // 二级路由
// import App from './App'

// render( <Router>
//         <App>
//             <div className="content">
//                 <Switch>
//                     {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                     <Route path='/' exact={ true } component = { Home }/>
//                     <Route path='/activities' component = { Activities }/>
//                     <Route path='/topics' component = { Topics }/>
//                     <Route path='/login' component = { Login }/>
//                     {/* Redirect 重定向 */}
//                     <Redirect to='/'></Redirect>
//                 </Switch>
//             </div>
//         </App>
//         </Router>, window.root);




// //=================================================================================================
// // //class_9 (路由)
// import React from 'react';
// import { render } from 'react-dom';

// import { BrowserRouter as Router,
//          Route,
//          Switch,    //只匹配一个路由
//          Redirect,  //重定向
//          Link,      //负责跳转
//          NavLink,   //有标识的 负责跳转
//         } from 'react-router-dom'

// // 命令：npm install react-router-dom 安装路由
// // 路由分两种 哈西路由(HashRouter) 和 浏览器路由(BrowserRouter)
// import Home from './pages/Home'
// import Activities from './pages/Activities'
// import Topics from './pages/Topics'
// import Login from './pages/Login'
// import './pages/nav.css'


// render( <Router>
//             {/* <Switch></Switch> 组件遇到一个合适的就不再向下匹配了  */}
//             <>
//                 <div className="nav">
//                     {/* <Link to="/">首页</Link>
//                         <Link to="/activities">动态</Link>
//                         <Link to="/topics">话题</Link>
//                         <Link to="/login">登录</Link> */}
//                     <NavLink to="/"  exact>首页</NavLink>
//                     <NavLink to="/activities">动态</NavLink>
//                     <NavLink to="/topics">话题</NavLink>
//                     <NavLink to="/login">登录</NavLink>
//                 </div>

//                 <div className="content">
//                     <Switch>
//                         {/* exact = { true } 默认值是true，属性严格匹配，包含关系不行 */}
//                         <Route path='/' exact={ true } component = { Home }/>
//                         <Route path='/activities' component = { Activities }/>
//                         <Route path='/topics' component = { Topics }/>
//                         <Route path='/login' component = { Login }/>
//                         {/* Redirect 重定向 */}
//                         <Redirect to='/'></Redirect>
//                     </Switch>
//                 </div>
//             </>
//         </Router>, window.root);


//=================================================================================================
// //class_8 (生命周期)
// import React from "react";
// import { render } from "react-dom";

// import LifeCycle from "./components/LifeCycle/LifeCycle";

// render( <LifeCycle />, window.root);






//=================================================================================================
// //class_7 (组件间交互)
// import React from "react";
// import { render } from "react-dom";
// import TodoWrapper from "./components/TodoWrapper/TodoWrapper";

// render(<><TodoWrapper /></>,window.root);


//=================================================================================================
// // class_6 (属性传递与校验)
// import React from "react";
// import { render } from "react-dom";

// import Person from "./components/Person/Person";


// const person = {
//   // name: "lb",
//   age: 24,
//   sex: '男',
//   salary: 100000,
// }
// render(<Person name={person.name} age={person.age} sex={person.sex} salary={person.salary}/> , document.getElementById("root"));



//=================================================================================================
// // // class_5 （受控组件和非受控组件）
// import React from "react";
// import { render } from "react-dom";

// // 受控组件
// import Control from "./components/Control/Control";

// // 受控组件
// import UnControl from "./components/UnControl/UnControl";


// render(<><Control /> <UnControl /></>,window.root);





//=================================================================================================
// // // class_4 （组件化）
// // import React,{Fragment} from "react";
// import React from "react";
// import { render } from "react-dom";
// // 函数组件
// import Taglist from "./components/Taglist/Taglist";
// // class 类组件
// import Todolist from "./components/Todolist/Todolist";

// const topList = [
//     {
//       id: 0,
//       title: '标题1',
//       new: true,
//       hot: '46人'
//     },
//     {
//       id: 1,
//       title: '标题2',
//       new: true,
//       hot: '44人'
//     },
//     {
//       id: 2,
//       title: '标题3',
//       new: false,
//       hot: '35人'
//     },
//     {
//       id: 3,
//       title: '标题4',
//       new: false,
//       hot: '33人'
//     },
//     {
//       id: 4,
//       title: '标题5',
//       new: true,
//       hot: '32人'
//     },
//     {
//       id: 5,
//       title: '标题6',
//       new: false,
//       hot: '25人'
//     },
//     {
//       id: 6,
//       title: '标题7',
//       new: true,
//       hot: '24人'
//     },
//     {
//       id: 7,
//       title: '标题8',
//       new: false,
//       hot: '24人'
//     },
//     {
//       id: 8,
//       title: '标题9',
//       new: false,
//       hot: '22人'
//     },
//     {
//       id: 9,
//       title: '标题10',
//       new: false,
//       hot: '20人'
//     },
//     {
//       id: 10,
//       title: '标题11',
//       new: true,
//       hot: '20人'
//     }
//   ]

// //   属性传参数
// render(<><Taglist topList={topList}/> <Todolist /></>,window.root);



//=================================================================================================
// // class_3 (数组渲染，if渲染，html渲染)
// // import React,{Fragment} from "react";
// import React from "react";
// import { render } from "react-dom";
// import './index.css'

// // 在jsp语法中必须被某个元素包裹 可以使用 <Fragment></Fragment> 或者 <></> 来就行包裹
// // 

// const topList = [
//     {
//       id: 0,
//       title: '标题1',
//       new: true,
//       hot: '46人'
//     },
//     {
//       id: 1,
//       title: '标题2',
//       new: true,
//       hot: '44人'
//     },
//     {
//       id: 2,
//       title: '标题3',
//       new: false,
//       hot: '35人'
//     },
//     {
//       id: 3,
//       title: '标题4',
//       new: false,
//       hot: '33人'
//     },
//     {
//       id: 4,
//       title: '标题5',
//       new: true,
//       hot: '32人'
//     },
//     {
//       id: 5,
//       title: '标题6',
//       new: false,
//       hot: '25人'
//     },
//     {
//       id: 6,
//       title: '标题7',
//       new: true,
//       hot: '24人'
//     },
//     {
//       id: 7,
//       title: '标题8',
//       new: false,
//       hot: '24人'
//     },
//     {
//       id: 8,
//       title: '标题9',
//       new: false,
//       hot: '22人'
//     },
//     {
//       id: 9,
//       title: '标题10',
//       new: false,
//       hot: '20人'
//     },
//     {
//       id: 10,
//       title: '标题11',
//       new: true,
//       hot: '20人'
//     }
//   ]

// let element = (
//     <div className="wrapper">
//         <div className="search-title-box">
//         <h5 className="search-title">搜索热点</h5>
//         <span className="refresh">换一换</span>
//         </div>
//         <ul className="top-list-container">

//             {topList.map((ele,index)=>{
//                 let styleBg = {};
//                 switch (index){
//                     case 0:
//                         styleBg.backgroundColor = '#f00';
//                         break;
//                     case 1:
//                         styleBg.backgroundColor = '#f0f';
//                         break;
//                     case 2:
//                         styleBg.backgroundColor = '#0ff';
//                         break;
//                      default:
//                         break;
//                 }
//                 return  (<li    className="top-list"
//                                 // 最好不要用 index 作为 key 值这样有可能造成多余的dom操作
//                                 key={ele.id}>
//                             <div className="top-title">
//                             <span   className="hot-index"
//                                     style={styleBg}>{++index}</span>
//                             <a className="topic-title">{ele.title}</a>
//                             {
//                                 ele.new?<span className="topic-new">新</span>:null
//                             }
//                             </div>
//                                 <div className="hot-degree">
//                                 <span>{ele.hot}</span>
//                             </div>
//                         </li>)
//             })}
            
//         </ul>
//   </div>
// );

// render(element,document.getElementById("root"))


// // 不建议使用这个方法插入 html 可能会出现 xss 攻击（插入标签就行攻击）
// // let str = "<span>走走走</span>"
// // let div = <div dangerouslySetInnerHTML={{__html:str}}></div>
// // render(div,document.getElementById("root"))



//=================================================================================================
// class_2(react 自己模拟完成jsx语法的函数) 
// 自己实现 React.createElement 和 render 函数
// const React = {
//     createElement (type,props,...children){
//         return {
//             type,
//             props,
//             children
//         }
//     }
// };

// let div = <h1 id="h1Box">Hello World<span>我是span</span></h1>;

// console.log(div)

// const render = (vNode,container)=>{
//     if(typeof vNode === "string"){
//         const text = document.createTextNode(vNode);
//         return container.appendChild(text);
//     }

//     const {type,props,children} = vNode;

//     const ele = document.createElement(type);

//     for(let key in props){
//         if(key.startsWith('__')){break;}
//         ele.setAttribute(key,props[key]);
//     }

//     children.forEach((item,index)=>{
//         render(item,ele)
//     })

//     container.appendChild(ele);
// }

// render(div,window.root)



//=================================================================================================
// class_1(react 的基础知识)
// // 注意：引入的 React 一定要叫 React
// import React from 'react';
// // import { render } from 'react-dom';
// import { render } from 'react-dom';

// // PWA (开发移动app时，将网页存储在浏览器)
// // import * as serviceWorker from './serviceWorker';

// // 在js中使用 jsx 语法 必须借助 React;
// // jsx 的语法会被 babel 转化为 React.createElement(type,props,children....) 这样的函数,这个函数返回一个 vNode
// //（注：所以引入的React名字必须为React）；
// let h1 = <h1>Hello World</h1>;

// // render( 虚拟dom, 插入的dom)
// render( h1 , document.getElementById('root'));
