import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './savdoqilingantulov.css'
import {useState,useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {getSavdotulov,saveSavdotulov,editSavdotulov,deleteSavdotulov} from '../reducer/SavdodagiTulovReducer'
import {connect} from 'react-redux'
function SavdodaTulov(props) {

    useEffect(()=>{
        getSavdotulov()
    })

    const {mijoz,dukon,summa,eslatma} = props.match.params
    const [input,setInput] = useState(
        {
            mijoz: 'React',
            dukon: 'korzinka',
            summa: '13',
            eslatma:'joylashadi'
        }
    )
    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeader">
                <h2>Mijozlar xisobot</h2>
            </div>
            <div className="rowStyleH">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <input type="text" className={'form-control'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>Diller:</h6>
                        <select name="" id="" className={'form-control'}>
                            <option value="">Mavjud emas</option>
                            <option value="">Taminotchi</option>
                            <option value="">(2)</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <select name="" id="" className={'form-control'}>
                            <option value="">Tanlash</option>
                            <option value="">Shefir zavod</option>
                            <option value="">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Sanani belgilang:</h6>
                        <select name="" id="" className={'form-control'}>
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rowStyleH2">
                <div className="col-md-12">
                    <h5>Summary</h5>

                    <h3>Jami savdo - Jami sotuvlar bo`yicha daromad: ( backend-backend = backend )</h3>
                    <h3>Jami xarajatlar: ( backend )</h3>
                </div>

            </div>

            <div className="rowStyleH2">

                {/*<div className={'d-flex'}>*/}
                {/*    <Link to={'/third/mijozlarXisoboti/1'}><button className={'btn btn-outline-danger'}>Savdolar</button></Link>*/}
                {/*    <Link to={'/third/mijozlarXisoboti/2'}><button className={'btn btn-outline-danger'}>Ulushli savdolar</button></Link>*/}
                {/*    <Link to={'/third/mijozlarXisoboti/3'}><button className={'btn btn-outline-danger'}>Xarajatlar</button></Link>*/}
                {/*    <Link to={'/third/mijozlarXisoboti/4'}><button className={'btn btn-outline-danger'}>Mijozlar bn ishlash</button></Link>*/}
                {/*</div>*/}

                <div className="qoshish mt-4">
                    <h5>Barcha savdolar</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                {/*<Route path={'/third/mijozlarXisoboti/1'} component={Savdolar1}/>*/}
                {/*<Route path={'/third/mijozlarXisoboti/2'} component={Ulushli}/>*/}
                {/*<Route path={'/third/mijozlarXisoboti/3'} component={Xarajatlar3}/>*/}
                {/*<Route path={'/third/mijozlarXisoboti/4'} component={MijozlarBnIshlash}/>*/}

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
                            <th>Qisqa eslatma</th>
                            <th>Paid on</th>
                            <th>Tulov so`mmasi</th>
                            <th>Mijoz</th>
                            <th>Mijoz guruhi</th>
                            <th>Tulov usuli</th>
                            <th>Savdo</th>
                            {/*<th>To'lov usuli</th>*/}
                            <th>Amal</th>
                            {/*<th>To'langan summa</th>*/}
                            {/*<th>Qarz</th>*/}

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
                            <td>
                                <Link to={'/third/savdodaTulov/korish/'+input.mijoz+'/'+input.dukon+'/'+input.eslatma+'/'+input.summa}><button className={'btn btn-outline-primary'} onClick={toggle}>Ko`rish</button></Link>
                            </td>
                            <Modal isOpen={active} toggle={toggle}>
                                <ModalHeader>
                                    Ko`rish
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <div className={'d-flex'}>
                                            Mijoz:=>{mijoz}
                                            Dukon:=>{dukon}
                                            Summa:=>{summa}
                                            Eslatma:=>{eslatma}
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className={'btn btn-outline-primary'}>Print</button>
                                    <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                                </ModalFooter>
                            </Modal>
                            {/*<td>200000</td>*/}
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
export default connect(({SavdodagiTulovReducer:{savdotulov}})=>({savdotulov}),{getSavdotulov,saveSavdotulov,editSavdotulov,deleteSavdotulov}) (SavdodaTulov)
