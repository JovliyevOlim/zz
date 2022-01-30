import './barchMaxsulotlar.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import Edit from '../../../../../../img/Edit.png'
import Korish from '../../../../../../img/Korish.png'
import Delete from '../../../../../../img/Delete.png'
import {Switch,Link,Route} from 'react-router-dom'
import {useState} from "react";
import KorishM from '../Taxrirlash/Korish'

export default function BarchaMaxsulotlar() {

       const [input,setInput] = useState(
           {
                  name:'Azbs',
                  ferma:'Shifer Zavod',
                  pay:'100.00',
                  sotishNarxi:'200.00',
                  ostatka:'Kg'
           }
       )

       const [active,setActive] = useState(false)

       function toggle(){
              setActive(!active)
       }
       return (
              <div>
                     <div className="col-md-12">
                            <div className="rowStyles">
                                   <div className="qoshish">
                                          <h5>Barcha maxsulotlar</h5>
                                          <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'}><button onClick={toggle} className='btn btn-primary'>+Qo'shish</button></Link>
                                   </div>
                                   <div className="izlash">
                                          <p>Ko'rsatildi</p>
                                          <select name="" id="">
                                                 <option value="">25</option>
                                                 <option value="">50</option>
                                                 <option value="">100</option>
                                                 <option value="">200</option>
                                                 <option value="">500</option>
                                                 <option value="">1,000</option>
                                                 <option value="">All</option>
                                          </select>
                                          <button> <img src={CSV} alt="" /> Export CSV</button>
                                          <button><img src={Excel} alt="" /> Export Excel</button>
                                          <button><img src={Print} alt="" /> Print</button>
                                          <button><img src={Pdf} alt="" />Export PDF</button>
                                          <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                                          <input type="text" placeholder='Izlash...'/>
                                   </div>

                                   <table className='table table-striped table-bordered mt-4'>
                                          <thead>
                                                 <tr>
                                                        <th><input type="checkbox" /></th>
                                                        <th>Maxsulot</th>
                                                        <th>Baza</th>
                                                        <th>Sotib olish narxi</th>
                                                        <th>Sotish narxi</th>
                                                        <th>Qolgan maxsulot</th>
                                                        <th>Firma</th>
                                                        <th>Amallar</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td><input type="checkbox" /></td>
                                                        <td>AZBS</td>
                                                        <td>Shifer zavod</td>
                                                        <td>so'm 100.00</td>
                                                        <td>so'm 200.00</td>
                                                        <td>KG</td>
                                                        <td></td>
                                                        <td>
                                                               <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button></Link>
                                                               <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/view/'+input.name+'/'+input.ferma+'/'+input.pay+'/'+input.sotishNarxi+'/'}><button onClick={toggle} className='korish'> <img src={Korish} alt="" /> Ko'rish</button></Link>
                                                               <button className='ochirish'> <img src={Delete} alt="" /> O'chirish</button>
                                                        </td>
                                                 </tr>
                                          </tbody>
                                   </table>
                                   {
                                          active?<KorishM active={active} toggle={toggle} mahsulot={input}/>:''
                                   }
                                   <div className="btnBoshqarish">
                                          <button className='btn btn-danger'>Belgilanganlarni o'chirish</button>
                                          <button className='btn btn-success'>Boshqa bazaga surish</button>
                                          <button className='btn btn-primary'>Bazadan olib tashlash</button>
                                          <button className='btn btn-warning'>Belgilanganlarni vaqtinchalik o'chirish</button>
                                   </div>

                                   <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                                   <div className='sahifalar'>
                                          <button>Ortga</button>
                                          <button>1</button>
                                          <button>Oldinga</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
