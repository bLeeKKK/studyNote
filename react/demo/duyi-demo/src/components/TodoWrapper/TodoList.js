import React from 'react';
import { Consumer } from './context'

class TodoList extends React.Component {
    render() {
        const { listArr, delTask } = this.props;
        return (<>

            <ul>
                {
                    listArr.map((ele, index) => {
                        return (<li key={ele + '-' + index}>
                            {ele}
                            <button onClick={() => delTask(index)}>
                                X
                                                </button>
                        </li>)
                    })
                }
            </ul>
            <Consumer>
                {
                    ({ val }) => {
                        return (
                            <p>{val}</p>
                        )
                    }
                }
            </Consumer>
        </>)
    }
}

export default TodoList;