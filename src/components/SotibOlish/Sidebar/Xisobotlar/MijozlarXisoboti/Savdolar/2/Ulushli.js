import CSV from '../../../../../../../img/CSV.png'
import Excel from '../../../../../../../img/Excel.png'
import Print from '../../../../../../../img/Print.png'
import Data from '../../../../../../../img/Data.png'
import Pdf from '../../../../../../../img/PDF.png'
import Edit from '../../../../../../../img/Edit.png'
import Delete from '../../../../../../../img/Delete.png'
function Ulushli(){
    return(
        <div>

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
                        <th>sana</th>
                        <th>Savdo raqamlari</th>
                        <th>Mijoz</th>
                        <th>Telefon raqami</th>
                        <th>Baza</th>
                        <th>To'lov statusi</th>
                        {/*<th>To'lov usuli</th>*/}
                        <th>Jami summa</th>
                        <th>To'langan summa</th>
                        <th>Qarz</th>

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
                        <td>200000</td>
                        <td>33222333</td>

                    </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default Ulushli