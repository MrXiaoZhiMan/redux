// import { combineReducers } from "redux";
// import {counter} from "./counter"
// export const rootReducer=combineReducers({
//     // rootReducer函数的作用就是逐个遍历reducer将多个reducer返回的
//     // 多个state合并成一个state  是基于combineReducers这个
//     // 方法实现的这个方法就是 遍历reducer函数或者说和并reducer函数

//     counter
//     // 合并reducer的原因是在创建store的时候只能有一个reducer函数
// })
import { combineReducers } from "redux";
import { counter } from "./counter";
export const rootReducer=combineReducers({
    counter
})