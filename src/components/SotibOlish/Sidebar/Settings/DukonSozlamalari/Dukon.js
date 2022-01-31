import './dukon.css'
import {Link,Route,Switch} from "react-router-dom";
import Dukon1 from "./dukon/Dukon1";
import Soliq from "./soliq/Soliq";
import Mahsulot2 from "./maxsulot/Mahsulot2";
import Aloqa from "./aloqa/Aloqa";
import Savdo2 from "./savdo/Savdo2";
import SavdoOyna from "./SavdoOynasi/SavdoOyna";
import XaridlarDukonSozlama from "./XaridlarDukonSozlama/XaridlarDukonSozlama";
import BoshSahifaDukonSozlama from "./BoshSahifaDukonSozlama/BoshSahifaDukonSozlama";
import TizimKorinishiDukonSozlama from "./TizimKorinishiDukonSozlama/TizimKorinishiDukonSozlama";
import QisqaQoshimcha from "./QisqaQoshimcha/QisqaQoshimcha";
import EmailSozlama from "./eMailSozlama/EmailSozlama";

export default function Dukon() {
    return (
        <div className={'row'}>
            <h4 className={'text-center'}>Dukon sozlamalari</h4>
            <div className="col-md-12 d-flex mt-5">

                <div className="col-md-2 bbb">
                    <Link to={'/third/dukonSozlama/1'}><button className={'btn btn-outline-primary form-control mt-2'}>Do`kon</button></Link>
                    <Link to={'/third/dukonSozlama/2'}><button className={'btn btn-outline-primary form-control mt-2'}>Soliq</button></Link>
                    <Link to={'/third/dukonSozlama/3'}><button className={'btn btn-outline-primary form-control mt-2'}>Mahsulot</button></Link>
                    <Link to={'/third/dukonSozlama/4'}><button className={'btn btn-outline-primary form-control mt-2'}>Aloqa</button></Link>
                    <Link to={'/third/dukonSozlama/5'}><button className={'btn btn-outline-primary form-control mt-2'}>Savdo</button></Link>
                    <Link to={'/third/dukonSozlama/6'}><button className={'btn btn-outline-primary form-control mt-2'}>Savdo oynasi</button></Link>
                    <Link to={'/third/dukonSozlama/7'}><button className={'btn btn-outline-primary form-control mt-2'}>Xaridlar</button></Link>
                    <Link to={'/third/dukonSozlama/8'}><button className={'btn btn-outline-primary form-control mt-2'}>Bosh sahifa</button></Link>
                    <Link to={'/third/dukonSozlama/9'}><button className={'btn btn-outline-primary form-control mt-2'}>Tizim ko`rinishi</button></Link>
                    <Link to={'/third/dukonSozlama/10'}><button className={'btn btn-outline-primary form-control mt-2'}>Qisqa qo`shimcha</button></Link>
                    <Link to={'/third/dukonSozlama/11'}><button className={'btn btn-outline-primary form-control mt-2'}>Email sozlamalari</button></Link>
                    <Link to={'/third/dukonSozlama/12'}><button className={'btn btn-outline-primary form-control mt-2'}>Sms sozlamalari</button></Link>
                    <Link to={'/third/dukonSozlama/13'}><button className={'btn btn-outline-primary form-control mt-2'}>Ko`ponlar sozlamalari</button></Link>
                    <Link to={'/third/dukonSozlama/14'}><button className={'btn btn-outline-primary form-control mt-2'}>Qoshimcha qulayliklar</button></Link>
                    <Link to={'/third/dukonSozlama/15'}><button className={'btn btn-outline-primary form-control mt-2'}>Custom Labels</button></Link>
                </div>

                <Route path={'/third/dukonSozlama/1'} component={Dukon1}/>
                <Route path={'/third/dukonSozlama/2'} component={Soliq}/>
                <Route path={'/third/dukonSozlama/3'} component={Mahsulot2}/>
                <Route path={'/third/dukonSozlama/4'} component={Aloqa}/>
                <Route path={'/third/dukonSozlama/5'} component={Savdo2}/>
                <Route path={'/third/dukonSozlama/6'} component={SavdoOyna}/>
                <Route path={'/third/dukonSozlama/7'} component={XaridlarDukonSozlama}/>
                <Route path={'/third/dukonSozlama/8'} component={BoshSahifaDukonSozlama}/>
                <Route path={'/third/dukonSozlama/9'} component={TizimKorinishiDukonSozlama}/>
                <Route path={'/third/dukonSozlama/10'} component={QisqaQoshimcha}/>
                <Route path={'/third/dukonSozlama/11'} component={EmailSozlama}/>

            </div>
        </div>
    )
}