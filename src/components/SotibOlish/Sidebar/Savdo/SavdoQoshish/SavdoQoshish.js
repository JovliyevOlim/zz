import {Modal,ModalFooter,ModalBody,ModalHeader} from "reactstrap";
import {useState} from 'react'
function SavdoQoshish(){

    const [input,setInput] = useState(
        {
            savdoqoshish:'',
            mijoz:'',
            tulovmuddati:'',
            tulovmuddatitanlash:'',
            savdooynasisana:'',
            status:'',
            xisobfakturasxemasi:'',
            savdoraqami:'',
            qoshimchaxujjat:'',
            maxsulotnomishtrix:'',
            avans:'',
            paidon:'',
            tulovusuli:'',
            eslatma:'',
        }
    )
    function savdoqoshish(e){
        input.savdoqoshish = e.target.value
        let a = {...input}
        setInput(a)
    }
    function mijoz(e){
        input.mijoz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovmuddati(e){
        input.tulovmuddati = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovmuddatitanlash(e){
        input.tulovmuddatitanlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdooynasisana(e){
        input.savdooynasisana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function status(e){
        input.status = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xisobfakturasxemasi(e){
        input.xisobfakturasxemasi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdoraqami(e){
        input.savdoraqami = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qoshimchaxujjat(e){
        input.qoshimchaxujjat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function maxsulotnomishtrix(e){
        input.maxsulotnomishtrix = e.target.value
        let a = {...input}
        setInput(a)
    }
    function avans(e){
        input.avans = e.target.value
        let a = {...input}
        setInput(a)
    }
    function paidon(e){
        input.paidon = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovusuli(e){
        input.tulovusuli = e.target.value
        let a = {...input}
        setInput(a)
    }
    function eslatma(e){
        input.eslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    return(
        <div className={'row mt-5'}>
            <div className="col-md-10 offset-1">
                <h5>Savdo qo`shish</h5>
                <select name="" value={input.savdoqoshish} onChange={savdoqoshish}>
                    <option value="#">Shefir zavod(Bl001)</option>
                    <option value="#">Instrumentlar(Bl002)</option>
                </select>
            </div>

            <div className="col-md-10 offset-1 d-flex p-4 border mt-5">
                <div className="col-md-4">
                    <label htmlFor={'mijoz'}>Mijoz</label>
                    <input type="text" id={'mijoz'} value={input.mijoz} onChange={mijoz} className={'form-control'}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor={'muddat'}>To`lov muddati</label>
                    <div className={'d-flex'}>
                        <input type="number" value={input.tulovmuddati} onChange={tulovmuddati} className={'form-control'}/>
                        <select name="" id="" className={'form-control'} value={input.tulovmuddatitanlash} onChange={tulovmuddatitanlash}>
                            <option value="#">Tanlash</option>
                            <option value="#">Oy</option>
                            <option value="#">Hafta</option>
                        </select>
                    </div>
                    <label htmlFor={'stat'} className={'mt-4'}>Status</label>
                    <select value={input.status} onChange={status} name="" id="" className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Final</option>
                    </select>

                    <label htmlFor={'savRaqam'} className={'mt-4'}>Savdo raqami</label>
                    <input type="number" value={input.savdoraqami} onChange={savdoraqami} className={'form-control'} placeholder={'savdo raqami'}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor={'savOyna'}>Savdo oynasi</label>
                    <input type="date" value={input.savdooynasisana} onChange={savdooynasisana} className={'form-control'}/>

                    <label htmlFor={'hisobF'} className={'mt-4'}>Xisob Faktura sxemasi</label>
                    <select name="" value={input.xisobfakturasxemasi} onChange={xisobfakturasxemasi} id={'hisobF'} className={'form-control'}>
                        <option value="#">Default</option>
                    </select>

                    <label htmlFor={'qoshim'} className={'mt-4'}>Qo`shimcha hujjat</label>
                    <input type="file" value={input.qoshimchaxujjat} onChange={qoshimchaxujjat} className={'form-control'} id={'qoshim'}/>
                </div>
            </div>

            <div className="col-md-10 mt-4 offset-1 border p-4">
                <div className="col-md-6 offset-3 d-flex">
                    <input type="text" value={input.maxsulotnomishtrix} onChange={maxsulotnomishtrix} className={'form-control'} placeholder={'mahsulot nomi yoki shtrix kodini yozing'}/>
                    <h5 style={{fontSize:'32px',cursor:'pointer'}}>+</h5>
                </div>
                <div className="table-responsive">
                <table className={'table mt-4'}>
                    <thead>
                        <tr>
                            <th>Mahsulot</th>
                            <th>Miqdori</th>
                            <th>Narxi</th>
                            <th>Discount</th>
                            <th>Jami</th>
                            <th>x</th>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>

            <div className="col-md-10 offset-1 mt-4 border p-4">
                <h5 className={'text-center mt-5'}>To`lov qilish</h5>
                <div className="col-md-10 offset-1 border p-4 d-flex">
                    <div className="col-md-6">
                        <label htmlFor={'avans'}>Avans 0 / To`lov so`mmasi</label>
                        <input type="text" value={input.avans} onChange={avans} className={'form-control'} id={'avans'}/>
                        <label className={'mt-3'} htmlFor={'tol'}>To`lov usuli</label>
                        <select name="" id={'tol'} className={'form-control'} value={input.tulovusuli} onChange={tulovusuli}>
                            <option value="#">Naqd</option>
                            <option value="#">Pastik</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor={'paid'}>Paid on</label>
                        <input type="date" value={input.paidon} onChange={paidon} className={'form-control'} id={'paid'}/>
                        <label htmlFor={'area1'} className={'mt-2'}>Eslatma</label>
                        <textarea name="" id={'area1'} cols="30" value={input.eslatma} onChange={eslatma} className={'form-control'} rows="2">
                    </textarea>
                    </div>
                </div>
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4'}>
                <h5>Qarz miqdori!: 0.00</h5>
                <button className={'btn btn-outline-primary'}>Saqlash</button>
                <button className={'btn btn-outline-primary'}>Saqlash va chek</button>
            </div>

        </div>
    )
}
export default SavdoQoshish