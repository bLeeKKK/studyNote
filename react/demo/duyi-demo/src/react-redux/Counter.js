import React, { Component } from 'react';
// import store from './store';

// import * as Types from './store/actionTypes'

import * as Actions from './store/actionCreators'
import counter from './store/reducers/counter';

// 使用 react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Counter extends Component {

    // state = {
    //     // count: store.getState().count
    //     count: store.getState().counter.count
    // }

    handleAdd = () => {
        // const action = Actions.getTodoAddCountAction( this.state.count + 3 );

        // store.dispatch( action );

        //例1：
        // this.props.add( this.props.count + 3 )
        
        // 例2：
        this.props.getTodoAddCountAction( this.props.count + 3 )
    }

    componentDidMount () {
        // store.subscribe( this.handStoreChange )
    }

    handStoreChange = () => {
        // this.setState({
        //     // count: store.getState().count
        //     count: store.getState().counter.count
        // })
    }

    render () {
        return (<>
                    计数：{ this.props.count }
                    <button onClick={ this.handleAdd }>添加</button>
                </>)
    }
}

// 不使用 react-redux 
// export default Counter;

// 使用 react-redux 
const mapStateToProps = (state)=> ({
    count: state.counter.count
})

// 例1：
// const mapDispathToProps = (dispatch)=> ({
//     add: (val) => {
//         dispatch(Actions.getTodoAddCountAction(val))
//     }
// })

// 例2：
const mapDispathToProps = (dispatch)=> bindActionCreators(Actions,dispatch)

// export default connect(mapStateToProps,mapDispathToProps)(Counter);

//例3：
// 直接传 Actions 也是可以的
export default connect(mapStateToProps,Actions)(Counter);