import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './qoldiqlarXisoboti.css'


export default function QoldiqlarXisoboti() {
    return (
        <div className="col-md-12 mt-2">
        <div className="textHeader">
               <h2>Qoldiqlar xisoboti</h2>
        </div>
        <div className="rowStyleM">
               <div className="qoshish">
                      <h5>Filtirlash</h5>
               </div>
               <div className="row cont">
                      <div className="col-md-6">
                             <h6>Baza:</h6>
                             <select name="" id="">
                                    <option value="">Barchasi</option>
                                    <option value=""></option>
                                    <option value=""></option>
                             </select>
                      </div>
                      <div className="col-md-6">
                             <h6>Bo'limlar:</h6>
                             <select name="" id="">
                                    <option value="">Barchasi</option>
                                    <option value=""></option>
                                    <option value=""></option>
                             </select>
                      </div>
               </div>
               <div className="row">
                      <div className="col-md-6">
                             <h6>Firma:</h6>
                             <select name="" id="">
                                    <option value="">Barchasi</option>
                                    <option value="">Boshliq</option>
                             </select>
                      </div>
                      <div className="col-md-6">
                             <h6>Bo'lim ichida bo'lim:</h6>
                                    <select name="" id="">
                                           <option value="">Barchasi</option>
                                    </select>
                      </div>
               </div>
               <div className="row">
                      <div className="col-md-6" >
                            <h6>O'lchov birligi:</h6>
                            <select name="" id="">
                                <option value="">Barchasi</option>
                                <option value=""></option>
                            </select>
                      </div>
                      <div className="col-md-6">
                                    <h6>Faqat ishlab chiqarilgan maxsulotlar:</h6>
                             <div className="obuna">
                             <input type="checkbox"/>
                             </div>
                      </div>
               </div>
        </div>

        <div className="row">
            <div className="col-md-3">
                <div className="rowStyle">
                    <div className="cardlar">
                        <p>BAZADAGI TOVARLAR SUMMASI <br /> (sotib olish narxida):</p>
                        <h3>240 000 000 so'm</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="rowStyle">
                <div className="cardlar">
                        <p>BAZADAGI TOVARLAR SUMMASI <br /> (sotish narxida):</p>
                        <h3>2 400 000 so'm</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="rowStyle">
                <div className="cardlar">
                        <p>FOYDA:</p>
                        <h3>2 400 000 so'm</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="rowStyle">
                <div className="cardlar">
                        <p>FOYDA FOIZGA HISOBLANGANDA:</p>
                        <h3>98%</h3>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="rowStyle">
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
               <div className="table-responsive mb-4">
                      <table className='table table-striped table-bordered mt-4 '>
                             <thead>
                                    <tr>
                                           <th>Maxsulot</th>
                                           <th>Baza</th>
                                           <th>Narxi</th>
                                           <th>Qolgan maxsulot</th>
                                           <th>Xozir qolgan miqdori(sotib olish narxida)</th>
                                           <th>Xozir qolgan miqdori(sotish narxida)</th>
                                           <th>Foyda(sum)</th>
                                           <th>Sotilgan miqdori</th>
                                           <th>O'tkazilganlik miqdori</th>
                                    </tr>
                             </thead>
                             <tbody>
                                    <tr>
                                           <td>Soda</td>
                                           <td>baza nomi</td>
                                           <td>10000</td>
                                           <td>10</td>
                                           <td>4</td>
                                           <td>7000</td>
                                           <td>12000</td>
                                           <td>2000</td>
                                           <td>12</td>
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
