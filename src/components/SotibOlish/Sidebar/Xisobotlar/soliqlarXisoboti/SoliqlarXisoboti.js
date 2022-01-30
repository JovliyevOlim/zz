import { Link,Switch,Route } from 'react-router-dom'
import HariddadiSoliqlar from './hariddagiSoliqlar/HariddadiSoliqlar'
import SotishdagiSoliqlar from './sotishdagiSoliqlar/SotishdagiSoliqlar'
import BoshqaSoliqlar from './boshqaSoliqlar/BoshqaSoliqlar'
import './soliqlarXisoboti.css'


export default function SoliqlarXisoboti() {
    return (
        <div className="col-md-12 mt-2">
        <div className="textHeader">
               <h2>Soliqlar xisoboti</h2>
               <p>Tanlangan sana oralig'idagi soliq tafsilotlari</p>
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
                             <h6>Aniq sanani belgilash:</h6>
                             <select name="" id="">
                                    <option value="">Bugun</option>
                                    <option value="">Oxirgi bir xafta</option>
                                    <option value="">Oxirgi bir oy</option>
                                    <option value="">Istalgan sanani tanlash</option>
                             </select>
                      </div>
               </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="rowStyle">
                    <div className="cardlar">
                        <p>JAMI XISOBOTLAR <br /> (kirim-chiqim xarajatlar):</p>
                        <h3>240 000 000 so'm</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="rowStyle">
                <Link to={'/headerthird/soliqlarXisoboti/harid'}><button className='btn btn-success '>Hariddagi soliqlar</button></Link>
                <Link to={'/headerthird/soliqlarXisoboti/sotish'}><button className='btn btn-primary m-2'>Sotishdagi soliqlar</button></Link>
                <Link to={'/headerthird/soliqlarXisoboti/boshqa'}><button className='btn btn-danger'>Boshqa soliqlar </button></Link>
               
                <Switch>
                    <Route path={'/headerthird/soliqlarXisoboti/harid'} component={HariddadiSoliqlar}/>
                    <Route path={'/headerthird/soliqlarXisoboti/sotish'} component={SotishdagiSoliqlar}/>
                    <Route path={'/headerthird/soliqlarXisoboti/boshqa'} component={BoshqaSoliqlar}/>
                </Switch>
        </div>
 </div>
    )
}
