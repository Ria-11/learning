import {useState} from "react";

import "./App.css";

export default  function App(){
  const [count, setCount] = useState(0);
  const [Countoset , setcounttoset] = useState(0);
   /* const incrementHandler = (numVal) => {

      setCount((prev) => prev +numVal + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);

    };
    */

  return(
    <>
    <h1> Counter  is {count}</h1>
   <div className="card">
    count is {count}
   </div>
   <div>
    <button 
    onclick={ () => setCount(count + 1)}
    style={{margin : "0 5px"}}>Increase</button>
    
    <button 
    onclick={() => setCount((count) =>Math.max(count - 1, 0))}
    style={{margin : "0 5px"}}>Decrease</button>
   <button 
    onclick={() => setCount((count) =>0)}
    style={{margin : "0 5px"}}>Reset</button>


   </div>
   <div style={{margin :"20px 0"}}>
    <input  style={{ width :"100px",  
      border: "1px solid #ccc" ,
      margin :"0 5px",
      padding :"0.6em 1.2em"}}

      value={Countoset}
      onChange={(e) => setcounttoset(parseInt(e.target.value) || 0)}

      type="text" />
     <button style={{margin : "0 5px"}} 
     onClick={() => {
      setCount(Number(Countoset))
      setcounttoset(0);

     }}
     >Set to {Countoset}</button>
   </div>
    
    </>
  );
}