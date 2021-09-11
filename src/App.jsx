import "./styles.css";
import {useState} from 'react';
import OtherComponent from './OtherComponent'
import UsedelayEffect from './UsedelayEffect';
export default function App() {
  const [show, setshow] = useState(true);
  const delay = 2000;
  return (    
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={()=>{setshow(!show)}} >Show/Hide</button>
      <UsedelayEffect component={OtherComponent} show={show} setshow={setshow} delay={delay} showClass={'fade-in'} hideClass={'fade-out'}/>
    </div>
  );
}

