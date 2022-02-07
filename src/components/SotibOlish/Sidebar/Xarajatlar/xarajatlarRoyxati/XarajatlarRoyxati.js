import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarRoyxati.css'
import {useEffect,useState} from "react";
import {connect} from "react-redux";
import {deleteXarajatlar, editXarajatlar, getXarajatlar, saveXarajatlar} from "../reducer/XarajatlarReducer";

function XarajatlarRoyxati({getXarajatlar}) {

       const [input,setInput] = useState(
           {
                  baza:'',
                  xarajatqildi:'',
                  aloqa:'',
                  xarajatturi:'',
                  sana:'',
                  obuna:'',
                  view:'',
                  izlash:'',
           }
       )

       function baza(e){
              input.baza = e.target.value
              let a = {...input}
              setInput(a)
       }
       function xarajatqildi(e){
              input.xarajatqildi = e.target.value
              let a = {...input}
              setInput(a)
       }
       function aloqa(e){
              input.aloqa = e.target.value
              let a = {...input}
              setInput(a)
       }
       function xarajatturi(e){
              input.xarajatturi = e.target.value
              let a = {...input}
              setInput(a)
       }
       function sana(e){
              input.sana = e.target.value
              let a = {...input}
              setInput(a)
       }
       function obuna(e){
              input.obuna = e.target.value
              let a = {...input}
              setInput(a)
       }
       function view(e){
              input.view = e.target.value
              let a = {...input}
              setInput(a)
       }
       function izlash(e){
              input.izlash = e.target.value
              let a = {...input}
              setInput(a)
       }

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
                                          <select name="" value={input.baza} onChange={baza} id="">
                                                 <option value="">Barcha bazalar</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Xarajat qildi:</h6>
                                          <select name="" id="" value={input.xarajatqildi} onChange={xarajatqildi}>
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6">
                                          <h6>Aloqa:</h6>
                                          <select name="" id="" value={input.aloqa} onChange={aloqa}>
                                                 <option value="">Barchasi</option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Xarajat turi:</h6>
                                                 <select name="" id="" value={input.xarajatturi} onChange={xarajatturi}>
                                                        <option value="">Barchasi</option>
                                                        <option value="">To'lov muddati o'tgan</option>
                                                 </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6" >
                                          <div className="sana">
                                                 <h6>Sanani belgilang:</h6>
                                                 <input type="date" value={input.sana} onChange={sana}/>
                                          </div>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Obuna:</h6>
                                          <select name="" id="" value={input.obuna} onChange={obuna}>
                                                 <option value="">Barchasi</option>
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
                                   <select name="" id="" value={input.view} onChange={view}>
                                          <option value="">25</option>
                                          <option value="">All</option>
                                   </select>
                                   <button> <img src={CSV} alt="" /> Export CSV</button>
                                   <button><img src={Excel} alt="" /> Export Excel</button>
                                   <button><img src={Print} alt="" /> Print</button>
                                   <button><img src={Pdf} alt="" />Export PDF</button>
                                   <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                                   <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
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
                                                               <Link to={'/headerthird/xarajatQoshish'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
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