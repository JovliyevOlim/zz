import Edit from '../../../../../img/Edit.png'
import Settings from '../../../../../img/settings.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import './bazalar.css'


export default function Bazalar(){
    return (
        <div>
            <div className="col-md-12 mt-2">
                <div className="textHeader">
                    <h2>Bazalar</h2>
                    <p> boshqaruvi</p>
                </div>
                <div className="rowStyleBaza">
                        <div className="qoshish">
                                <h5>Sizning bazalaringiz</h5>
                                <button className='btn btn-primary'>+Qo'shish</button>
                        </div>
                        <div className="izlash">
                                <input type="text" placeholder='Izlash...'/>
                        </div>
                        <div className="table-responsive">
                            <table className='table table-striped table-bordered mt-4'>
                                <thead>
                                        <tr>
                                            <th>Nomi</th>
                                            <th>Baza IDsi</th>
                                            <th>Hudud</th>
                                            <th>Index</th>
                                            <th>Amallar</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>boshliq</td>
                                            <td>Boshliq</td>
                                            <td>Admin</td>
                                            <td></td>
                                            <td>
                                                    <button className='taxrirlash'> <img src={Edit} alt="" />Taxrirlash</button> 
                                                    <button className='korish'> <img src={Settings} alt="" />Sozlamalar</button>
                                                    <button className='ochirish'> <img src={Delete} alt="" />Bazani o'chirish</button>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                        <div className='sahifalar'>
                                <button>Ortga</button>
                                <button>1</button>
                                <button>Oldinga</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
