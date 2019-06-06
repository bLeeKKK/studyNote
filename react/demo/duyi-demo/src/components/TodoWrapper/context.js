import React from 'react';

// 跨组件传值
// React.createContext() ==> obj 中有 { Provider (提供者),Consumer (使用者) };

let { Provider, Consumer } = React.createContext();

export {
    Provider,
    Consumer,
}