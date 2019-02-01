import React from 'react';
import TodoItem from './TodoItem'

class TodoWrapper extends React.Component {
    render(){
        return (
            <>
                <TodoItem />
                {/* <TodoList /> */}
            </>
        )
    }
}

export default TodoWrapper;