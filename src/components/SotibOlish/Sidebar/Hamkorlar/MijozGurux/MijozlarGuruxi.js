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
import {useState,useEffect} from 'react'
import {connect} from "react-redux";
import {getMijozGurux,saveMijozGurux,editMijozGurux,deleteMijozGurux} from "../reducer/MijozGuruxReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Mijozlarguruxi({getMijozGurux,saveMijozGurux,editMijozGurux,deleteMijozGurux,mijozgurux}) {

    useEffect(()=>{
        getMijozGurux()
    },[])

    const [active, setActive] = useState(false);

    const [input,setInput] = useState(
        {
            guruhnomi:'',
            selectfoiz:'',
            foizda:'',
        }
    )

    function changeguruxnomi(e){
        input.guruhnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changeselectfoiz(e){
        input.selectfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changefoizda(e){
        input.foizda = e.target.value
        let a = {...input}
        setInput(a)
    }

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
                <div className="table-responsive">
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
                    {
                        mijozgurux.map(item => <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.telegram}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>


                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi guruh qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Guruh nomi</label>
                        <input checked={input.guruhnomi} onChange={changeguruxnomi} id={'nomi'} type="text" className={'form-control'}/>
                        <label htmlFor={'lang'}>lang_v1.price_calculation_type</label>
                        <select value={input.selectfoiz} onChange={changeselectfoiz} className={'form-control mt-3'}  name="" id="">
                            <option value="#">Foizda</option>
                        </select>
                        <label htmlFor={'foizda'} className={'mt-3'}>Foizda</label>
                        <input type="text" checked={input.foizda} onChange={changefoizda} className={'form-control'} id={'foizda'}/>
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
export default connect(({MijozGuruxReducer:{mijozgurux}})=>({mijozgurux}),{getMijozGurux,saveMijozGurux,editMijozGurux,deleteMijozGurux}) (Mijozlarguruxi)