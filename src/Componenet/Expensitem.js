function Expensitem(props){
const month=props.data.toLocaleString('en-us',{month:'long'});
const day=props.data.toLocaleString('en-us',{ day:'2-digit'});
const year=props.data.getFullYear();
return(
<div className=" flex  justify-between       bg-slate-600 m-10  font-bold p-4">
<div>
    <div>{month }</div>
    <div>{year}</div>
    <div>{day}</div>
</div>
<h2 className=" text-white ">{props.title}</h2>
<div className=" bg-red-600 text-right p-2">${props.amounth}</div>
</div>
)
    
}
export default Expensitem;