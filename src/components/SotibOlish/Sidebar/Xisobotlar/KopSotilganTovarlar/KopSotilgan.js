import './kopsotilgan.css';
import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Chart from "react-apexcharts";

export default function KopSotilgan(props) {
    const {mijoz,dukon,summa,eslatma} = props.match.params
    const [input,setInput] = useState(
        {
            mijoz: 'React',
            dukon: 'korzinka',
            summa: '13',
            eslatma:'joylashadi'
        }
    )
    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    const chartOptions = {
        series: [
            {
                name: "Kop sotilgan miqdor",
                data: [100000, 400000, 250000, 300000, 450000, 150000]
            },
            {
                name: 'Harajat',
                data: [120000, 300000, 250000, 400000, 200000, 100000]
            }
            ],
        options: {
            color: ['#ffffff', '#ff9777'],
            chart: {
                background: "transparent"
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
                categories: [0, 5, 10, 15, 20, 25, 30]
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: true
            }
        }
    };

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeader">
                <h2>Ko`p sotilgan tovarlar</h2>
            </div>
            <div className="rowStyleH">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <input type="text" className={'form-control'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>Bo`lim:</h6>
                        <select name="" id="" >
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Bo`lim ichida bo`lim:</h6>
                        <select name="" id="" >
                            <option value="">Tanlash</option>
                            <option value="">Shefir zavod</option>
                            <option value="">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Ferma:</h6>
                        <select name="" id="" >
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>

                    <div className="col-md-12 d-flex">
                        <div className="col-md-3">
                            <label htmlFor={'olcov1'}>O`lchov birligi</label>
                            <select name="" id={'olcov1'}>
                                <option value="#">Barchasi</option>
                                <option value="#">Pc(s)</option>
                                <option value="#">Kg</option>
                                <option value="#">Dona</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor={'olcov2'}>O`lchov birligi</label>
                            <select name="" id={'olcov2'}>
                                <option value="#">Sanani belgilang</option>
                                <option value="#">Bugun</option>
                                <option value="#">Kecha</option>
                                <option value="#">Oxirgi 7 kun</option>
                                <option value="#">Oxirgi oy</option>
                                <option value="#">Oxirgi yil</option>
                                <option value="#">Siz istagan sana</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor={'olcov3'}>O`lchov birligi</label>
                            <input type="text" id={'olcov3'} className={'form-control'}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor={'olcov4'} >O`lchov birligi</label>
                            <select name="" id={'olcov4'}>
                                <option value="#">Barchasi</option>
                                <option value="#">Bir tuliq</option>
                                <option value="#">Turli xil</option>
                                <option value="#">Komplekt</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowStyleH2">

                <div className="row justify-content-between text-end ps-4">


                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type={'line'}
                        height='400px'
                    />

                </div>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>
            </div>
        </div>
    )
}
