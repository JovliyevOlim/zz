import Search from '../../../../../img/search.png'
import './yangiOtkazma.css'


export default function YangiOtkazma() {
       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Yangi o'tkazma</h2>
                     </div>
                     <div className="rowStyleM">
                            <div className="row cont">
                                   <div className="col-md-6">
                                          <h6>Qisqa eslatma:</h6>
                                          <input type="text" placeholder='Eslatma...' />
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Status:</h6>
                                          <select name="" id="">
                                                 <option value="">Tanlash</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6">
                                          <h6>Bazadan(Amaldagi baza):</h6>
                                          <select name="" id="">
                                                 <option value="">Tanlash</option>
                                                 <option value=""></option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Bazaga(O'tkaziladigan baza):</h6>
                                          <select name="" id="">
                                                 <option value="">Tanlash</option>
                                                 <option value="">Shifer zavod</option>
                                                 <option value="">Instrumentlar</option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-12" >
                                          <div className="sana">
                                                 <h6>Sana:</h6>
                                                 <input type="date"/> 
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div className="rowStyle1">
                            <div className="qoshish">
                                   <h5>Maxsulot izlash</h5>
                            </div>
                            <div className="row">
                                   <div className="col-md-12">
                                          <div className='searchIcon'>
                                                 <div className="iconca">
                                                        <img src={Search} alt="" />
                                                 </div>
                                                 <input type="text" placeholder='Izlash...' />
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive">
                                   <table className='table table-striped table-bordered mt-4 '>
                                          <thead>
                                                 <tr>
                                                 <th>Maxsulot</th> 
                                                 <th>Miqdori</th> 
                                                 <th>Narxi</th> 
                                                 <th>Jami</th>
                                                 <th>O'chirildi</th> 
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 </tr>
                                          </tbody>
                                   </table>
                            </div>

                            <div className="row cont">
                                   <div className="col-md-6">
                                          <h6>Yo'lkira xaqi:</h6>
                                          <input type="text"  />
                                   </div>
                                   <div className="col-md-6">
                                          <h6>Qisqa eslatma:</h6>
                                          <input type="text" placeholder='Eslatma...'/>
                                   </div>
                            </div>

                            <div className='saqlash'>
                                   <button className='btn btn-primary'>Saqlash</button>
                            </div>
                     </div>
              </div>
       )
}
