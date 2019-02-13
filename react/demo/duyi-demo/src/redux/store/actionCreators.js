import * as Types from './actionTypes';

export const getTodoChangeInputValAction = (value) => {
    return {
        type: Types.CHANGE_INPUT_VAL,
        value,
    }
}

export const getTodoAddTodoItemAction = (value) => {
    return {
        type: Types.CHANGE_ADD_LIST,
        value,
    }
}

export const getTodoAddCountAction = (value) => {
    return {
        type: Types.COUNT_ADD,
        value,
    }
}