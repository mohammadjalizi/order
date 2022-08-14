import { data } from "autoprefixer"
import { useState } from "react"

const EXpensform=()=>{
    const titilechanch=()=>{
console.log("chanc")

    }
return (

<form>

<div className=" bg-slate-300 text-center p-2 ">

<div className=" m-2">

<label className=" block">title</label>
<input type="text" onChange={titilechanch}/>
</div>
<div>
<label className=" block">Amounth </label>
<input type="number" min='0.01'  step='0.01'/>

</div>
<div>
<label className=" block">data</label>
<input type="date"  min='2019-01-01' max='2022-12-31'/>

</div>
<a href="">chancg</a>
</div>

</form>

)





}

export default EXpensform;