import React from 'react';
import store from './store';
import * as actions from './actions';
import { Provider } from 'react-redux'  
var count  =0;
function App() {
  store.subscribe(()=>{
    console.log("store changed",store.getState())
  })


const AddBugs=()=>{
  console.log("Bug added")
  store.dispatch(actions.bugAdded("hello world",true));
}
const RemoveBugs=()=>{
  
  count +=1;
  console.log(count)
  store.dispatch(actions.bugRemoved(count))
}


  return (
    <Provider store={store}>  
    <div className="App">
      <button onClick={AddBugs}>Add Bug</button>
      <button style={{color:"red"}} onClick={RemoveBugs}>Remove Bugs</button>
<h1>Hello World</h1>
    </div>
    </Provider>
  );
}

export default App;
// "Hello world"