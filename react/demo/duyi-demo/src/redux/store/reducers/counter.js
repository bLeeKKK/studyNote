import * as Types from '../actionTypes'

const initState = {
    count: 0,
}

export default (state = initState, action) => {
        // JSON.parse( JSON.stringify( obj ) ) 深度克隆(😀笑~)
    const newState = JSON.parse( JSON.stringify( state ) );

    switch ( action.type ) {
        case Types.COUNT_ADD:
            newState.count = action.value;
            return newState;
    }
    return state;
}