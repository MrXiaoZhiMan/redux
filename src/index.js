import React from 'react';
import ReactDOM from 'react-dom/client';
// 'redux-devtools-extension'监控redux的包
import { composeWithDevTools} from "redux-devtools-extension"
import { legacy_createStore } from 'redux'
import { Provider } from "react-redux"
// import createSagaMiddleware from 'redux-saga'
import App from './App';
import { rootReducer } from './reducers';
// import { watchgaddAsync } from './sagas';
//创建saga中间件:
// const sagaMiddleware=createSagaMiddleware();

// 创建全局store
const store=legacy_createStore(rootReducer,composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
   </Provider>
);


