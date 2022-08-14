import { useState } from "react";
import ExpensData from "./ExpensData";

const Expensitem=(props)=>{
const[title,SETtitle]=useState(props.title)
const clickhandel=()=>{
SETtitle("updat!!")
console.log(title)
}
return(
<div className= " flex  bg-slate-600 m-10 font-bold p-4">
 <div className=" bg-slate-500 p-3"><ExpensData data={props.data}/></div>
 <div><h2 className=" text-white ">{title}</h2></div>


<div className=" flex gap-2 bg-red-300 p-4 absolute  right-9">${props.amounth}
<div className=" bg-red-800">  <button onClick={clickhandel}>changg</button>  </div>

 </div>

</div>
)
    
}
export default Expensitem;