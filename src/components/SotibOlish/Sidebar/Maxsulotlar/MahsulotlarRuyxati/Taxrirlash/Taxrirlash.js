import {useState} from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

function Taxrirlash() {

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    function toggle() {
        setActive(!active)
    }

    function toggle2() {
        setActive2(!active2)
    }

    function toggle3() {
        setActive3(!active3)
    }

    return (
        <div className={'row mt-5'}>
            <h4 className={'text-center'}>Mahsulot qo`shish / Taxrirlash</h4>
            <div className="col-md-10 border p-4 offset-1 d-flex">

                <div className="inputs col-md-4">
                    <label htmlFor={'maxNomi'}>Mahsulot nomi</label>
                    <input type="text" id={'maxNomi'} className={'form-control'}/>

                    <label htmlFor={'olcov'}>O`lchov birligi</label>
                    <div className={'d-flex justify-content-between mt-3'}>

                        <select name="" id={'olcov'} className={'form-control'}>
                            <option value="#">Tanlash</option>
                            <option value="#">Kg</option>
                            <option value="#">Kg</option>
                            <option value="#">Pieces</option>
                            <option value="#">Dona</option>
                        </select>
                        <h2 onClick={toggle} style={{cursor: 'pointer'}}>+</h2>
                    </div>
                    <label className={'mt-3'} htmlFor={'bol'}>Bo`lim</label>
                    <select name="" className={'form-control'} id={'bol'}>
                        <option value="">Tanlash</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor={'shtrixKod'}>Shtrix kod</label>
                    <input type="text" id={'shtrixKod'} className={'form-control'}/>

                    <label htmlFor={'firma'}>Ferma</label>
                    <div className={'d-flex mt-3'}>

                        <select name="" id={'firma'} className={'form-control'}>
                            <option value="#">Tanlash</option>
                        </select>
                        <h2 onClick={toggle2} style={{cursor: 'pointer'}}>+</h2>
                    </div>
                    <label className={'mt-3'} htmlFor={'bol2'}>Bo`lim</label>
                    <select name="" id={'bol2'} className={'form-control'}>
                        <option value="">Tanlash</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor={'shtrixKod'}>Shtrix kod turi</label>
                    <select name="" id="" className={'form-control'}>
                        <option value="">Cude</option>
                    </select>
                    <label htmlFor="" className={'mt-4'}>Bazalar</label>
                    <input type="text" className={'form-control'}/>
                </div>
            </div>

            <div className="col-md-4 mt-5 offset-1">
                <label onClick={toggle3} htmlFor={'miqdor'} style={{fontSize: '20px'}}>Miqdorni nazorat qilasizmi
                    ?</label>
                <input type="checkbox"  id={'miqdor'} style={{marginLeft: '20px', width: '20px', height: '20px'}}/>
            </div>

            <div className="col-md-4 mt-3" style={{marginLeft:'-80px'}}>
                {
                    active3 ?
                        <div>
                            <label htmlFor={'ogoh'}>Ogohlantiruvchi miqdor</label>
                            <input type="number" className={'form-control'} id={'ogoh'}/>
                        </div>
                        : ''
                }
                <label htmlFor={'mahRasmi'}>Mahsulotning Rasmi</label>
                <input type="file" id={'mahRasmi'} style={{background:'transparent'}}/>
            </div>

            <Modal isOpen={active} toggle={toggle}>
                <ModalHeader>
                    Birlik qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Nomi</label>
                    <input type="text" className={'form-control'} id={'nomi'}/>
                    <label htmlFor={'nomi2'}>Qisqa nom masalan Kg,MM</label>
                    <input type="text" id={'nomi2'} className={'form-control'}/>
                    <label htmlFor={'onli'}>O`nli kasrlarga ruxsat berish</label>
                    <select name="" id={'onli'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Ha</option>
                        <option value="#">Yuq</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={active2} toggle={toggle2}>
                <ModalHeader>
                    Brand qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Brand Nomi</label>
                    <input type="text" className={'form-control'} id={'nomi'}/>
                    <label htmlFor={'nomi2'}>Qisqa eslatma</label>
                    <input type="text" id={'nomi2'} className={'form-control'}/>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle2}>CHIQISH</button>
                </ModalFooter>
            </Modal>

            <div className="col-md-10 mt-5 offset-1 border">
                <label htmlFor={'sol'}>Amaldagi soliq</label>
                <select name="" id={'sol'} className={'form-control'}>
                    <option value="#">Tanlash</option>
                    <option value="#">Mavjud emas </option>
                </select>
                <label htmlFor={'turiMah'} className={'mt-3'}>Soliqning ajratilishi</label>
                <select name="" className={'form-control'} id={'turiMah'}>
                    <option value="#">Narxga qo`shiladi</option>
                    <option value="#">Narx ichida</option>
                </select>

                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>Olish narxi</th>
                            <th>Foyda foizda(%)</th>
                            <th>Sotish narxi</th>
                            <th>Mahsulot rasmi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor={'soliqszNarx'}>Soliqsiz narx </label>
                                <input type="number" id={'soliqszNarx'} style={{border:'2px solid gray'}}/><br/><p></p>
                               <label htmlFor={'soliqszNarx2'} style={{marginLeft:'10px'}}>Soliq bn narx </label>
                                <input type="number" id={'soliqszNarx2'} style={{border:'2px solid gray'}}/>
                            </td>
                            <td>
                                <label htmlFor={'foy'}>Foyda foizda</label><br/>
                                <input type="text" id={'foy'} placeholder={'foyda'} style={{border:'1px solid gray',padding:'10px'}}/>
                            </td>
                            <td>
                                <label htmlFor={''}>Sotish narxi</label><br/>
                                <input type="text" placeholder={'soliqsiz narxi'} style={{border:'1px solid gray',padding:'10px'}}/>
                            </td>
                            <td>
                                <input type="file"/>
                                <h5>mahsulot rasmi</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Taxrirlash