import React from 'react';
import store from './store';

import * as Types from './store/actionTypes'

import * as Actions from './store/actionCreators'

class c extends React.Component {

    // state = store.getState()
    state = store.getState().todoList

    // 生命周期中初始化 store 更改时候的回调函数
    componentDidMount () {
        store.subscribe( this.handStoreChange )
    }

    handleChange = (e) => {
        // const action = {
        //     type: Types.CHANGE_INPUT_VAL,
        //     value: e.target.value,
        // }

        const action = Actions.getTodoChangeInputValAction(e.target.value);

        store.dispatch( action );
    }

    handleAddList = () => {
        // const action = {
        //     type: Types.CHANGE_ADD_LIST,
        //     value: this.state.inpVal,
        // }

        const action = Actions.getTodoAddTodoItemAction(this.state.inpVal);

        store.dispatch( action );

        const actionInp = {
            type: Types.CHANGE_INPUT_VAL,
            value: '',
        }

        store.dispatch( actionInp );
    }

    handStoreChange = () => {
        // this.setState( store.getState() );
        this.setState( store.getState().todoList );
    }

    handleDel = (index) => {
        const action = {
            type: 'CHANGE_DEL_LIST',
            value: index,
        }

        store.dispatch( action );
    }

    render () {
        return (<>
                    <div>
                        <input onChange={ this.handleChange } value = { this.state.inpVal } />
                        <button onClick={ this.handleAddList }>添加</button>
                    </div>
                    <ul>
                        {
                            this.state.list.map(( item, index )=>{
                                return (
                                            <li key={ index + '_lu' }>
                                                { item }
                                                <button onClick={ ()=>this.handleDel(index) }>X</button>
                                            </li>
                                        )
                            })
                        }
                    </ul>
                </>)
    }
}

export default c;