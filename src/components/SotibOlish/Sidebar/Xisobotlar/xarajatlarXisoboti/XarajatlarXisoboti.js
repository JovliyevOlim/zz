import React from 'react'
import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarXisoboti.css'

export default function XarajatlarXisoboti() {



    return (
        <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Xarajatlar xisoboti</h2>
                     </div>
                     <div className="rowStyleX">
                            <div className="qoshish">
                                   <h5>Filtirlash</h5>
                            </div>
                            <div className="row cont">
                                   <div className="col-md-4">
                                          <h6>Baza:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-4">
                                          <h6>Bo'limlar:</h6>
                                          <select name="" id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-4">
                                       <h6>Aniq sanani belgilash:</h6>
                                       <select name="" id="">
                                           <option value="" hidden>Aniq sanani belgilash</option>
                                           <option value="">Bugun</option>
                                           <option value="">Oxirgi 1 hafta</option>
                                           <option value="">Oxirgi 1 oy</option>
                                       </select>
                                   </div>
                            </div>
                            <div className="btnFiltrlash">
                                <button className='btn btn-primary'>Filtrlash</button>
                            </div>
                            
                           
                     </div>
                     
                     <div className="rowStyleTab">
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
                                                        <th>Xarajat turi</th>
                                                        <th>Xarajat sababi</th>
                                                        <th>Xarajat miqdori(sum)</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
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
