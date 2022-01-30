import "./maxsulotlarRoyxati.css"
import { Link ,Switch,Route} from "react-router-dom"
import BarchaMaxsulotlar from "../../Maxsulotlar/MahsulotlarRuyxati/barchaMaxsulotlar/BarchaMaxsulotlar"
import QoldiqlarXisoboti from "../../Maxsulotlar/MahsulotlarRuyxati/qoldiqlarXisoboti/QoldiqlarXisoboti"
import React from "react";

export default function MaxsulotlarRoyxati() {


       return (
              <div className="col-md-12 mt-2 ">
                            <div className="textHeader">
                                <h2>Maxsulotlar</h2>
                                <p>Maxsulotlarni boshqarish</p>
                            </div>
                            <div className="rowStyleMax colorback">
                                   <div className="qoshish">
                                          <h5>Filtirlash</h5>
                                   </div>
                                   <div className="row cont">
                                          <div className="col-md-4">
                                                        <h6>Maxsulot turi:</h6>
                                                        <select name="" id="">
                                                               <option value="">Barchasi</option>
                                                               <option value="">Bir turli</option>
                                                               <option value="">Turli xil</option>
                                                               <option value="">Komplekt</option>
                                                        </select>
                                          </div>
                                          <div className="col-md-4">
                                                         <h6>Bo'lim:</h6>
                                                        <select name="" id="">
                                                               <option value="">Barchasi</option>
                                                        </select>
                                           </div>
                                          <div className="col-md-4">
                                                         <h6>O'lchov birligi:</h6>
                                                        <select name="" id="">
                                                               <option value="">Barchasi</option>
                                                               <option value="">Pieces(Pc(s))</option>
                                                               <option value="">KG(kg)</option>
                                                               <option value="">Dona(dona)</option>
                                                        </select>
                                          </div>
                                   </div>
                                   <div className="row mt-4">
                                          <div className="col-md-4">
                                                        <h6>Soliq:</h6>
                                                         <select name="" id="">
                                                              <option value="">Barchasi</option>
                                                        </select>
                                          </div>
                                          <div className="col-md-4">
                                                        <h6>Firma:</h6>
                                                         <select name="" id="">
                                                              <option value="">Barchasi</option>
                                                        </select>
                                          </div>
                                          <div className="col-md-4">
                                                         <h6>Baza:</h6>
                                                         <select name="" id="">
                                                              <option value="">Barchasi</option>
                                                              <option value="">Mavjud emas</option>
                                                              <option value="">Shifer zavod</option>
                                                              <option value="">Instrumentlar</option>
                                                        </select>
                                          </div>
                                   </div>
                                   <div className="row">
                                          <div className="col-md-12">
                                                 <div className="chescbox">
                                                        <input type="checkbox" id={'d'}/>
                                                     <label htmlFor={'d'}><h6>Sotuvda emas</h6></label>
                                                 </div>
                                          </div>
                                   </div>
                                   <hr />
                                   <div className="bynBarchMax">
                                          <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot'}><button className="btn btn-success m-2">Barcha maxsulotlar</button></Link>
                                          <Link to={'/headerthird/mahsulotRuyxati/qoldiqXisobot'}><button className="btn btn-primary">Qoldiqlar xisoboti</button></Link>
                                   </div>
                                <Route path={'/headerthird/mahsulotRuyxati/barcaMahsulot'} component={BarchaMaxsulotlar}/>
                                <Route path={'/headerthird/mahsulotRuyxati/qoldiqXisobot'} component={QoldiqlarXisoboti}/>

                            </div>
                     </div>
       )
}
