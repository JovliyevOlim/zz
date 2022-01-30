import React from 'react'
import "./lavozimlar.css"
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {Switch,Link,Route} from 'react-router-dom'

export default function Lavozimlar(){
       return (
              <div>
                     <div>
                     <div className="col-md-12 ">
                            <div className="textHeader">
                                <h2>Lavozimlar</h2>
                                <p>Lavozimlar boshqaruvi</p>
                            </div>
                            <div className="rowStyle">
                                   <div className="qoshish">
                                          <h5>Barcha lavozimlar</h5>
                                          <Link to={'/headerthird/lavozimlar/taxrirlash'}><button className='btn btn-primary'>+Qo'shish</button></Link>
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
                                          
                                          <input type="text" placeholder='Izlash...'/>
                                   </div>

                                   <table className='table table-striped table-bordered mt-4'>
                                          <thead>
                                                 <tr>
                                                        <th>Lavozimlar</th>
                                                        <th>Amal</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td>Admin</td>
                                                        <td>
                                                               <Link to={'/headerthird/lavozimlar/taxrirlash'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button></Link>
                                                               <Link to={'/third/lavozimlar/delete'}><button className='ochirish'> <img src={Delete} alt="" /> O'chirish</button></Link>
                                                        </td>
                                                 </tr>
                                          </tbody>
                                   </table>

                                   <p>Ko'rsatildi 1 ta sahifa 2 va yana 2 ta sahifa bor</p>
                                   <div className='sahifalar'>
                                          <button>Ortga</button>
                                          <button>1</button>
                                          <button>Oldinga</button>
                                   </div>
                            </div>
                     </div>
              </div>
              </div>
       )
}
