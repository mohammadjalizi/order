import { data } from "autoprefixer"
import { useState, useTransition } from "react"

const EXpensform=()=>{
    const[entertitle,setentertitle]=useState("")
const[enteramounth,setamonth]=useState("")
const[enterdate,setdate]=useState("")




// const[userinput,setuserinput]= useState({
//     entertitle:'',
//     enteramounth:'',
//     enterdate:""
    
//     })
    const titilechanch=(event)=>{
setentertitle(event.target.value)
// setuserinput({
//     ...userinput,
// entertitle:event.target.value,

// })
//  setuserinput((prevState)=>{
// return{...prevState,entertitle:event.target.value}

//  })
    }
    const amountchanghender=(event)=>{
        setamonth(event.target.value)
        // setuserinput({
        //     ...userinput,
        // enteramounth:event.target.value,
        
        // })
    }
    const datechang=(event)=>{
setdate(event.target.value)

    }
    const submithande=(event)=>{
event.preventDefault();
const expensdate={
    title:entertitle,
    amounth:enteramounth,
    date:new Date(enterdate)
}
console.log(expensdate)
setentertitle("");
setamonth("");
setdate("");
    }
return (

<form onSubmit={submithande}>

<div className=" bg-slate-300 text-center p-2 ">

<div className=" m-2">

<label className=" block">title</label>
<input type="text" value={entertitle} onChange={titilechanch}/>
</div>
<div>
<label className=" block">Amounth </label>
<input type="number" min='0.01' value={setamonth} step='0.01' onChange={amountchanghender}/>

</div>
<div>
<label className=" block">data</label>
<input type="date"  min='2019-01-01' max='2022-12-31' value={setdate} onChange={datechang}/>

</div>
<button type="submit">chanx</button>
</div>

</form>

)





}

export default EXpensform;