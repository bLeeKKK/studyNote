import { createStore } from 'redux';
// import reducer from './reducer'

// 拆分 reducer 为不同模块
import reducer from './reducers'

const store = createStore(
                            reducer,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        );

export default store;