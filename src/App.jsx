// import { connect } from "react-redux";
// import {add,sub} from "./actions"


// const App=(props)=>{
//   let {counter,add,sub}=props
//   return (
//     <div>
//       <h3>App</h3>
//       <h3>{counter.count}</h3>
//       <button onClick={add}>+</button>
//       <button onClick={sub}>-</button>
//     </div>
//   );
// }
// const mapStateToProps=(state)=>{
//   console.log(state,"state");
//   // log打印出来的state是下面的
// //   {counter: {…}}
// // counter: {count: 0}

//   return {
//     counter:state.counter
//   }
// }
// export default connect(mapStateToProps,{add,sub})(App);
import {connect} from "react-redux";
import {add,sub} from "./actions"
 const App = (props)=>{
  let {counter,add,sub} = props
  return (
    <div>
      <h3>{counter.count}</h3>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    counter:state.counter
  }
}
export default connect(mapStateToProps,{add,sub})(App)