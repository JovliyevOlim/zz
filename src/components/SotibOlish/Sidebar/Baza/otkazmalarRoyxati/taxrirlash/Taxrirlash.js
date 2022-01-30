function Taxrirlash(){
    return(
        <div className={'row p-3'}>
            <div className="col-md-12 p-4 pt-5">
                <h6>Yangi o`tkazma</h6>
                <div className="col-md-12 d-flex">
                    <div className="col-md-4">
                        <label htmlFor={'sana'}>Sana</label>
                        <input type="date" id={'sana'} className={'form-control'}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor={'qisqa'}>Qisqa eslatma</label>
                        <input type="date" className={'form-control'} id={'qisqa'}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor={'status'}>Status</label>
                        <select name="" id={'qisqa'} className={'form-control'}>
                            <option value="#">Tanlash</option>
                            <option value="#">Kutilmoqda</option>
                            <option value="#">in Transit</option>
                            <option value="#">Bajarildi</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-between mt-3">
                    <div className="col-md-6">
                        <label htmlFor={'bazadan'}>Bazadan(amaldagi baza)</label>
                        <select name="" id={'bazadan'} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor={'bazadan'}>Bazaga(o`tkazilgan baza)</label>
                        <select name="" id={'bazadan'} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-12 mt-5">
                    <h6 className={'text-center'}>Search Product</h6>
                    <div className="col-md-6 offset-3">
                        <input type="text" className={'form-control'} placeholder={'izlash product'}/>
                    </div>
                    <table className={'table mt-4'}>
                        <thead>
                            <tr>
                                <th>Maxsulot</th>
                                <th>Miqdori</th>
                                <th>Narxi</th>
                                <th>Jami</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    body qisim
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-12">
                    <label htmlFor={'yul'}>Yul haqi:</label>
                    <input type="text" className={'form-control'} id={'yul'}/>
                    <label htmlFor={'yul2'} className={'mt-3'}>Qisqa eslatma:</label>
                    <textarea className={'form-control'} name="" id="" cols="30" rows="3">

                    </textarea>
                    <button className={'btn mt-2 btn-outline-primary'}>Saqlash</button>
                </div>
            </div>
        </div>
    )
}
export default Taxrirlash