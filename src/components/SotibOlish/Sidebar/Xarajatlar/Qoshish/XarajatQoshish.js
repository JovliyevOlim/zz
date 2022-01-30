import {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function XarajatQoshish(){

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return(
        <div className={'row mt-5'}>
            <div className="col-md-10 offset-1">
                <h5>Xarajat qo`shish</h5>
            </div>

            <div className="col-md-10 offset-1 d-flex p-4 border mt-5">
                <div className="col-md-4 mt-4">
                    <select className={'form-control'} name="" >
                        <option value="#">Tanlash</option>
                        <option value="#">Shefir zavod(Bl001)</option>
                        <option value="#">Instrumentlar(Bl002)</option>
                    </select>

                    <label htmlFor={'mijoz'} className={'mt-4'}>Sana</label>
                    <input type="date" id={'mijoz2'} className={'form-control'}/>

                    <label htmlFor={'mijoz'} className={'mt-4'}>Qo`shimcha hujjat</label>
                    <input type="file" id={'mijoz2'} className={'form-control'}/>

                    <label htmlFor={'area1'}>Xarajat eslatmasi</label>
                    <textarea name="" id={'area1'} className={'form-control'} cols="30" rows="2">

                    </textarea>
                </div>

                <div className="col-md-4">
                    <label htmlFor={'muddat'}>Xarajat turi</label>
                    {/*<div className={'d-flex'}>*/}
                    {/*    <input type="number" className={'form-control'}/>*/}
                        <select name="" id="" className={'form-control'}>
                            <option value="#">Tanlash</option>
                            <option value="#">Oy</option>
                            <option value="#">Hafta</option>
                        </select>
                    {/*</div>*/}
                    <label htmlFor={'stat'} className={'mt-4'}>Xarajat qildi</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Boshliq</option>
                        <option value="#">Mavjud emas</option>
                    </select>

                    <label htmlFor={'savRaqam'} className={'mt-4'}>Amaldagi soliq</label>
                    <input type="number" className={'form-control'} placeholder={'savdo raqami'}/>

                    <label className={'mt-5'} htmlFor={'lang'}>lang_v1.is_refend</label>
                    <input onClick={toggle} itemID={'lang'} style={{width:'20px',height:'20px'}} type="checkbox" id={'lang'}/>
                </div>
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Qoshimcha
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'doim'}>Doim takrorlanadimi</label>
                            <input type="checkbox"  id={'doim'} style={{width:'20px',height:'20px'}}/><br/>
                            <label htmlFor={'xsana'} className={'mt-3'}>Xarajat sanasi</label>
                            <div className={'d-flex'}>
                                <input type="text" className={'form-control'}/>
                                <select name="" >
                                    <option value="#">Hafta</option>
                                    <option value="#">Oy</option>
                                    <option value="#">Yil</option>
                                </select>
                            </div>
                            <label htmlFor={'takror'}>Takrorlashlar soni</label>
                            <input type="number" className={'form-control'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-primary'}>Saqlash</button>
                            <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                <div className="col-md-4">
                    <label htmlFor={'savOyna'}>Qisqa eslatma</label>
                    <input type="text" className={'form-control'}/>

                    <label htmlFor={'hisobF'} className={'mt-4'}>Experence for contact</label>
                    <select name="" id={'hisobF'} className={'form-control'}>
                        <option value="#">Default</option>
                        <option value="#">Walk in customer</option>
                    </select>

                    <label htmlFor={'qoshim'} className={'mt-4'}>Jami summa</label>
                    <input type="text" className={'form-control'} id={'qoshim'}/>
                </div>

            </div>


            <div className="col-md-10 mt-4 offset-1 border p-4">
                <div className="col-md-6 offset-3 d-flex">
                    <input type="text" className={'form-control'} placeholder={'mahsulot nomi yoki shtrix kodini yozing'}/>
                    <h5 style={{fontSize:'32px',cursor:'pointer'}}>+</h5>
                </div>
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

            <div className="col-md-10 offset-1 mt-4 border p-4">
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
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4'}>
                <h5>Qarz miqdori!: 0.00</h5>
                <button className={'btn btn-outline-primary'}>Saqlash</button>
                <button className={'btn btn-outline-primary'}>Saqlash va chek</button>
            </div>

        </div>
    )
}
export default XarajatQoshish