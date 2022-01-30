import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import Arrow from '../../../../../img/arrowIcon.png'
import './mijozlarGuruxi.css'
import {useState} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default function Mijozlarguruxi() {

    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeader">
                <h2>Mijozlar guruxlari</h2>
            </div>
            <div className="rowStyle">
                <div className="qoshish">
                    <h5>Barcha mijozlar guruxlari</h5>
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
                    <button><img src={CSV} alt=""/> Export CSV</button>
                    <button><img src={Excel} alt=""/> Export Excel</button>
                    <button><img src={Print} alt=""/> Print</button>
                    <button><img src={Pdf} alt=""/>Export PDF</button>
                    <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    <input type="text" placeholder='Izlash...'/>
                </div>

                <table className='table table-striped table-bordered mt-4'>
                    <thead>
                    <tr>
                        <th>Gurux nomi</th>
                        <th>Foizda(%)</th>
                        <th>Sotuv narxini guruxlash</th>
                        <th>Amallar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>boshliq</td>
                        <td>12%</td>
                        <td>ssdd</td>
                        <td>
                            <Link to={'/headerthird/mijozlarGuruhi/taxrirlash'}>
                                <button onClick={toggle} className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                </button>
                            </Link>
                            {/*<Link to={'/third/mijozgurux/korish'}>*/}
                            {/*    <button className='korish'><img src={Korish} alt=""/> Ko'rish</button>*/}
                            {/*</Link>*/}
                            <button className='ochirish'><img src={Delete} alt=""/> O'chirish</button>
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
                        Yangi guruh qo`shish
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Guruh nomi</label>
                        <input id={'nomi'} type="text" className={'form-control'}/>
                        <label htmlFor={'lang'}>lang_v1.price_calculation_type</label>
                        <select className={'form-control mt-3'}  name="" id="">
                            <option value="#">Foizda</option>
                            <option value="#">Sotuv narxida guruhlash</option>
                        </select>
                        <label htmlFor={'foizda'} className={'mt-3'}>Foizda</label>
                        <input type="text" className={'form-control'} id={'foizda'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-primary'}>SAQLASH</button>
                        <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                    </ModalFooter>
                </Modal>:''

            </div>
        </div>
    )
}
