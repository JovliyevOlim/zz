import './third.css'
import store from '../../../img/Illustration 14.svg'
import shopping from '../../../img/shopping.svg'
import jamisavdo from '../../../img/jamisavdo.svg'
import arrowleft from '../../../img/arrow-left.svg'
import arrowright from '../../../img/arrow-right.svg'
import jami1 from '../../../img/jami1.svg'
import jami2 from '../../../img/Jami2.svg'
import jami3 from '../../../img/Jami3.svg'
import jami4 from '../../../img/JAmi4.svg'
import bozordanqarz from '../../../img/bozordanqarzim.svg'
import qarzdorlar from '../../../img/Qarzdorlardan.svg'
import evaset from '../../../img/Group.png'
import menu from '../../../img/menu.png'
import React, {useEffect, useRef} from 'react';
import Logo from "../../../img/Group.png";
import {useState} from "react";
import Chart from 'react-apexcharts'
import Pagination from "./Pagination";


function Third({display}) {






    const [third, setThird] = useState('')
    const chartOptions = {
        series: [
            {
                name: "Daromad",
                data: [100000, 400000, 250000, 300000, 450000, 150000, 250000]
            },
            {
                name: 'Harajat',
                data: [120000, 300000, 250000, 400000, 200000, 100000, 300000]
            }],
        options: {

            colors: ['#0044FF', '#FF9777'],

            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            yaxis: {

                min: 0,
                max: 500000
            },
            xaxis: {
                categories: [0, 5, 10, 15, 20, 25, 30, 35]
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: true
            }
        }
    }
    const [shophistory, setShophistory] = useState([
        {
            name: 'Buyurtmalar',
            jami: '1288',
            text: 'Jami buyurtmalar',
            foiz: '15%  oshdi',
            svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1"
                      d="M15.4807 10.7702L11.6907 15.8202H6.08072C5.12072 15.8202 4.64073 14.6602 5.32073 13.9802L10.5007 8.80023C11.3307 7.97023 12.6807 7.97023 13.5107 8.80023L15.4807 10.7702Z"
                      fill="#008000"/>
                <path
                    d="M17.9195 15.82H11.6895L15.4795 10.77L18.6895 13.98C19.3595 14.66 18.8795 15.82 17.9195 15.82Z"
                    fill="#008000"/>
            </svg>
        },
        {
            name: 'Xaridlar',
            jami: '579',
            text: "Jami haridlar",
            foiz: '8% oshdi',
            svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1"
                      d="M15.4807 10.7702L11.6907 15.8202H6.08072C5.12072 15.8202 4.64073 14.6602 5.32073 13.9802L10.5007 8.80023C11.3307 7.97023 12.6807 7.97023 13.5107 8.80023L15.4807 10.7702Z"
                      fill="#008000"/>
                <path
                    d="M17.9195 15.82H11.6895L15.4795 10.77L18.6895 13.98C19.3595 14.66 18.8795 15.82 17.9195 15.82Z"
                    fill="#008000"/>
            </svg>
        }

    ])
    const [diagramma, setDiagramm] = useState([
        {
            week: 'Du',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '90px', display: 'flex'}}></span>,
            span2: <strong>250</strong>
        },
        {
            week: 'Se',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '160px', display: 'flex'}}></span>,
            span2: <strong>250</strong>

        },
        {
            week: 'Cho',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '120px', display: 'flex'}}></span>,
            span2: <strong>250</strong>,

        },
        {
            week: 'Pa',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '130px', display: 'flex'}}></span>,
            span2: <strong>250</strong>

        },
        {
            week: 'Ju',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '110px', display: 'flex'}}></span>,
            span2: <strong>250</strong>

        },
        {
            week: 'Sha',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '180px', display: 'flex'}}></span>,
            span2: <strong>250</strong>

        },
        {
            week: 'Ya',
            span: <span className={'rounded-1 mb-1'}
                        style={{width: "25px", height: '100px', display: 'flex'}}></span>,
            span2: <strong>250</strong>

        },

    ])
    const [jami, setJami] = useState([
        {
            number: "2 400 000 so'm",
            foiz: "+10.23%",
            text: 'JAMI XARIDLAR',
            svg: <img src={shopping} alt={'shopping'}/>,
            svgfoiz: <img src={jami1} alt={'jami1'}/>
        },
        {
            number: "2 400 000 so'm",
            foiz: "+10.23%",
            text: 'JAMI SAVDO',
            svg: <img src={jamisavdo} alt={'jamisavdo'}/>,
            svgfoiz: <img src={jami2} alt={'jami2'}/>
        },
        {
            number: "2 400 000 so'm",
            foiz: "+10.23%",
            text: 'BOZORDAN QARZIM',
            svg: <img src={bozordanqarz} alt={'bozordanqarz'}/>,
            svgfoiz: <img src={jami3} alt={'jami3'}/>
        },
        {
            number: "2 400 000 so'm",
            foiz: "+10.23%",
            text: 'QARZDORLARDAN HAQIM',
            svgfoiz: <img src={jami4} alt={'jami4'}/>,
            svg: <img src={qarzdorlar} alt={'qarzdorlar'}/>,
        },
    ])
    const [active, Setactive] = useState(false)
    function sidebar() {
        if (third === '') {
            setThird('third2')
        } else {
            setThird('')

        }
    }
    const options = {
        series: [200000, 300000, 500000, 600000],
        chart: {
            type: 'donut'
        },

        labels: [" Uzcard", " Humo", " Naqd", " Turli to'lovlar"],
        colors: ["#B09FFF", "#FFD572", "#99FFA3", "#7AD3FF"],
        padding: 0,
        plotOptions: {
            pie: {
                customScale: 1,
                expandOnClick: false,
                name: {},
                donut: {
                    size: '55px',
                    labels: {
                        show: true,
                        showAlways: false,
                        fontSize: "12px"
                    }
                }
            }

        }

    }
    const series = [200000, 300000, 500000, 600000]


    return (
        <div className={`third  pt-4 ${display} ${third}`}>
            <div className="container-fluid gap">
                <div className="row p-0 d-flex colorback mb-3 rounded-3 justify-content-between">
                    <div className="col-md-9 p-2 ">
                        <div className="row align-items-center">
                            <div className="col-md-1 align-items-center">
                                <img className={'image'} src={store} alt=""/>
                            </div>
                            <div className="col-md-11 align-items-center">
                                <h4 className={'kitchen'}>Tokyo Kitchen</h4>
                                <p className={'kitchen'}>Sizni shaxsiy boshqaruv panelida yana ko'rganimizdan juda
                                    xursandmiz</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 align-items-center d-flex justify-content-around">
                        <button className={'kitchen-button'}>Xisobot</button>
                        <button className={'kitchen-button'}>Savdo oynasi</button>
                    </div>

                </div>
                <div className="row p-0 mb-3 d-flex justify-content-between jami">
                    {
                        jami.map((item, index) =>
                            <div key={index} className="col-3 margin">
                                <div className={'p-2'}>
                                    <div className="row p-0 colorback rounded-3">
                                        <div className="col-12 margin">
                                            <div
                                                className="row p-2 pb-0 d-flex marginb align-items-center justify-content-start">
                                                <div className="col-1">
                                                    {item.svg}
                                                </div>
                                                <div className="col-10">
                                                    <h4 className={'jami'}>{item.text}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 ">
                                            <div
                                                className="row p-2 pt-0 d-flex align-items-center justify-content-between">
                                                <div className="col-8 me-0 mt-3">
                                                    <p className={"raqam align-items-center"}>{item.number}</p>
                                                </div>
                                                <div className="col-4 text-center align-items-center">
                                                    <div
                                                        className="row p-1 d-flex mt-2   justify-content-between">
                                                        <div className="col-4 p-0 mb-1 foizsvg">
                                                            {item.svgfoiz}
                                                        </div>
                                                        <div className="col-8 p-0 mt-1">
                                                            <h4 className={'foiz colorpale '}>
                                                                {item.foiz}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>)
                    }

                </div>
                <div className="row p-0 d-flex colorback mb-3 rounded-3 justify-content-between">
                    <div className="col-6 pt-4 ps-4">
                        <h3 className={'diagramm-text'}>30 kunlik savdo statistikasi (so'm)</h3>
                    </div>
                    <div className="col-4  pt-3 p-4 offset-2">
                        <div className="row p-0 align-items-center  ">
                            <div className="col-12 pe-3 d-flex justify-content-end">
                                <div className={'selects-style'}>
                                    <select className={'selects'} form={'select'} id="select">
                                        <option value="1">Ushbu oy</option>
                                        <option value="2">O'tgan oy</option>
                                        <option value="3">Bugun</option>
                                    </select>
                                </div>
                                <div className={'btn-nuqta'}>
                                    <button className={'nuqta'}>...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                    </div>
                    <div className="row justify-content-between text-end ps-4">


                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type={'line'}
                            height='400px'
                        />

                    </div>

                </div>
                <div className="row p-0 mb-3 diagramm d-flex justify-content-between">
                    {
                        shophistory.map((item, index) =>
                            <div key={index} className="col-4 spandiagram1 margin">
                                <div className={'p-2'}>
                                    <div className="row   p-0 pe-3 colorback  rounded-3">
                                        <div className="col-6 pt-3 ps-4">
                                            <h3 className={'diagramm-text-one mt-1'}>{item.name}</h3>
                                        </div>
                                        <div className="col-5  pt-3 ps-3 offset-1">
                                            <div className="row p-0 align-items-center">
                                                <div className="col-12 d-flex justify-content-between">
                                                    <div className={'selects-style'}>
                                                        <select className={'selects'} name="" id="">
                                                            <option value="1">Ushbu oy</option>
                                                            <option value="2">O'tgan oy</option>
                                                            <option value="3">Bugun</option>
                                                        </select>
                                                    </div>
                                                    <div className={'btn-nuqta'}>
                                                        <button className={'nuqta'}>...</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-4 mt-3 ps-4">
                                            <h4>{item.jami}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                        <div
                                            className="col-4 mb-5 offset-2  d-flex align-items-center justify-content-end">
                                            {item.svg}
                                            <p className={'foizp'}>{item.foiz}</p>
                                        </div>

                                        <div className="col-12 margin">
                                            <div className="row p-0 align-items-baseline d-flex justify-content-around">

                                                {
                                                    diagramma.map((item, index) =>
                                                        <div key={index} className={'col-1 spandiagram'}>
                                                            {item.span2}
                                                            {item.span}
                                                            <p className={'fs-6 text-center'}>{item.week}</p>
                                                        </div>)
                                                }
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>)
                    }
                    <div className="col-4 spandiagram1 margin">
                        <div className={'p-2'}>
                            <div className="row align-items-center   p-0 pe-3 colorback  rounded-3">
                                <div className="col-7 pt-3 ps-4">
                                    <h3 className={'diagramm-text-one mt-1'}>To'lov usullari</h3>
                                </div>
                                <div className="col-5  pt-3 ps-3">
                                    <div className="row p-0 align-items-center">
                                        <div className="col-12 d-flex justify-content-between">
                                            <div className={'selects-style'}>
                                                <select className={'selects'} name="" id="">
                                                    <option value="1">Ushbu oy</option>
                                                    <option value="2">O'tgan oy</option>
                                                    <option value="3">Bugun</option>
                                                </select>
                                            </div>
                                            <div className={'btn-nuqta'}>
                                                <button className={'nuqta'}>...</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 p-0 mt-3">
                                    <Chart
                                        className={'p-0'}
                                        options={options}
                                        series={series}
                                        type={'donut'}
                                        width={390}
                                        height={390}
                                    />
                                </div>
                                <div className="col-md-12  p-3 bar-chart d-flex align-items-center mt-4">
                                    <h4>Jami Summa:</h4>
                                    <p>50 352 000 so'm</p>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>
                <div className="row p-0 mb-3 d-flex justify-content-between">
                    <div className="col-md-7">
                        <div className="row p-0 colorback">
                            <div className="col-6 pt-3 ps-3">
                                <h3 className={'diagramm-text-one'}>Ommabop mahsulotlar</h3>
                            </div>
                            <div className="col-5  pt-3 ps-3 offset-1">
                                <div className="row p-0 align-items-center">
                                    <div className="col-12 d-flex justify-content-end">
                                        <div className={'selects-style'}>
                                            <select className={'selects '} name="" id="">
                                                <option value="1">Ushbu oy</option>
                                                <option value="2">O'tgan oy</option>
                                                <option value="3">Bugun</option>
                                            </select>
                                        </div>
                                        <div className={'btn-nuqta'}>
                                            <button className={'nuqta'}>...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <Pagination/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 mb-3 d-flex">
                </div>
            </div>
        </div>
    );
}

export default Third;