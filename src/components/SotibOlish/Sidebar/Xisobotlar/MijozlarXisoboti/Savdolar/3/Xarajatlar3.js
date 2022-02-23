import {useEffect, useState} from 'react'
import CSV from '../../../../../../../img/CSV.png'
import Excel from '../../../../../../../img/Excel.png'
import Print from '../../../../../../../img/Print.png'
import Data from '../../../../../../../img/Data.png'
import Pdf from '../../../../../../../img/PDF.png'
import Edit from '../../../../../../../img/Edit.png'
import Delete from '../../../../../../../img/Delete.png'
import './xarajat.css'
import {connect} from "react-redux";
import XarajatlarReducer, {
    deleteXarajatlar,
    editXarajatlar,
    getXarajatlar,
    saveXarajatlar
} from "../../../../Xarajatlar/reducer/XarajatlarReducer";

function Xarajatlar3({XarajatlarReducer,getXarajatlar}){

    const [input,setInput] = useState(
        {
            view:'',
            izlash:'',
        }
    )

    function view(e){
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getXarajatlar()
    },[])
    return(
        <div className='rowStyleXT'>
             <div className="qoshish">
                    <h5>Xarajatlar</h5>
            </div>
            <div className="izlashXT">
                <div className="izlashBox1">
                    <p>Ko'rsatildi</p>
                    <select value={input.view} onChange={view} name="" id="">
                        <option value="">25</option>
                        <option value="">500</option>
                        <option value="">1,000</option>
                        <option value="">All</option>
                    </select>
                    <button> <img src={CSV} alt="" /> Export CSV</button>
                    <button><img src={Excel} alt="" /> Export Excel</button>
                    <button><img src={Print} alt="" /> Print</button>
                    <button><img src={Pdf} alt="" />Export PDF</button>
                    <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                </div>
                <div className="izlashBox2">
                    <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                </div>
                
            </div>
            <div className="table-responsive">
                <table className='table table-striped table-bordered mt-4 '>
                    <thead>
                    <tr>
                        <th>outlayCategoryId</th>
                        <th>totalSum</th>
                        <th>branchId</th>
                        <th>spenderId</th>
                        <th>description</th>
                        <th>date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        XarajatlarReducer.xarajatlar.map(item=><tr key={item.id}>
                            <td>{item.outlayCategoryId}</td>
                            <td>{item.branchId}</td>
                            <td>{item.spenderId}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connect((XarajatlarReducer),{getXarajatlar,
    saveXarajatlar,editXarajatlar,deleteXarajatlar}) (Xarajatlar3)
