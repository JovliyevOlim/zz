import './xarid.css'
import {useState} from "react";
import {ModalBody,ModalHeader,ModalFooter,Modal} from "reactstrap";

function Xarid(){

    const [active,setActive] = useState(false);
    const [active2,setActive2] = useState(false);

    function toggle(){
        setActive(!active)
    }

    function toggle2(){
        setActive2(!active2)
    }

    return(
        <div className={'row mt-5'}>
            <h5 className={'text-center'}>Xarid qilish</h5>
            <div className="col-md-10 border mt-4 offset-1 d-flex">

                <div className={'col-md-3 p-4'}>
                    <div className={'d-flex'}>
                        <div>
                            <label htmlFor={'dil'}>Diller</label>
                            <select name="" id={'dil'} className={'form-control'}>
                                <option value="#">Tanlash</option>
                            </select>
                        </div>
                        <h4 style={{cursor:'pointer',marginTop:'25px',fontSize:'30px'}} onClick={toggle}>+</h4>
                    </div>
                </div>

                <div className="col-md-3 p-4">
                    <label htmlFor={'qisqa'}>Qisqa eslatma</label>
                    <input type="text" className={'form-control'} id={'qisqa'}/>
                    <label htmlFor={'baza'} className={'mt-3'}>Baza</label>
                    <select name="" id={'baza'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Shefir zavod</option>
                        <option value="#">Tanlash</option>
                    </select>
                </div>

                <div className="col-md-3 p-4">
                    <label htmlFor={'sana'}>Xarid sanasi</label>
                    <input type="date" className={'form-control mt-4'}/>
                    <label className={'mt-3'} htmlFor={'muddat'}>To`lov muddati</label>
                    <select name="" id={'muddat'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Oy</option>
                        <option value="#">Hafta</option>
                    </select>
                </div>

                <div className="col-md-3 p-4 ">
                    <label htmlFor={'status'}>Xarid statusi</label>
                    <select name="" className={'form-control'} id={'status'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Qabul qilindi</option>
                        <option value="#">Kutilmoqda</option>
                        <option value="#">Buyurtma berildi</option>
                    </select>
                    <label htmlFor={'qosh'} className={'mt-4'}>Qo`shimcha Hujjat</label>
                    <input type="file" className={'form-control'}/>
                </div>

                <Modal isOpen={active} toggle={toggle} style={{width:'500px'}}>
                    <ModalHeader>
                        Yangi qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <div className={'text-center'}>
                            <input type="radio" id={'radio1'}/>
                            <label htmlFor={'radio1'}>lang_v1.induvidial</label>
                            <input type="radio" id={'radio2'}/>
                            <label htmlFor={'radio2'}>Do`kon</label>
                        </div>
                        <label htmlFor={'id1'}>ID Raqami</label>
                        <input type="text" className={'form-control'} placeholder={'ID raqami'}/>
                        <div className={'d-flex justify-content-between mt-3'}>
                            <div>
                                <label htmlFor={'log'}>Login</label>
                                <input type="text" className={'form-control'} id={'log'}/>
                                <label htmlFor={'tel'}>Tel:</label>
                                <input type="text" className={'form-control'} id={'tel'}/>
                            </div>
                            <div>
                                <label htmlFor={'ismi'}>Ismi</label>
                                <input type="text" className={'form-control'}/>
                                <label htmlFor={'ikki'}>Ikkinchi raqam</label>
                                <input type="text" className={'form-control'} id={'ikki'}/>
                            </div>
                        </div>
                        <hr/>
                        <div className={'d-flex justify-content-between mt-3'}>
                            <div>
                                <label htmlFor={'log2'}>Otasining ismi</label>
                                <input type="text" className={'form-control'} id={'log2'}/>
                                <label htmlFor={'tel2'}>Telegram:</label>
                                <input type="text" className={'form-control'} id={'tel2'}/>
                            </div>
                            <div>
                                <label htmlFor={'ismi2'}>Familiyasi</label>
                                <input type="text" className={'form-control'} id={'ismi2'}/>
                                <label htmlFor={'ikkii2'}>Email</label>
                                <input type="text" className={'form-control'} id={'ikki2'}/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>
            </div>
            {/*offset-3*/}
            <h5 className={'text-center mt-5'}>To`lov qilish</h5>
            <div className="col-md-10 offset-1 border p-4 d-flex">
                <div className="col-md-6">
                    <label htmlFor={'avans'}>Avans 0 / To`lov so`mmasi</label>
                    <input type="text" className={'form-control'} id={'avans'}/>
                    <label className={'mt-3'} htmlFor={'tol'}>To`lov usuli</label>
                    <select name="" id={'tol'} className={'form-control'}>
                        <option value="#">Naqd</option>
                        <option value="#">Pastik</option>
                        <option value="#">Cheque</option>
                        <option value="#">Bank Transfer</option>
                        <option value="#">UzCard</option>
                        <option value="#">Humo</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor={'paid'}>Paid on</label>
                    <input type="date" className={'form-control'} id={'paid'}/>
                    <label htmlFor={'area1'} className={'mt-2'}>Eslatma</label>
                    <textarea name="" id={'area1'} cols="30" className={'form-control'} rows="2">

                    </textarea>
                </div>
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4 d-flex'}>
                <div className="col-md-6">
                    <h5 className={'text-center'}>Yetkazib berish</h5>
                    <label htmlFor={'yet'}>Yetkazib berish</label>
                    <input type="text" id={'yet'} className={'form-control'}/>
                    <button onClick={toggle2} className={'btn btn-outline-primary mt-4'}>+lang_v1.add_additional_experence</button>
                    <Modal isOpen={active2} toggle={toggle2}>
                        <ModalHeader>Yetkazib berish</ModalHeader>
                        <ModalBody>
                            <label htmlFor={'l1'}>lang_v1.add_additional_experence_name</label>
                            <input type="text" className={'form-control'} id={'l1'}/>
                            <label htmlFor={'l2'} className={'mt-3'}>Yetkazib berish narxi</label>
                            <input type="text" className={'form-control'} id={'l2'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-primary'}>Saqlash</button>
                            <button className={'btn btn-primary'} onClick={toggle2}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor={'yet2'}>(+)Yetkazib berish narxi</label>
                    <input type="text" className={'form-control'}/>
                </div>
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4'}>
                <h5>Qarz miqdori!: 0.00</h5>
                <button className={'btn btn-outline-primary'}>Saqlash</button>
            </div>

        </div>
    )
}
export default Xarid