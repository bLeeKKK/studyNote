import React from 'react';
import { Consumer } from './context'

class TodoList extends React.Component {
    render(){
        const { listArr,delTask } = this.props;
        return (<>
                    
                    <Consumer>
                        {
                            ({ val })=>{
                                return (
                                    <>
                                        <ul>
                                            {
                                                listArr.map((ele,index)=>{
                                                    return (<li key={ele+'-'+index}>
                                                                    {ele}
                                                                    <button onClick={ () => delTask(index) }>
                                                                        X
                                                                    </button>
                                                                </li>)
                                                })
                                            }
                                        </ul>
                                        <p>{val}</p>
                                    </>
                                )
                            }
                        }
                    </Consumer>
                </>)
    }
}

export default TodoList;