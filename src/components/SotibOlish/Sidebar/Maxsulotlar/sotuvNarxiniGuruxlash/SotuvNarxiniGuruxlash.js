import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './sotuvNarxiniGuruxlash.css'
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {deleteSotuvNarxi, editSotuvNarxi, getSotuvNarxi, saveSotuvNarxi} from "../reducer/SotuvNarxiReducer";

function SotuvNarxiniGuruxlash() {

       const [active,setActive] = useState(false)

       function toggle(){
              setActive(!active)
       }

       useEffect(()=>{
              getSotuvNarxi()
       })

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Sotuv narxlarini guruxlash</h2>
                     </div>
                     <div className="rowStyle">
                            <div className="qoshish">
                                   <h5>Import/Export Sotish narxlarini guruxlash</h5>
                            </div>
                            <div className="export">
                                   <button className='btn btn-primary'>Export Selling Price Group Prices</button>
                                   <div className="fayl">
                                          <h5>Faylni kiriting</h5>
                                          <input type="file"/>
                                          {/*<button className='btnFaylKiritish'>Fayl kiritish</button>*/}
                                   </div>
                            </div>
                            <div className="btnTasdiqlash">
                                   <button className='btn btn-primary'>Tasdiqlash</button>
                            </div>
                            <h6>Qo'llanma:</h6>
                            <p>• Export Selling price group prices.
                                   <br />
                               • Update the exported file and import the same file.
                                   <br />
                               • Only selling price group prices of the product will be updated. Any blank price will be skipped.
                            </p>
                            <hr />
                            <div className="btnQoshish">
                                   <h5>All Selling Price Group</h5>
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
                                                 <th>Nomi</th>
                                                 <th>Qisqa malumot</th>
                                                 <th>Amallar</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td>   
                                                        <Link><button className='taxrirlash' onClick={toggle}> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
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
                                          Yangi Qo`shish / Taxrirlash
                                   </ModalHeader>
                                   <ModalBody>
                                          <label htmlFor={'noi'}>Nomi</label>
                                          <input type="text" className={'form-control'} placeholder={'Nomi'}/>
                                          <label className={'mt-4'} htmlFor={'qisqa'}>Qisqacha malumot</label>
                                          <textarea className={'form-control'} name="" id={'qisqa'} cols="30" rows="4"> </textarea>
                                   </ModalBody>
                                   <ModalFooter>
                                          <button className={'btn btn-primary'}>Saqlash</button>
                                          <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
                                   </ModalFooter>
                            </Modal>
                     </div>
               </div>  
       )
}
export default connect(({XodimReducer:{xodimlar}})=>({xodimlar}),{getSotuvNarxi,saveSotuvNarxi,deleteSotuvNarxi,editSotuvNarxi}) (SotuvNarxiniGuruxlash)