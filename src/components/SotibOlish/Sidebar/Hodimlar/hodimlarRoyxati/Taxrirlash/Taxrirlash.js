import './taxrir.css'
// import {Link,Route,Switch} from "react-router-dom";
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap";
import {useState} from "react";

function Taxrirlash() {

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }
    return(
        <div className={'row ht'}>
            <h5 className={'text-center mt-4'}>Xodim qo`shish</h5>
            <div className="col-md-12">

                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <div className="col-md-4">
                        <label htmlFor={'login1'}>Login</label>
                        <input type="text" id={'login1'} placeholder={'Mr/Mrs/Miss'} className={'form-control'}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor={'ismi'}>Ismi</label>
                        <input type="text" id={'ismi'} placeholder={'Ismi'} className={'form-control'}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor={'login2'}>Familiyasi</label>
                        <input type="text" id={'login2'} placeholder={'Familiyasi'} className={'form-control'}/>
                    </div>
                </div>

                <div className="col-md-12 d-flex mt-4 justify-content-between align-items-center">
                    <div className="col-md-6">
                        <label htmlFor={'email'}>Email</label>
                        <input type="text" className={'form-control'} placeholder={'Email'}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor={'faol'}>Faolmi ?</label>
                        <input type="checkbox" style={{width:'20px',height:'20px'}} id={'faol'}/>
                    </div>
                </div>
                <h5 className={'text-center mt-4'}>Lavozim vakolatlari</h5>
                <div className="col-md-12 d-flex mt-4 justify-content-between align-items-center">

                    <div className="col-md-4">
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Login parol berish</button>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor={'lavozimi'}>Lavozimi</label>
                        <select name="" id={'lavozimi'} className={'form-control'}>
                            <option value="#">Admin</option>
                            <option value="#">Casher</option>
                        </select>
                    </div>
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Log / Parol
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'log2'}>Login</label>
                            <input type="text" className={'form-control'} id={'log2'}/>
                            <label htmlFor={'log3'} className={'mt-3'}>Parol</label>
                            <input type="text" className={'form-control'} id={'log3'}/>
                            <label htmlFor={'log4'} className={'mt-3'}>Parolni takroran yozing</label>
                            <input type="text" className={'form-control'} id={'log4'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-primary'}>Saqlash</button>
                            <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default Taxrirlash