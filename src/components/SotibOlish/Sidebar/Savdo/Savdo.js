import down from '../../../../img/arrow-down-1.svg'
import mahsulot from '../../../../img/box-tick.svg'
import './savdo.css'
import {useState} from 'react'
import {Switch,Route,Link} from 'react-router-dom'

function Savdo() {

    const [active,setActive] = useState(false);


    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        setActive(!active)
        if(classs===''){
            setClasss('right2')
            setfill('stroke')
            setfontsize('fontsize')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
        }
    }

    return(
        <div className={'row mahsulot'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>
                    <svg className={`sidebar-img2 ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6998 22.7487H9.29977C4.35977 22.7487 2.25977 20.6387 2.25977 15.7087V11.2188C2.25977 10.8088 2.59977 10.4688 3.00977 10.4688C3.41977 10.4688 3.75977 10.8088 3.75977 11.2188V15.7087C3.75977 19.7987 5.20977 21.2487 9.29977 21.2487H14.6898C18.7798 21.2487 20.2298 19.7987 20.2298 15.7087V11.2188C20.2298 10.8088 20.5698 10.4688 20.9798 10.4688C21.3898 10.4688 21.7298 10.8088 21.7298 11.2188V15.7087C21.7398 20.6387 19.6298 22.7487 14.6998 22.7487Z" fill="#292D32"/>
                        <path d="M11.999 12.75C10.899 12.75 9.89902 12.32 9.18902 11.53C8.47902 10.74 8.14902 9.71 8.25902 8.61L8.92903 1.93C8.96903 1.55 9.28903 1.25 9.67903 1.25H14.349C14.739 1.25 15.059 1.54 15.099 1.93L15.769 8.61C15.879 9.71 15.549 10.74 14.839 11.53C14.099 12.32 13.099 12.75 11.999 12.75ZM10.349 2.75L9.74902 8.76C9.67902 9.43 9.87903 10.06 10.299 10.52C11.149 11.46 12.849 11.46 13.699 10.52C14.119 10.05 14.319 9.42 14.249 8.76L13.649 2.75H10.349Z" fill="#292D32"/>
                        <path d="M18.31 12.75C16.28 12.75 14.47 11.11 14.26 9.09L13.56 2.08C13.54 1.87 13.61 1.66 13.75 1.5C13.89 1.34 14.09 1.25 14.31 1.25H17.36C20.3 1.25 21.67 2.48 22.08 5.5L22.36 8.28C22.48 9.46 22.12 10.58 21.35 11.43C20.58 12.28 19.5 12.75 18.31 12.75ZM15.14 2.75L15.76 8.94C15.89 10.19 17.05 11.25 18.31 11.25C19.07 11.25 19.75 10.96 20.24 10.43C20.72 9.9 20.94 9.19 20.87 8.43L20.59 5.68C20.28 3.42 19.55 2.75 17.36 2.75H15.14V2.75Z" fill="#292D32"/>
                        <path d="M5.63904 12.75C4.44904 12.75 3.36904 12.28 2.59904 11.43C1.82904 10.58 1.46904 9.46 1.58904 8.28L1.85904 5.53C2.27904 2.48 3.64904 1.25 6.58905 1.25H9.63904C9.84904 1.25 10.049 1.34 10.199 1.5C10.349 1.66 10.409 1.87 10.389 2.08L9.68904 9.09C9.47904 11.11 7.66904 12.75 5.63904 12.75ZM6.58905 2.75C4.39904 2.75 3.66904 3.41 3.34904 5.7L3.07904 8.43C2.99904 9.19 3.22904 9.9 3.70904 10.43C4.18904 10.96 4.86904 11.25 5.63904 11.25C6.89904 11.25 8.06904 10.19 8.18904 8.94L8.80905 2.75H6.58905V2.75Z" fill="#292D32"/>
                        <path d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V19.5C8.75 17.4 9.9 16.25 12 16.25C14.1 16.25 15.25 17.4 15.25 19.5V22C15.25 22.41 14.91 22.75 14.5 22.75ZM10.25 21.25H13.75V19.5C13.75 18.24 13.26 17.75 12 17.75C10.74 17.75 10.25 18.24 10.25 19.5V21.25Z" fill="#292D32"/>
                    </svg>
                    <h4 className={`sidebar-text ${fontsiza}`}>Savdo</h4>
                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            {
                active?<ul>
                    {/*<li><Link to={'/mahsulotRuyxati'} className={'mahqosh'}>Barcha savdolar</Link></li>*/}
                    <li><Link to={'/headerthird/mahsulotQoshish'} className={'mahqosh'}>Savdo qo`shish</Link></li>
                    {/*<li><Link to={'/mahsulotShtrix'} className={'mahqosh'}>SAVDO</Link></li>*/}
                    <li><Link to={'/headerthird/turliTavar'} className={'mahqosh'}>Savdo oynasi</Link></li>
                    {/*<li><Link to={'/mahsulotImporti'} className={'mahqosh'}>lang_v1_add_draft</Link></li>*/}
                    {/*<li><Link to={'/mavjudImport'} className={'mahqosh'}>Eslatmalar ro`yxati</Link></li>*/}
                    {/*<li><Link to={'/sotuvNarxGuruhlanishi'} className={'mahqosh'}>lang_v1.add_quotation</Link></li>*/}
                    {/*<li><Link to={'/ulcovBirliklar'} className={'mahqosh'}>Iqtiboslar ruyxati</Link></li>*/}
                    {/*<li><Link to={'/bolimlar'} className={'mahqosh'}>Qaytarilgan savdolar</Link></li>*/}
                    {/*<li><Link to={'/fermalar'} className={'mahqosh'}>Yuklar</Link></li>*/}
                    {/*<li><Link to={'/kafolat'} className={'mahqosh'}>Chegirmalar</Link></li>*/}
                </ul>:''
            }
        </div>
    )
}
export default Savdo
