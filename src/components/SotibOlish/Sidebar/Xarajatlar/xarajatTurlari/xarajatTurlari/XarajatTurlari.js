import { Link } from 'react-router-dom'
import CSV from '../../img/CSV.png'
import Excel from '../../img/Excel.png'
import Print from '../../img/Print.png'
import Data from '../../img/Data.png'
import Pdf from '../../img/PDF.png'
import Edit from '../../img/Edit.png'
import Delete from '../../img/Delete.png'
import './xarajatTurlari.css'


export default function XarajatTurlari() {
       return (
              <div className="col-md-12 mt-2">
              <div className="textHeader">
                  <h2>Xarajat turlari</h2>
                  <p>Xarajat turlari boshqarmasi</p>
              </div>
              <div className="rowStyle">
                     <div className="qoshish">
                            <h5>Barcha turlash</h5>
                            <button className='btn btn-primary'>+Qo'shish</button>
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
                     <div className="table-responsive">

                     
                     <table className='table table-striped table-bordered mt-4'>
                            <thead>
                                   <tr>
                                          <th>Bo'limlar</th>
                                          <th>Bo'lim kodi</th>
                                          <th>Qisqa malumot</th>
                                          <th>Amallar</th>
                                   </tr>
                            </thead>
                            <tbody>
                                   <tr>
                                          <td>AZBIZ</td>
                                          <td>dona</td>
                                          <td>yuq</td>
                                          <td>   
                                                 <Link><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
                                                 <button className='ochirish'> <img src={Delete} alt="" /> O'chirish</button>
                                          </td>
                                   </tr>
                            </tbody>
                     </table>
                     </div>

                     <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                     <div className='sahifalar'>
                            <button>Ortga</button>
                            <button>1</button>
                            <button>Oldinga</button>
                     </div>
              </div>
       </div>  
       )
}
