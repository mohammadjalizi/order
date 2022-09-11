import img from '../img/nobitex-l.png'

const Nav=()=>{
return(

<div className=" bg-black text-white flex justify-between m-auto" >
  
<ul className=" flex ">
<div className=' flex'>
<a href="#">
<img src={img} className=" w-10  ml-2"></img>

</a>
<a href='#' className=' ml-2'>نوبیتکس</a>
</div>
<li> <a href="#" className=" m-2"> home</a> 
<ul className=" hidden  p-5">  
<li>  <a href="#"> concat</a>  </li>
<li>  <a href="#"> concat</a>  </li>
<li>  <a href="#"> concat</a>  </li>
</ul>
 </li>
<li> <a href="#" className=" m-2">  
  قیمت لحظه‌ای رمزارزها</a>  </li>
<li> <a href="#" className=" m-2">  راهنمای استفاده</a>  </li>
<li> <a href="#" className=" m-2"> سوالی دارید؟</a>  </li>
</ul>
<div  >
<button className="m-2 bg-blue-400 border rounded shadow pl-3 hover:bg-slate-400 font-bold translate-x-3">click</button>
<button className="m-2 bg-blue-400 border rounded shadow pl-3  hover:bg-slate-400 font-bold translate-x-3">click</button>
</div>
</div>

)


}
export default Nav;