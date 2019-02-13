import React, { Component } from 'react';
import store from './store';

// import * as Types from './store/actionTypes'

import * as Actions from './store/actionCreators'
import counter from './store/reducers/counter';

class Counter extends Component {

    state = {
        // count: store.getState().count
        count: store.getState().counter.count
    }

    handleAdd = () => {
        const action = Actions.getTodoAddCountAction( this.state.count + 3 );

        store.dispatch( action );
    }

    componentDidMount () {
        store.subscribe( this.handStoreChange )
    }

    handStoreChange = () => {
        this.setState({
            // count: store.getState().count
            count: store.getState().counter.count
        })
    }

    render () {
        return (<>
                    计数：{ this.state.count }
                    <button onClick={ this.handleAdd }>添加</button>
                </>)
    }
}

export default Counter;