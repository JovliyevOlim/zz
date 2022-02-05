import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './haridlarRoyxati.css'
import {connect} from "react-redux";
import {useEffect} from "react";
import {deleteXarid, editXarid, getXarid, saveXarid} from "../reducer/XaridReducer";

function HaridlarRoyxati() {

       useEffect(()=>{
              getXarid()
       })

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Haridlar</h2>
                     </div>
                     <div className="rowStyleM">
                            <div className="qoshish">
                                   <h5>Filtirlash</h5>
                            </div>
                            <div className="row cont">
                                   <div className="col-md-6">
                                          <h6>Baza:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Diller:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6">
                                          <h6>Harid statusi:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value="">Qabul qilindi</option>
                                                 <option value="">Kutilmoqda</option>
                                                 <option value="">Buyurtma berildi</option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>To'lov statusi:</h6>
                                                 <select name="" id="">
                                                        <option value="">Barchasi</option>
                                                        <option value="">To'langan</option>
                                                        <option value="">To'lanmagan</option>
                                                        <option value="">Qisman to'langan</option>
                                                        <option value="">To'lov muddati o'tgan</option>
                                                 </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-12" >
                                          <div className="sana">
                                                 <h6>Sanani belgilang:</h6>
                                                 <input type="date"/> 
                                          </div>
                                   </div>
                            </div>
                      </div>
                      
                      <div className="rowStyle">
                            <div className="qoshish">
                                   <h5>Barcha haridlar</h5>
                                   <Link to={'/third/xaridlarRuyxati/taxrirlash'}><button className='btn btn-primary'>+Qo'shish</button></Link>
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
                                                 <th>sana</th>
                                                 <th>Qisqa eslatma</th>
                                                 <th>Baza</th>
                                                 <th>Diller</th>
                                                 <th>Harid statusi</th>
                                                 <th>Grand total</th>
                                                 <th>Qarz miqdori</th>
                                                 <th>Amallar</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr>
                                                 <td>21.23.2021</td>
                                                 <td>nimadir</td>
                                                 <td>Baza</td>
                                                 <td>Diller</td>
                                                 <td>harid st</td>
                                                 <td>grand</td>
                                                 <td>qarz miq</td>
                                                 <td></td>
                                                 <td>   
                                                        <Link to={'/third/xaridlarRuyxati/taxrirlash'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
                                                        <button className='ochirish'> <img src={Delete} alt="" /> O'chirish</button>
                                                 </td>
                                          </tr>
                                   </tbody>
                            </table>

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
export default connect(({XaridReducer:{xaridlar}})=>({xaridlar}),{getXarid,saveXarid,editXarid,deleteXarid}) (HaridlarRoyxati)
