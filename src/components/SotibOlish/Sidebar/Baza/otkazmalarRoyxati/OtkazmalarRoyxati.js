import React from 'react'
import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import Arrow from '../../../../../img/arrowIcon.png'
import './otkazmalarRoyxati.css'
import {connect} from "react-redux";
import {useEffect,useState} from "react";
import {getOtkazma} from '../reducer/OtkazmaReducer'
import {deleteOtkazma, editOtkazma, saveOtkazma} from "../reducer/OtkazmaReducer";

function OtkazmalarRoyxati({getOtkazma}) {

       const [input,setInput] = useState(
           {
                  view:'',
                  search:'',

           }
       )

       function view(e){
              input.view = e.target.value
              let a = {...input}
              setInput(a)
       }
       function search(e){
              input.search = e.target.value
              let a = {...input}
              setInput(a)
       }

       useEffect(()=>{
              getOtkazma()
       })

       return (
              <div className="col-md-12 mt-2 ">
                            <div className="textHeader">
                                <h2>Bazadan Bazaga</h2>
                            </div>
                            <div className="rowStyleN">
                                   <div className="qoshish">
                                          <h5>Barcha o'tkazmalar</h5>
                                          <Link to={'/headerthird/utkazmaRuyxati/taxrirlash'}><button className='btn btn-primary'>+Qo'shish</button></Link>
                                   </div>
                                   <div className="izlash">
                                          <p>Ko'rsatildi</p>
                                          <select name="" value={input.view} onChange={view} id="">
                                                 <option value="">25</option>
                                                 <option value="">1,000</option>
                                                 <option value="">All</option>
                                          </select>
                                          <button> <img src={CSV} alt="" /> Export CSV</button>
                                          <button><img src={Excel} alt="" /> Export Excel</button>
                                          <button><img src={Print} alt="" /> Print</button>
                                          <button><img src={Pdf} alt="" />Export PDF</button>
                                          <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                                          <input type="text" placeholder='Izlash...' value={input.search} onChange={search}/>
                                   </div>
                                   <div className="table-responsive">
                                          <table className='table table-striped table-bordered mt-4'>
                                                 <thead>
                                                        <tr>
                                                               <th>Sana</th>
                                                               <th>Bazadan (Amaldagi baza)</th>
                                                               <th>Bazaga (O'tkaziladigan baza)</th>
                                                               <th>Status</th>
                                                               <th>Yo'lkira haqi</th>
                                                               <th>Jami summa</th>
                                                               <th>Qisqa eslatma</th>
                                                               <th>Amallar</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody>
                                                        <tr>
                                                               <td>21.02.2022</td>
                                                               <td>baza nomi</td>
                                                               <td>baza nomi</td>
                                                               <td>status</td>
                                                               <td>100000</td>
                                                               <td>10000000</td>
                                                               <td>text</td>
                                                               <td>   
                                                                      <Link to={'/headerthird/utkazmaRuyxati/taxrirlash'}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
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
export default connect(({OtkazmaReducer:{otkazmalar}})=>({otkazmalar}),{getOtkazma,saveOtkazma,editOtkazma,deleteOtkazma}) (OtkazmalarRoyxati)
