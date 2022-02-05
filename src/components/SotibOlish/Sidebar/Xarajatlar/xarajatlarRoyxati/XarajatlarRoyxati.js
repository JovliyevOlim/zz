import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarRoyxati.css'
import {useEffect} from "react";
import {connect} from "react-redux";
import {deleteXarajatlar, editXarajatlar, getXarajatlar, saveXarajatlar} from "../reducer/XarajatlarReducer";

function XarajatlarRoyxati({getXarajatlar}) {

       useEffect(()=>{
              getXarajatlar()
       })

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Xarajatlar</h2>
                     </div>
                     <div className="rowStyleH">
                            <div className="qoshish">
                                   <h5>Filtirlash</h5>
                            </div>
                            <div className="row cont">
                                   <div className="col-md-6">
                                          <h6>Baza:</h6>
                                          <select name="" id="">
                                                 <option value="">Barcha bazalar</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Xarajat qildi:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6">
                                          <h6>Aloqa:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value="">Boshliq</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Xarajat turi:</h6>
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
                                   <div className="col-md-6" >
                                          <div className="sana">
                                                 <h6>Sanani belgilang:</h6>
                                                 <input type="date"/> 
                                          </div>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Obuna:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                     </div>
                     
                     <div className="rowStyleH2">
                            <div className="qoshish">
                                   <h5>Barcha savdolar</h5>
                                   <Link to={'/headerthird/xarajatQoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>
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
                                   <table className='table table-striped table-bordered mt-4 '>
                                          <thead>
                                                 <tr>
                                                        <th>sana</th>
                                                        <th>Savdo raqami</th>
                                                        <th>Mijoz</th>
                                                        <th>Telefon raqami</th>
                                                        <th>Baza</th>
                                                        <th>To'lov statusi</th>
                                                        <th>To'lov usuli</th>
                                                        <th>Jami summa</th>
                                                        <th>To'langan summa</th>
                                                        <th>Qarz</th>
                                                        <th>Yetkazish statusi</th>
                                                        <th>Jami maxsulotlar</th>
                                                        <th>Savdogar</th>
                                                        <th>Savdo eslatmasi</th>
                                                        <th>Yetkazish manzili</th>
                                                        <th>Amallar</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td>21.23.2021</td>
                                                        <td>12</td>
                                                        <td>mijoz</td>
                                                        <td>9098888899</td>
                                                        <td>baza </td>
                                                        <td>to'lov status</td>
                                                        <td>naqd</td>
                                                        <td>200000</td>
                                                        <td>33222333</td>
                                                        <td>33222333</td>
                                                        <td>bir kun</td>
                                                        <td>jami maxsulot</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>   
                                                               <Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
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
export default connect(({XarajatlarReducer:{xarajatlar}})=>({xarajatlar}),{getXarajatlar,saveXarajatlar,editXarajatlar,deleteXarajatlar}) (XarajatlarRoyxati)