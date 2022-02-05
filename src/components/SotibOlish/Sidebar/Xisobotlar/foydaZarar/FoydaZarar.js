import './foydaZarar.css'
import {connect} from "react-redux";
import {useEffect} from "react";
import {deleteFoydaZarar, editFoydaZarar, getFoydaZarar, saveFoydaZarar} from "../reducer/FoydaZararReducer";

function FoydaZarar({getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar}) {

       useEffect(()=>{
              getFoydaZarar()
       })

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeaderF">
                     <h2>Foyda va Zarar</h2>
                     </div>
                     <div className="rowStyleF">
                            <div className="izlashF">
                                   <div className="row">
                                          <div className="col-md-6 ">
                                                 <h6>Baza tanlash:</h6>
                                                 <select name="" id="" >
                                                        <option value="" >Barcha bazalar</option>
                                                        <option value=""></option>
                                                        <option value=""></option>
                                                 </select>
                                          </div>
                                          <div className="col-md-6">
                                                 <h6>Aniq sanani belgilash:</h6>
                                                 <select name="" id="">
                                                        <option value="" hidden> Aniq sana belgilash</option>
                                                        <option value="">Bugun</option>
                                                        <option value="">Oxirgi 1 hafta</option>
                                                        <option value="">Oxirgi 1 oy</option>
                                                        <option value="">Istalgan sanani tanlash</option>
                                                 </select>
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive">
                            <table className='table table-striped table-bordered mt-4'>
                                   <thead>
                                          <tr>
                                                 <th>Maxsulot sotib olish narxi(sum)</th>
                                                 <th>Maxsulot sotish narxi(sum)</th>
                                                 <th>Umumiy qoladigan foyda(sum) </th>
                                                 <th>Qilingan xarajat</th>
                                                 <th>Sof foyda(sum)</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr>
                                                 <td>1500000</td>
                                                 <td>2000000</td>
                                                 <td>300000</td>
                                                 <td>50000</td>
                                                 <td>100000</td>
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
export default connect(({FoydaZararReducer:{foydazarar}})=>({foydazarar}),{getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar}) (FoydaZarar)