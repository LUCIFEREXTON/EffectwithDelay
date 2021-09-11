import "./styles.css";
import {useState, useRef, useEffect} from 'react';


const UsedelayEffect = ({show, setshow, component:Component, delay, showClass, hideClass})=>{
  const [realshow, setrealshow] = useState(true);
  const lock = useRef(false);
  useEffect(()=>{
    console.log((lock.current), show);
      if(!show && !(lock.current)){
        lock.current = true;
        setTimeout(() => {
          setrealshow(show);
          lock.current = false;
        }, delay);
      }else if(show && !(lock.current)){
        setrealshow(show);
      }else{
        setshow(false);
      }
  }, [show, setshow, delay])
  return(realshow && 
      <div className={show?showClass:hideClass}><Component/></div>
  );
}

export default UsedelayEffect;