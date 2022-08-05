import ExpensData from "./ExpensData";

function Expensitem(props){

return(
<div className=" flex  justify-between   bg-slate-600 m-10 font-bold p-4">
 <div className=" bg-slate-500 p-3"><ExpensData data={props.data}/></div>
 <div><h2 className=" text-white ">{props.title}</h2></div>


<div className=" bg-red-600 text-right p-2">${props.amounth}</div>
</div>
)
    
}
export default Expensitem;