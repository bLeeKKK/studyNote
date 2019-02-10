const initState = {
    inpVal: "啊啊啊",
    list: [1,2,3],
}

export default (state = initState, action) => {
    switch ( action.type ) {
        case 'CHANGE_INPUT_VAL':
            // JSON.parse( JSON.stringify( obj ) ) 深度克隆(😀笑~)
            const newState = JSON.parse( JSON.stringify( state ) );
            newState.inpVal = action.value;
            return newState;
    }

    return state;
}