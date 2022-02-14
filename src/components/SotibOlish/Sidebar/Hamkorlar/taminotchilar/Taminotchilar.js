import "./taminotchilar.css"
import {Link} from "react-router-dom"
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import {useEffect} from "react";
import {connect} from "react-redux";
import {getTaminot,saveTaminot,editTaminot,deleteTaminot} from "../reducer/TaminotReducer";
import {useState} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function Taminotchilar({getTaminot,saveTaminot,editTaminot,deleteTaminot,taminot}) {

    useEffect(()=>{
        getTaminot()
    },[])

    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active)
    }

    const [input, setInput] = useState(
        {
            langv1:'',
            dukon:'',
            idraqam: '',
            login:'',
            ismi:'',
            otaismi:'',
            familiyasi:''
        },
    );

    function changelangv1(e){
        input.langv1 = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changedukon(e){
        input.dukon = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changeidraqam(e){
        input.idraqam = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changelogin(e){
        input.login = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changeismi(e){
        input.ismi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changeotaismi(e){
        input.otaismi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changefamiliyasi(e){
        input.familiyasi = e.target.value
        let a = {...input}
        setInput(a)
    }

    return (

        <div>
            <div className="col-md-12 pt-4 pb-4 mt-2">
                <div className="textHeaderTM">
                    <h2>Taminotchilar/Diller </h2>
                    <p>Barcha Taminotchilar/Diller</p>
                </div>
                <div className="rowStyleTM">
                    <div className="qoshishTM">
                        <h5>Barcha Taminotchilar</h5>
                        <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                    </div>
                    <div className="izlashTM">
                        <div className="izlashBox1">
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
                        </div>
                        <div className="izlashBox2">
                            <input type="text" placeholder='Izlash...'/>
                        </div>
                    </div>
                    <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Ismi</th>
                            <th>Telefon raqam</th>
                            <th>Telegram</th>
                            <th>Taminotchi turi</th>
                            <th className={'text-center'}>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            taminot.map(item=><tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.telegram}</td>
                                <td></td>
                                <td>
                                    <button className={'btn btn-primary m-1'}>Taxrirlash</button>
                                    <button className={'btn btn-primary m-1'}>Korish</button>
                                    <button className={'btn btn-danger m-1'}>O`chirish</button>
                                </td>
                            </tr>)
                        }

                        {/*<tr>*/}
                        {/*    <td>boshliq</td>*/}
                        {/*    <td>+998998887778</td>*/}
                        {/*    <td>ssdd@</td>*/}
                        {/*    <td>nimadir</td>*/}
                        {/*    <td>*/}
                        {/*        <Link to={'/headerthird/taminotchilar/taxrirlash'}>*/}
                        {/*            <button onClick={toggle} className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash*/}
                        {/*            </button>*/}
                        {/*        </Link>*/}
                        {/*        <Link to={'/headerthird/taminotchilar/view/' + input.name+'/'+input.tel+'/'+input.telegram+'/'+input.taminot}>*/}
                        {/*            <button className='korish'><img src={Korish} alt=""/> Ko'rish</button>*/}
                        {/*        </Link>*/}
                        {/*        <button className='ochirish'><img src={Delete} alt=""/> O'chirish</button>*/}
                        {/*        <Link to={''}>*/}
                        {/*            <button className="amallar">Amallar alt="" /></button>*/}
                        {/*        </Link>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
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

                {active ?
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Yangi Qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="">Munosabat turi</label>
                            <select name="" id="" className={'p-1'} style={{marginLeft: '20px'}}>
                                <option value="#">Tanlash</option>
                                <option value="#">Taminotchilar</option>
                                <option value="#">Mijozlar</option>
                                <option value="#">(ikkisi ham) Taminotchi ha Mijoz</option>
                            </select>
                            <div className="in d-flex align-items-center justify-content-sm-around mt-3">
                                <input type="radio" checked={input.langv1} onChange={changelangv1} name={'radio'} id={'in1'}/>
                                <label htmlFor={'in1'}>
                                    lang_v1.induvidial
                                </label>
                                <input type="radio" checked={input.dukon} onChange={changedukon} name={'radio'} id={'in2'}/>
                                <label htmlFor={'in2'}>
                                    Do`kon
                                </label>
                            </div>
                            <label htmlFor={'idRaqam'}>ID Raqami</label>
                            <input checked={input.idraqam} onChange={changeidraqam} type="text" id={'idRaqam'} placeholder={'ID Raqami'} className={'form-control'}/>
                            lang_v1.leave_empty_to_autogenerate
                            <div className="in d-flex mt-3">
                                <div>
                                    <label htmlFor={'log1'}>Login</label>
                                    <input type="text" checked={input.login} onChange={changelogin} className={'form-control'} placeholder={'Mr/Mrs/Mis'}
                                           id={'log1'}/>
                                </div>
                                <div>
                                    <label htmlFor={'ism'}>Ismi</label>
                                    <input onChange={changeismi} checked={input.ismi} type="text" id={'ism'} placeholder={'Ismi'} className={'form-control'}/>
                                </div>
                            </div>
                            <div className="in d-flex">
                                <div className={'mt-3'}>
                                    <label htmlFor={'ot'}>Otasining ismi</label>
                                    <input checked={input.otaismi} onChange={changeotaismi} type="text" className={'form-control'} placeholder={'Otasining ismi'}/>
                                </div>
                                <div className={'mt-3'}>
                                    <label htmlFor={'ot'}>Familiyasi</label>
                                    <input checked={input.familiyasi} onChange={changefamiliyasi} type="text" placeholder={'Familiyasi'} className={'form-control'}/>
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'}>SAVE</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>CHIQISH</button>
                        </ModalFooter>
                    </Modal> : ''
                }
            </div>
        </div>
    )
}
export default connect(({TaminotReducer:{taminot}})=>({taminot}),{getTaminot,saveTaminot,editTaminot,deleteTaminot}) (Taminotchilar)