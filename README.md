# EffectwithDelay
Created with CodeSandbox<br/>
<b>Options to pass</b><br/>
<br/><br/>
<b>show</b>: pass <i>boolean</i> value to mount and unmount component<br/><br/>
<b>setshow</b>: <i>function</i>- pass one argument a boolean value to set value of show in function<br/><br/>
<b>delay</b>: pass delay <i>(Number in ms)</i> after which component need to be unmounted after initialisation of process<br/>
              generally duration of animation is passed so that component can be unmounted just after hide effect or animation stops<br/>
<b>component</b>: pass component just as a variable name<br/><br/>
<b>showClass</b>: name of class to apply on component when component appears<br/><br/>
<b>hideClass</b>: name of class to apply on component when component disappears<br/><br/>


<code>const [show, setshow] = useState(true);</code> <br/><br/>
just a e.g. you can also make diffrent type of show variable and setshow function<br/>
 but <b>setshow</b> should be made in such way if a <i>boolean</i> value passed to it then its value can be assigned to <b>show</b><br/><br/>
 ```
 setshow(false) // show = false
 setshow(true) //  show=true
 ```
<code>const delay = 2000;</code><br/>
variable with 2s delay i.e. 2000 in ms passed as a <i>number</i><br/><br/>
  <code> <button onClick={()=>{setshow(!show)}} >Show/Hide</button></code><br/>
  just a implementation how you can switch state of hide/show<br/><br/>
  
  <code> <UsedelayEffect component={OtherComponent} show={show} setshow={setshow} delay={delay} showClass={'fade-in'} hideClass={'fade-out'}/></code>
  
  here **OtherComponent** is a component instead of `<OtherComponent/>` we have to pass it as a argument
