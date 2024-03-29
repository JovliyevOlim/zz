import down from '../../../../img/arrow-right2.svg'
import hamkor from '../../../../img/notification.png'
import './hamkorlar.css'
import {useState} from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import {connect} from "react-redux";
import {active} from "../../../../reducer/functionreducer";
function Hamkorlar({active}) {

    const [active2,setActive] = useState(false);
    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        setActive(!active2)
        if(classs===''){
            setClasss('right2')
            setfill('fill')
            setfontsize('fontsize')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
        }
    }
    function sidebaractive(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
    }

    return(
        <div className={'row hamkor'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>
                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9695 14.44C18.3395 14.67 19.8495 14.43 20.9095 13.72C22.3195 12.78 22.3195 11.24 20.9095 10.3C19.8395 9.59001 18.3095 9.35 16.9395 9.59" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.96852 7.16C6.02852 7.15 6.09852 7.15 6.15852 7.16C7.53852 7.11 8.63852 5.98 8.63852 4.58C8.63852 3.15 7.48852 2 6.05852 2C4.62852 2 3.47852 3.16 3.47852 4.58C3.48852 5.98 4.58852 7.11 5.96852 7.16Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.99945 14.44C5.62945 14.67 4.11945 14.43 3.05945 13.72C1.64945 12.78 1.64945 11.24 3.05945 10.3C4.12945 9.59001 5.65945 9.35 7.02945 9.59" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.47 11.9101 9.47C13.3401 9.47 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.0907 17.78C7.6807 18.72 7.6807 20.26 9.0907 21.2C10.6907 22.27 13.3107 22.27 14.9107 21.2C16.3207 20.26 16.3207 18.72 14.9107 17.78C13.3207 16.72 10.6907 16.72 9.0907 17.78Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className={`sidebar-text ${fontsiza}`}>Hamkorlar</h4>
                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            {
                active2 ?<ul>
                    <li onClick={sidebaractive}><Link className={'li-text'} to={'/headerthird/taminotchilar'}>Taminotchilar</Link></li>
                    {/*<li onClick={sidebaractive}><Link className={'hamkorlar'} to={'/mijozlar'}>Mijozlar</Link></li>*/}
                    <li onClick={sidebaractive}><Link className={'li-text'} to={'/headerthird/mijozlarGuruhi'}>Mijozlar guruxlari</Link></li>
                    {/*<li onClick={sidebaractive}><Link className={'hamkorlar'} to={'/malumotTiklash'}>Malumotlarni tiklash</Link></li>*/}
                </ul>:''
            }

        </div>
    )
}
export default connect(({functionreducer:{func}})=>({func}), {active}) (Hamkorlar)