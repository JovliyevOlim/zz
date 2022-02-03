import React from "react";
import Logo from '../../img/LOGO.png'
import './header.css'

function Header() {
    return(

            <div className={'header__ '}>
                <div className="homebody">
                    <div className="image__ ">
                        <a href="#"><img src={Logo} alt=""/></a>
                    </div>
                    <div className="header-narx">
                        <div className={'header-menu'}>
                            <a href="#">Narxlar</a>
                            <select name="" id="" >
                                <option value="#">Uzbekcha</option>
                                <option value="#">Rus</option>
                                <option value="#">English</option>
                            </select>
                        </div>

                        <button className={'btn btn-blue'}>Sotib olish</button>
                    </div>
                </div>
            </div>

    )
}
export default  Header