import './HodimlarRoyhati.css';
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png';
import Print from '../../../../../img/Print.png';
import Data from '../../../../../img/Data.png';
import Pdf from '../../../../../img/PDF.png';
import Edit from '../../../../../img/Edit.png';
import Korish from '../../../../../img/Korish.png';
import Delete from '../../../../../img/Delete.png';
import {Link, Route, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getXodim, saveXodim, editXodim, deleteXodim} from "../reducer/XodimReducer";

function HodimlarRoyhati({getXodim, deleteXodim, saveXodim, editXodim,  xodimlar,users}) {

    useEffect(()=>{
        xodim()
    },[])


    function xodim(){
        getXodim(1)

    }

    const [input,setInput] = useState('')
    const [inputsearch,setinputsearch] = useState('')
    const history = useHistory();

    function deletex(item){
        console.log(item)
        deleteXodim(item.id)
        getXodim(1)
    }

    return (
        <div>
            <div className="col-md-12 pb-4 pt-4">
                <div className="textHeaderHR">
                    <div className="textBox">
                        <h2>Hodimlar ro'yxati</h2>
                        <p>Hodimlar boshqaruvi</p>
                    </div>
                </div>
                <div className="rowStyleHR">
                    <div className="qoshishHR">
                        <h5>Barcha hodimlar</h5>
                        <Link to={'/headerthird/hodimlarruyxati/taxrirlash'}>
                            <button className='btn btn-primary'>+Qo'shish</button>
                        </Link>
                    </div>
                    <div className="izlashHR">
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
                            <button><img src={Excel} alt=""/>Export Excel</button>
                            <button><img src={Print} alt=""/>Print</button>
                            <button><img src={Pdf} alt=""/>Export PDF</button>
                            <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                        </div>
                        <div className="izlashBox2">
                            <input type="text" placeholder='Izlash...'/>
                        </div>
                    </div>
                    <div className="table-responsive mb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Login</th>
                            <th>Ism</th>
                            <th>Familiyasi</th>
                            <th>Lavozim</th>
                            <th>Email</th>
                            <th>Amal</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                xodimlar.map((item,index)=><tr>
                                    <td>{item.username}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>

                                    <td>-</td>
                                    <td>
                                        <Link to={'/headerthird/hodimlarruyxati/taxrirlash'}>
                                            <button className='taxrirlash'><img src={Edit} alt=""/>Taxrirlash</button>
                                        </Link>
                                        <Link
                                            to={'/headerthird/hodimlarruyxati/view/' + input.username + '/' + input.firstName + '/' + input.lastName}>
                                            <button className='korish'><img src={Korish} alt=""/> Ko'rish</button>
                                        </Link>
                                            <button onClick={()=>deletex(item)} className='ochirish'><img src={Delete} alt=""/> O'chirish</button>
                                    </td>

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
                </div>
            </div>
        </div>
    )
}

export default
connect(({XodimReducer:{xodimlar}})=>({xodimlar}), {getXodim, saveXodim, editXodim,deleteXodim})
// connect(({users:{users}})=>({users}), )
(HodimlarRoyhati)
