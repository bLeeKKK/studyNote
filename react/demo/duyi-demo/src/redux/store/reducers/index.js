import { combineReducers } from 'redux'
import todoList from './todoList';
import counter from './counter';

// 拆分 reducer
export default combineReducers({
    todoList,
    counter,
})