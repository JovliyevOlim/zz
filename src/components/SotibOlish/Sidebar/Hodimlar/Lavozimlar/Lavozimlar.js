import React from 'react'
import "./lavozimlar.css"
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {Switch, Link, Route} from 'react-router-dom'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getLavozim, saveLavozim, editLavozim, deleteLavozim} from "../reducer/LavozimReducer";

function Lavozimlar({getLavozim, saveLavozim, deleteLavozim, editLavozim, lavozimlar}) {

    useEffect(() => {
        getLavozim()
    })

    return (
        <div>
            <div>
                <div className="col-md-12 ">
                    <div className="textHeader">
                        <h2>Lavozimlar</h2>
                        <p>Lavozimlar boshqaruvi</p>
                    </div>
                    <div className="rowStyle">
                        <div className="qoshish">
                            <h5>Barcha lavozimlar</h5>
                            <Link to={'/headerthird/lavozimlar/taxrirlash'}>
                                <button className='btn btn-primary'>+Qo'shish</button>
                            </Link>
                        </div>
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

                            <input type="text" placeholder='Izlash...'/>
                        </div>

                        <table className='table table-striped table-bordered mt-4'>
                            <thead>
                            <tr>
                                <th>Lavozimlar</th>
                                <th>Amal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                lavozimlar.map(item => <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={'/headerthird/lavozimlar/taxrirlash'}>
                                            <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash</button>
                                        </Link>
                                        <button className='ochirish'><img src={Delete} alt=""/> O'chirish</button>
                                    </td>
                                </tr>)
                            }

                            </tbody>
                        </table>

                        <p>Ko'rsatildi 1 ta sahifa 2 va yana 2 ta sahifa bor</p>
                        <div className='sahifalar'>
                            <button>Ortga</button>
                            <button>1</button>
                            <button>Oldinga</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(({LavozimReducer: {lavozimlar}}) => ({lavozimlar}), {
    getLavozim,
    saveLavozim,
    deleteLavozim,
    editLavozim
})(Lavozimlar)