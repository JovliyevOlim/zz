import './header.css'
import imgMenu from '../../../img/menu.png'
import imgCalc from '../../../img/calculator.png'
import imgNot from '../../../img/notification.png'
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import {active} from "../../../reducer/functionreducer";
import Calculator from "./Calculator/Calculator";


function Header({active}) {

    useEffect(()=>{
        setCalactive(false)
    },[])

    const [calactive,setCalactive] = useState(false)

    function calchange(){
        setCalactive(!calactive)
    }
    function sidebar() {
        active(false)
        console.log('akfla')
    }

    return(
       
        <div className={'container-fluid padding-10 position-relative'}>
            <div className={'row colorback justify-content-between pb-2 mb-1 align-items-center'}>
                <div className="col-md-6 one d-flex">
                    <img onClick={sidebar}
                         src={imgMenu}  className={'im1'} alt=""/>
                </div>
                <div className="col-md-4 two">
                    <div className={'img2img3'}>
                        <img src={imgCalc} onClick={calchange} className={'im2'} alt=""/>
                        <img src={imgNot}  className={'im3'} alt=""/>
                        {
                            calactive ? <Calculator/> :''
                        }
                    </div>
                    <div className="imgUser">
                    </div>
                    <select className={'profil'} name="" id="">
                        <option value='none'> </option>
                        <option value="#">Profile</option>
                        <option value="#">About Me</option>
                        <option value="#">My Cabinet</option>
                    </select>
                </div>


            </div>
        </div>
    )
}
export default connect(({functionreducer: {functions}}) => ({functions}),{active}) (Header)
