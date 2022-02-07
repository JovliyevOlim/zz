import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './mijozlarxisoboti.css'
import {useState,useEffect} from "react";
import Savdolar1 from "./Savdolar/1/Savdolar1";
import Ulushli from "./Savdolar/2/Ulushli";
import Xarajatlar3 from "./Savdolar/3/Xarajatlar3";
import MijozlarBnIshlash from "./Savdolar/4/MijozlarBnIshlash";
import {connect} from 'react-redux'
import {getMijozhisobot,deleteMijozhisobot,saveMijozhisobot,editMijozhisobot} from '../reducer/MijozHisobotiReducer'
function MijozlarXisoboti() {

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    useEffect(()=>{
        getMijozhisobot()
    })

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
                            {
                                active?<option value="">123</option>:'no find'
                            }
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
                <div className={'d-flex'}>
                    <Link to={'/headerthird/mijozlarXisoboti/1'}><button className={'btn btn-outline-danger'}>Savdolar</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/2'}><button className={'btn btn-outline-danger'}>Ulushli savdolar</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/3'}><button className={'btn btn-outline-danger'}>Xarajatlar</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/4'}><button className={'btn btn-outline-danger'}>Mijozlar bn ishlash</button></Link>
                </div>

                <div className="qoshish mt-4">
                    <h5>Barcha savdolar</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <Route path={'/headerthird/mijozlarXisoboti/1'} component={Savdolar1}/>
                <Route path={'/headerthird/mijozlarXisoboti/2'} component={Ulushli}/>
                <Route path={'/headerthird/mijozlarXisoboti/3'} component={Xarajatlar3}/>
                <Route path={'/headerthird/mijozlarXisoboti/4'} component={MijozlarBnIshlash}/>

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

export default connect(({MijozHisobotiReducer:{mijozhisobot}})=>({mijozhisobot}),{getMijozhisobot,saveMijozhisobot,editMijozhisobot,deleteMijozhisobot}) (MijozlarXisoboti)