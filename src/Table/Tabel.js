import styles from '../Seaction/mystyle.module.css';
import img from '../img/seaction/music.svg'
const Tabel=()=>{


return(
<div> 

<table class="table-auto m-auto mt-40 bg-slate-50 w-96" className={styles.table}>
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">
<img src={img} className=" w-10  ml-2"></img>

</a>
<a href='#' className=' ml-2'>نوبیتکس</a></td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</div>

)

}
export default Tabel