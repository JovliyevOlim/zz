import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import './sotishdagiSoliqlar.css'

export default function SotishdagiSoliqlar() {
    return (
        <div className="col-md-12 mt-2">
        <div className="rowStyleSotish">
            <h5>Sotishdagi soliqlar</h5>
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
               <table className='table table-striped table-bordered mt-4'>
                      <thead>
                             <tr>
                                    <th>Sana</th>
                                    <th>Savdo raqami</th>
                                    <th>Mijoz</th>
                                    <th>Soliq</th>
                                    <th>Jami summa</th>
                                    <th>To'lov usuli</th>
                             </tr>
                      </thead>
                      <tbody>
                             <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
