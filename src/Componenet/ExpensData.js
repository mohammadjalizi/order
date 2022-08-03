function ExpensData(props){
    const month=props.data.toLocaleString('en-us',{month:'long'});
    const day=props.data.toLocaleString('en-us',{ day:'2-digit'});
    const year=props.data.getFullYear();
    return(
<> 
        <div>{month }</div>
        <div>{year}</div>
        <div>{day}</div>
        </>
    )

}
export default ExpensData;