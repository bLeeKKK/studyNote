import React from 'react';
import store from './store';

class c extends React.Component {

    state = store.getState()

    // 生命周期中初始化 store 更改时候的回调函数
    componentDidMount () {
        store.subscribe(this.handStoreChange)
    }

    handleChange = (e) => {
        const action = {
            type: 'CHANGE_INPUT_VAL',
            value: e.target.value
        }

        store.dispatch( action );
    }

    handStoreChange = () => {
        this.setState(store.getState());
    }

    render () {
        return (<>
                    <div>
                        <input onChange={ this.handleChange } value = { this.state.inpVal } />
                        <button>添加</button>
                    </div>
                    <ul>
                        {
                            this.state.list.map(( item,index )=>{
                                return (<li key={index + '_'}>
                                            { item }
                                        </li>)
                            })
                        }
                    </ul>
                </>)
    }
}

export default c;