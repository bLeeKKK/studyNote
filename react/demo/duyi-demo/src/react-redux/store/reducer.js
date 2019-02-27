import * as Types from './actionTypes'

const initState = {
    inpVal: "",
    list: [],

    count: 0,
}

export default (state = initState, action) => {
        // JSON.parse( JSON.stringify( obj ) ) 深度克隆(😀笑~)
    const newState = JSON.parse( JSON.stringify( state ) );

    switch ( action.type ) {
        case Types.CHANGE_INPUT_VAL:
            newState.inpVal = action.value;
            return newState;

        case Types.CHANGE_ADD_LIST:
            newState.list.push(action.value);
            return newState;

        case Types.CHANGE_DEL_LIST:
            newState.list.splice( action.value,1);
            return newState;
            
        case Types.COUNT_ADD:
            newState.count = action.value;
            return newState;
    }
    return state;
}