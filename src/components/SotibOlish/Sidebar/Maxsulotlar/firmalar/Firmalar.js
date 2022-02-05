import React from 'react'
import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import './firmalar.css'
import {Modal,ModalHeader,ModalFooter,ModalBody} from "reactstrap";
import {deleteFirma, editFirma, getFirma, saveFirma} from "../reducer/FirmaReducer";

function Firmalar() {

       useEffect(()=>{
              getFirma()
       })

       const [active,setActive] = useState(false)

       function toggle(){
              setActive(!active)
       }

       return (
              <div className="col-md-12 mt-2">
              <div className="textHeader">
                  <h2>Firmalar</h2>
                  <p>Firma yoki brendlar boshqaruvi</p>
              </div>
              <div className="rowStyle">
                     <div className="qoshish">
                            <h5>Barcha firma va brendlar boshqaruvi</h5>
                            <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
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
                                          <th>Firmalar</th>
                                          <th>Eslatma</th>
                                          <th>Amallar</th>
                                   </tr>
                            </thead>
                            <tbody>
                                   <tr>
                                          <td>Evaset</td>
                                          <td>eslatma</td>
                                          <td>   
                                                 <Link><button onClick={toggle} className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
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

                     <Modal isOpen={active} toggle={toggle}>
                            <ModalHeader>
                                   Yangi qo`shish / taxrirlash
                            </ModalHeader>
                            <ModalBody>
                                   <label htmlFor={'l'}>Brand qo`shish</label>
                                   <input type="text" id={'l'} className={'form-control'}/>
                                   <label htmlFor={'l2'} className={'mt-3'}>Qisqa eslatma</label>
                                   <input type="text" className={'form-control'} id={'l2'}/>
                            </ModalBody>
                            <ModalFooter>
                                   <button className={'btn btn-outline-primary'}>Saqlash</button>
                                   <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                            </ModalFooter>
                     </Modal>
              </div>
       </div>  
       )
}
export default connect(({FirmaReducer:{firmalar}})=>({firmalar}),{getFirma,saveFirma,editFirma,deleteFirma}) (Firmalar)
