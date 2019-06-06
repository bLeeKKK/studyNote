import React from "react";

// 如果希望校验需要就行安装：
// npm install --save prop-types
import PropTypes from "prop-types";

class Person extends React.Component {
    // 设置默认属性
    static defaultProps = {
        name: "默认姓名"
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.oneOf(["男", "女"]),
        salary(props, propsName, componentName) {
            // props：表示所有组件 this.props
            // propsName：属性名 例子：salary
            // componentName：组件名称 
            if (props[propsName] < 10000) {
                return new Error(
                    `${componentName}组件传递过来的${propsName}属性的值太小了，应该大于10000`
                )
            }
        },
    }

    constructor() {
        super()
        console.log(this)
    }

    render() {
        // 属性已经放到的 this 的 props 中了;
        // console.log(this.props)
        console.log(this)
        let { name, age, salary, sex } = this.props
        return (<>
            <p>姓名：{name}</p>
            <p>年龄：{age}</p>
            <p>性别：{sex}</p>
            <p>月薪：{salary} k/月</p>
        </>)
    }
}

export default Person;