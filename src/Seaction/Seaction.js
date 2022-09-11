import styles from '../Seaction/mystyle.module.css';
import img from '../img/seaction/music.svg'
import Tabel from '../Table/Tabel';

const Seaction=()=>{
return(
<div className={styles.pic}  >
<div className="relative top-12">  
<h1 className=" font-bold p-2 text-center text-4xl	"> خرید و فروش امن بیت‌کوین و ارزهای دیجیتال</h1>
    <p className=" text-center m-3 text-xl">به بزرگترین بازار ارز دیجیتال ایران بپیوندید
</p>
<div className=" text-center ">  
<input type='text' placeholder="text" className=' pl-8 p-2'></input>
<button className=' bg-green-400 pl-8 p-2' >click</button>


</div>
<a href='#' className=' text-center  mt-10 flex justify-center text-blue-600'>
        نوبیتکس چطور کار می‌کند؟
        <img src={img}></img>
        </a>
</div>
<Tabel/>
</div>


)


}
export default Seaction;