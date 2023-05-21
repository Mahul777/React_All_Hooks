
import './App.css'; //it  is a global css 
import MyComponent from './UseCallBack/MyComponent';
//import ContextTutorial from './UseContext/ContextTutorial';
//import Memo from './UseMemo/Memo';

//import RefTutorial from './UseRef/RefTutorial';
//import EffectTutorial from './UseEffect/EffectTutorial';
//import StateTutorial from "./UseState/StateTutorial";
//import ReducerTutorial from './UseReducer/ReducerTutorial'; 

function App() {
  //this App return JSX but look like html but actually it is JSX 
  //in curly braces {} written some variable is Javascript is used 
  //In JSX we can use className but in HTML we use only class  and  at end we exporting the App 
  return (
    <div className="App">
     <MyComponent/>
     
      
    </div>
  );
}

export default App;
