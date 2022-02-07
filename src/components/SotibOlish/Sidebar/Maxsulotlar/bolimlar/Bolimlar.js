import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
// import Korish from '../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
// import Arrow from '../../img/arrowIcon.png'
import './bolimlar.css'
import {useState,useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {deleteBolim, editBolim, getBolim, saveBolim} from "../reducer/BolimReducer";

function Bolimlar() {

    const [input,setInput] = useState(
        {
            view:'',
            search:'',
            bolimnomi:'',
            bolimkodi:'',
            qisqacamalumot:'',
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
    function bolimnomi(e){
        input.bolimnomi = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.bolimnomi)
    }
    function bolimkodi(e){
        input.bolimkodi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqacamalumot(e){
        input.qisqacamalumot = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getBolim()
    })

    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeader">
                <h2>Bo'limlar</h2>
                <p>Bo'limlar boshqaruvi</p>
            </div>
            <div className="rowStyle">
                <div className="qoshish">
                    <h5>Bo'limlar</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>
                <div className="izlash">
                    <p>Ko'rsatildi</p>
                    <select name="" value={input.view} onChange={view} id="">
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
                    <input type="text" placeholder='Izlash...' onChange={search} value={input.search}/>
                </div>

                <table className='table table-striped table-bordered mt-4'>
                    <thead>
                    <tr>
                        <th>Bo'limlar</th>
                        <th>Bo'lim kodi</th>
                        <th>Qisqa malumot</th>
                        <th>Amallar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>AZBIZ</td>
                        <td>dona</td>
                        <td>yuq</td>
                        <td>
                            <Link>
                                <button onClick={toggle} className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                </button>
                            </Link>
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
                        Yangi Qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'bnomi'}>Bo`lim nomi</label>
                        <input type="text" className={'form-control'} id={'bnomi'} onChange={bolimnomi} value={input.bolimnomi}/>
                        <label className={'mt-4'} htmlFor={'bkodi'}>Bo`lim kodi</label>
                        <input type="text" className={'form-control'} value={input.bolimkodi} onChange={bolimkodi} id={'bkodi'}/>
                        bo`limni izlashga oson bol`ishi uchun bironta belgi kiritng
                        <label className={'mt-3'} htmlFor={'area'}>Qisqacha malumot</label>
                        <textarea className={'form-control'} name="" id={'area'} cols="30" rows="4"> </textarea>
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
export default connect(({BolimReducer:{bolimlar}})=>({bolimlar}),{getBolim,saveBolim,deleteBolim,editBolim}) (Bolimlar)