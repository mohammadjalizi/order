import Expensitem from "./Expensitem"

function Expenses(props){
return (
<div className=" bg-black m-10">

<Expensitem
 title={props.items[0].title} 
 amounth={props.items[0].amounth} 
 data={props.items[0].data}/>
<Expensitem
 title={props.items[1].title} 
 amounth={props.items[1].amounth} 
 data={props.items[1].data}/>
<Expensitem
 title={props.items[2].title} 
 amounth={props.items[2].amounth} 
 data={props.items[2].data}/>


</div>



)


}
export default Expenses;